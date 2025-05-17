import { useEffect, useState, useRef } from "react";
import MediaQuery from "react-responsive";
import { useInView } from "react-intersection-observer";
import { coursesData } from "../data/allData";
import "../styles/coursesSection.css";
import ButtonLink from "./buttonLink";
import { animate, createScope, stagger, utils } from "animejs";

export default function Courses(){

    const [courseLevel, setCourseLevel] = useState(null);

    const levels = {
        "beginner" : 0,
        "intermediate" : 1,
        "advance" : 2
    }
    
    const course = courseLevel !== null ? coursesData[levels[courseLevel]] : null;

    // Funcion que recive el Onclick dependiendo de su nivel de dificultad
    function changeLevel(level){
        setCourseLevel(level);
    }

    // Animacion para cuando la seccion entre en pantalla
    const scope = useRef(null);
    const [containerRef, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    useEffect(() => {
        // Si entra en vision activa la animacion
        if (inView === true){
            scope.current = createScope().add(()=>{
            animate(".course", {
                y: ['4rem', '0rem'],
                opacity: 1,
                easing: "inOutCubic",
                duration: 500,
            })

            // Efecto cascada de los packs
            animate(".card-button", {
                y: ['5rem', '0rem'],
                opacity: [0, 1],
                easing: "inOutCubic",
                delay: stagger(200),
                duration: stagger(200, { start: 600 }),

                //Importante, limpia los estilos inline cuando termina la animacion (sin esto no realiza el hover)
                onComplete: utils.cleanInlineStyles
            });
        });}

    // limpieza de la animacion
    return () => {
        if (scope.current) scope.current.revert();
    };

    },[inView])

    // Efecto del ClipPath en los cursos
  useEffect(() => {

    // Origen de los ClipPath(Donde comienza el circulo)
    const origins = {
      beginner: "circle(0% at 15% -15%)",
      intermediate: "circle(0% at 50% -15%)",
      advance: "circle(0% at 85% -15%)"
    };

    animate(".cards-container", {
      clipPath: [origins[courseLevel], "circle(100% at 50% 50%)"],
      duration: 800,
      easing: "easeInOutCubic",
    });
  }, [courseLevel]);

    return(
        <section className="course" ref={containerRef}>
                <div className="course-header">
                    <h2>Aprende lo que necesitas, entiende lo que haces</h2>
                    <p>
                    Nuestros cursos combinan explicaciones paso a paso, situaciones reales y herramientas visuales que te ayudan a dominar cada tema antes de llegar a la universidad.
                    </p>
                </div>

                <div className="card-wrap">
                    <MediaQuery maxWidth={1000}>
                        
                    </MediaQuery>
                    <MediaQuery minWidth={1000}>
                        <div className="cards-buttons">
                            <button className={`card-button beginner ${courseLevel === "beginner" ? "activate" : ""}`} onClick={() => {changeLevel("beginner")}}>Nivel Principiante</button>
                            <button className={`card-button intermediate ${courseLevel === "intermediate" ? "activate" : ""}`} onClick={() => {changeLevel("intermediate")}}>Nivel Intermedio</button>
                            <button className={`card-button advance ${courseLevel === "advance" ? "activate" : ""}`} onClick={() => {changeLevel("advance")}}>Nivel Avanzado</button>
                        </div>
                        <div className={`cards-wrap ${courseLevel}`}>
                            {course && (
                                <div className={`cards-container ${courseLevel}`} >
                                    <div className="card-text">
                                        <div className="card-content">
                                            <h2>Recursos</h2>
                                            {course.resources.map(function(element, index){
                                                return(
                                                    <div key={index}>
                                                        <h3 >{element.type}</h3>
                                                        <ul className="content-list">
                                                            {element.items.map(function(item, index){
                                                                return(
                                                                    <li key={index}>{item}</li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="card-content">
                                            <h2>Contenido</h2>

                                            <ul className="content-list">
                                                {course.content.map(function(item, index){
                                                    return(
                                                        <li key={index}>{item}</li>
                                                    );
                                                })}
                                            </ul>

                                            <p className={`card-price ${courseLevel}`}>
                                                Desde ${course.price}<span className="discount">${course.originalPrice}</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="card-buttons">
                                        <ButtonLink href="#" color={courseLevel} content="Unirse al Curso"/>
                                        <ButtonLink href="#" color={courseLevel} content="Probar Gratis"/>
                                    </div>

                                </div>
                            )}
                        </div>
                    </MediaQuery>
                </div>
        </section>
    );
}