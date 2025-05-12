import { useEffect, useRef } from "react";
import { animate, createScope, createTimeline } from "animejs";
import ButtonLink from "./buttonLink";

export default function Hero(){

    const containerRef = useRef(null);
    const scope = useRef(null);



    useEffect(() => {
  scope.current = createScope({ containerRef }).add(() => {

    // Esta es la declaracion de la animacion para no repetir codigo
    const openAnimation = {
            y: ['4rem', '0rem'],
            opacity: 1,
            easing: 'inOutCubic',
            duration: 500
    };

    // Animaciones
    animate(".title-animation", openAnimation);
    animate(".hero-paragraph, .buttons-container", {
        ...openAnimation,
        delay: 3400
    });




    // Secuencia de animaciones del hero text
    const tl = createTimeline({ 
        defaults: { duration: 1000 },
     });
   tl.add(
        ".firstStep",
        {
            y: { to: "6rem", ease: "inOutCubic" },
            color: ["#E34456", "#434AAA"],
            ease: "inOutCubic"
        },
        1500
        )
        .add(
        ".thirdStep",
        {
            x: { to: "-30rem", ease: "inOutCubic" },
            ease: "inOutCubic"
        },
        "<"
        )
        .add(
        ".fourStep",
        {
            opacity: 1,
            ease: "inOutCubic"
        },
        "<<"
        );
    // ++++++++++++++++++++++++++++++++++++


    
  });

  return () => scope.current.revert();
}, []);


    return (
    <section className="hero-section" ref={containerRef}>
        <div className="hero-text">
            <div className="title-animation" style={{ opacity: 0 }} >
                <span className="red secondStep">No&nbsp;</span>
                <span className="red firstStep">Necesistas&nbsp;</span>
                <span className="red thirdStep">+ Memoria</span>
                <span className="blue fourStep">Entender +</span>
            </div>
            <p className="hero-paragraph" style={{ opacity: 0 }}>
            Olvida la memorización. Aprende el porqué de las fórmulas, comprende cada paso detrás de una operación y desarrolla pensamiento estructurado y racional para dominar la lógica matemática.
            </p>
            <div className="buttons-container" style={{ opacity: 0 }} >
                <ButtonLink href="#" color="hero-button" content="Cursos" />
                <ButtonLink href="#" color="hero-button" content="Contactos" />
            </div>
        </div>
    </section>
    );
}