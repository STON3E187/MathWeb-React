import { useState,useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { animate, createScope, stagger } from "animejs";
import ArrowLogo from "../assets/arrow-logo";
import { commentsContent } from '../data/allData';

export default function Comment() {
  const [actIndex, setActIndex] = useState(0);

  const showNext = () => {

    setActIndex((prev) => 
      prev + 2 >= commentsContent.length ? 0 : prev + 2
    );

    animate(".comment-card", {
      y: ['5rem', '0rem'],
      opacity: [0, 1],
      easing: "inOutCubic",
      duration: stagger(200, { 
        start: 400,
        reversed: true
        })
    });
  };

  const showPrev = () => {

    setActIndex((prev) => 
      prev - 2 < 0 ? commentsContent.length - 2 : prev - 2
    );

    animate(".comment-card", {
        y: ['5rem', '0rem'],
        opacity: [0, 1],
        easing: "inOutCubic",
        duration: stagger(200, { start: 400 })
    });
  };

  const commentsVisible = commentsContent.slice(actIndex, actIndex + 2);


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
              animate(".comments", {
                  y: ['4rem', '0rem'],
                  opacity: 1,
                  easing: "inOutCubic",
                  duration: 700,
              })

              // Efecto cascada de los packs
              animate(".comment-card", {
                  y: ['5rem', '0rem'],
                  opacity: [0, 1],
                  easing: "inOutCubic",
                  delay: stagger(200),
                  duration: stagger(200, { start: 600 })
              });
          });}
  
      // limpieza de la animacion
      return () => {
          if (scope.current) scope.current.revert();
      };
  
      },[inView])
  return (
    <section className="comments" ref={containerRef}>
      <h2>Qué dicen nuestros estudiantes</h2>

      <div className="comment-container">
        <button 
            onClick={showPrev} 
            className="comment-button left"
            aria-label="Comentarios anteriores"
            >
            <ArrowLogo />
        </button>
        
        {commentsVisible.map((comment, index) => (
          <div key={index} className="comment-card">
            <div className="comment-head">
              <img src={comment.avatar} alt={`Foto de ${comment.name}`} />
              <div className="text-wrap">
                <h3 className="name">{comment.name}</h3>
                <p className="sub-title">{comment.subTitle}</p>
                <p className="time">{comment.time}</p>
              </div>
            </div>
            <div className="text-comment">
              <p className="sentence">"{comment.comment}"</p>
              <div className="star-rate">
                <span>{comment.score} / 5</span>
                <div className="stars"></div>
              </div>
            </div>
          </div>
        ))}


        <button 
          onClick={showNext} 
          className="comment-button"
          aria-label="Siguientes comentarios"
        >
          <ArrowLogo />
        </button>
      </div>
    </section>
  );
}
