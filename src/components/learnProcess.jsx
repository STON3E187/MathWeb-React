import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { animate, createScope } from "animejs";
import { processList } from "../data/allData";

export default function LearnProcess(){


// Animacion para cuando la seccion entre en pantalla
    const scope = useRef(null);
    const [containerRef, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    useEffect(() => {
        // Si entra en vision activa la animacion
        if (inView === true){
            scope.current = createScope().add(()=>{
            animate(".learn-proc", {
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
                                    <h3>{listIndex.title}</h3>
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