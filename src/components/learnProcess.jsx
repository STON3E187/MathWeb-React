import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { animate, createScope, onScroll, utils } from "animejs";
import { processList } from "../data/allData";

export default function LearnProcess(){


// Animacion para cuando la seccion entre en pantalla
    const scope = useRef(null);
    const {ref: containerRef, inView: inViewOne} = useInView({
        threshold: 0.2,
        triggerOnce: true
    });
    useEffect(() => {

        // Si entra en vision activa la animacion
        if (inViewOne === true){
                scope.current = createScope().add(()=>{
                animate(".learn-proc", {
                    y: ['4rem', '0rem'],
                    opacity: 1,
                    easing: "inOutCubic",
                    duration: 500,
                })

                const listTitles = utils.$(".proc-list-title");

                listTitles.forEach((item) =>{
                    animate(item,{
                        autoplay: onScroll({
                            container: "body",
                            enter: "60% top",
                            leave: "35% bottom",
                            // Cuando entra en el threshold
                            onEnter: () => {
                                animate(item, {
                                    color: "#E34456",
                                    duration: 300,
                                    easing: "inOutCubic"
                                });
                            },
                            // Cuando sale del threshold
                            onLeave: () => {
                                animate(item, {
                                    color: "#200A2A",
                                    duration: 300,
                                    easing: "inOutCubic"
                                });
                            }
                        })
                    })
                })

            });
        };

    // limpieza de la animacion
    return () => {
        if (scope.current) scope.current.revert();
    };

    },[inViewOne])

    return (
        <>
            <section className="learn-proc" ref={containerRef}>
                <div className="learn-wrap">
                    <div className="learn-proc-title">
                        <h2>Así Enseñamos Matemáticas:</h2>
                        <p>Guiamos a los estudiantes para que desarrollen pensamiento estructurado, comprendan los conceptos y apliquen la lógica detrás de cada operación.</p>
                    </div>
                    <ul className="proc-list">
                        {processList.map(function(listIndex ,index){
                            return (
                                <li key={index}>
                                    <h3 className="proc-list-title">{listIndex.title}</h3>
                                    <p>{listIndex.paragraph}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    );
}