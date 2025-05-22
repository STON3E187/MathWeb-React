import { useEffect, useRef } from "react";
import MediaQuery from "react-responsive";
import { useInView } from "react-intersection-observer";
import { animate, createScope, createTimeline } from "animejs";
import ButtonLink from "./buttonLink";
import "../styles/heroSection.css"

export default function Hero(){
    
    // Animacion para cuando la seccion entre en pantalla
    const scope = useRef(null);
    const [containerRef, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    useEffect(() => {
    if(inView === true){scope.current = createScope({
        mediaQueries:{
            isSmall : "(min-width: 1000px)"
        }
    }).add(self => {

        const { isSmall } = self.matches;
        
        // Esta es la declaracion de la animacion para no repetir codigo
        const openAnimation = {
                y: ['4rem', '0rem'],
                opacity: 1,
                easing: "inOutCubic",
                duration: 500
        };

        // Animaciones
        animate(".title-animation, .hero-section", openAnimation);
        animate(".hero-paragraph, .buttons-container", {
            ...openAnimation,
            delay: 2400
        });

        // Secuencia de animaciones del hero text

        if(isSmall){
            const tl = createTimeline({ 
                defaults: { duration: 500 },
            });

            tl.add(
                ".firstStep",
                {
                    y: "6rem",
                    color: ["#E34456", "#434AAA"],
                    ease: "inOutCubic"
                },
                1500
            )
            .add(
                ".thirdStep",
                {
                    x: "-30rem",
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
        }
        else{
            const tl = createTimeline({ 
                defaults: { duration: 500 },
            });

            tl.add(
                ".secondStep",
                {
                    x: ["6rem", "0rem"],
                    opacity: 1,
                    ease: "inOutCubic"
                },
                600
            )
            .add(
                ".thirdStep",
                {
                    color: ["#E34456", "#434AAA"],
                    ease: "inOutCubic"
                },
                1200
            )
            .add(
                ".fourStep",
                {
                    x: ["6rem", "0rem"],
                    opacity: 1,
                    ease: "inOutCubic"
                },
                "<"
            );
        }
        // ++++++++++++++++++++++++++++++++++++ 
    });}

    // limpieza de la animacion
    return () => {
        if (scope.current) scope.current.revert();
    };

}, [inView]);


    return (
    <section className="hero-section" ref={containerRef}>
        <div className="hero-text">
            <div className="title-animation" style={{ opacity: 0 }} >

                <MediaQuery minWidth={1000}>
                    <span className="red secondStep">No&nbsp;</span>
                    <span className="red firstStep">Necesitas&nbsp;</span>
                    <span className="red thirdStep">+&nbsp;Memoria</span>
                    <span className="blue fourStep">Entender&nbsp;+</span>
                </MediaQuery>

                <MediaQuery maxWidth={1000}>
                    <span className="red firstStep">No&nbsp;</span>
                    <span className="red secondStep">+&nbsp;Memoria</span>
                    <span className="red thirdStep">Necesitas&nbsp;</span>
                    <span className="blue fourStep">Entender&nbsp;+</span>
                </MediaQuery>
                
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