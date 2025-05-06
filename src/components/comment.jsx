import { useState } from 'react';
import ArrowLogo from "../assets/arrow-logo";
import { commentsContent } from '../data/allData';

export default function Comment() {
  const [actIndex, setActIndex] = useState(0);

  // Corrección: Las funciones estaban invertidas (before/after)
  const showNext = () => {
    setActIndex((prev) => 
      prev + 2 >= commentsContent.length ? 0 : prev + 2
    );
  };

  const showPrev = () => {
    setActIndex((prev) => 
      prev - 2 < 0 ? commentsContent.length - 2 : prev - 2
    );
  };

  const commentsVisible = commentsContent.slice(actIndex, actIndex + 2);

  return (
    <section className="comments">
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
