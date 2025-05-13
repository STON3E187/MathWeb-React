import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { coursesData } from "../data/allData";
import "../styles/coursesSection.css";
import ButtonLink from "./buttonLink";
import { animate, createScope } from "animejs";

export default function Courses(){

    const [courseLevel, setCourseLevel] = useState(null);
    const levels = {
        "beginner" : 0,
        "intermediate" : 1,
        "advance" : 2
    }
    const course = courseLevel !== null ? coursesData[levels[courseLevel]] : null;

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
        });}

    // limpieza de la animacion
    return () => {
        if (scope.current) scope.current.revert();
    };

    },[inView])

    return(
        <section className="course" ref={containerRef}>
                <div className="course-header">
                    <h2>Aprende lo que necesitas, entiende lo que haces</h2>
                    <p>
                    Nuestros cursos combinan explicaciones paso a paso, situaciones reales y herramientas visuales que te ayudan a dominar cada tema antes de llegar a la universidad.
                    </p>
                </div>

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
            

        </section>
    );
}