// Todo este codigo le pertenece a Brittany Chiang
// GitHub = https://github.com/bchiang7

const SCROLL_UP = "up";
const SCROLL_DOWN = "down";

import { useEffect, useState } from "react";

const useScrollDirection = ({initialDirection, thresholdPixels, off} = {}) => {

    const [scrollDir, setScrollDir] = useState(initialDirection);

    useEffect(() => {
        const threshold = thresholdPixels || 0 ;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            // Este es el umbral del Scroll, si el scroll no supera el umbral, no retorna nada
            // sino, continua con lo siguiente
            if (Math.abs(scrollY - lastScrollY) < threshold){
                ticking = false;
                return;
            }

            // Esto es para notificar el cambio de direccion
            setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);

            // Esto es para resetear toda la funcion
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        //Esto es un patrón de limitación que controla la frecuencia con que se ejecuta updateScrollDir durante el scroll.
        const onScroll = () => {
            if (!ticking){
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };
        
        /**
         * Bind the scroll handler if `off` is set to false.
         * If `off` is set to true reset the scroll direction.
         */

        // Esto permite desactivar el scroll, por ejemplo cuando se abre una modal
        // El comentario explica su funcionamiento
        !off ? window.addEventListener("scroll", onScroll) : setScrollDir(initialDirection);

        return () => window.removeEventListener('scroll', onScroll);
        
    }, [initialDirection, thresholdPixels, off])

    return scrollDir;
}

export default useScrollDirection;