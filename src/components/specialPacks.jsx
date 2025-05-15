import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { animate, createScope, stagger } from "animejs";
import { packList } from "../data/allData";
// Packs Styles
import "../styles/packsColors.css"
export default function SpecialPacks(){

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
                    animate(".packs", {
                        y: ['4rem', '0rem'],
                        opacity: 1,
                        easing: "inOutCubic",
                        duration: 400,
                    });

                    // Efecto cascada de los packs
                    animate(".pack-card", {
                        y: ['5rem', '0rem'],
                        opacity: [0, 1],
                        easing: "inOutCubic",
                        delay: stagger(100),
                        duration: stagger(100, { start: 500 })
                    });
        });}

    // limpieza de la animacion
    return () => {
        if (scope.current) scope.current.revert();
    };

    },[inView])

    return (
        <>
            <section className="packs" ref={ containerRef }>
                <h2 className="packs-header">Paquetes<span>Especiales</span></h2>
                {packList.map(function(pack ,index){
                    return (
                        <div key={index} className="pack-card">
                                <h3>{pack.title}</h3>
                                <ul className="pack-list">
                                    {pack.list.map(
                                        function(sentence, sentenceIndex){
                                            return(
                                            <li key={sentenceIndex}>{sentence}</li>
                                        );
                                    })}
                                </ul>
                            <div className="price-wrap">
                                    <p className="pack-price">
                                        {pack.price}<span className="pack-discount">{pack.discount}</span>
                                    </p>
                                    <p className="pack-saveoff">{pack.saveOff}</p>
                            </div>
                        </div>);
                })}
            </section>
        </>
    )
}