import { useRef } from "react"

export default function Courses(){

const cardSelector = useRef(null);

function toggleClassActivate(){
    if (cardSelector.current){
        cardSelector.current.classList.toggle("activate");
        console.log(cardSelector.current.classList.contains('activate'))
    }
}

return (<>
  {/*Cursos Card*/}
  <section className="course">
    <div className="course-header">
      <h2>Las matematicas asasasasasno sirven para nada</h2>
      <p>
        Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
    </div>
      <div className="course-cards">
        {/*Carta de Principiante*/}
        <div className="course-card" ref={cardSelector}>
            <div className="card-tittle"  onClick={toggleClassActivate}>
            <h2>Nivel Principiante</h2>
            </div>
            <div className="card-container">
                    <div className="card-content-text">
                        <div className="card-content">
                        <h2>Recursos</h2>
                        <div>
                            <h3>Videos:</h3>
                            <ul className="content-list">
                            <li>
                                Operaciones básicas: "Suma y resta con ejemplos cotidianos"
                                (6 min).
                            </li>
                            <li>
                                Fracciones: "Mitades y cuartos usando chocolate" (5 min).
                            </li>
                            <li>Geometría: "Área y perímetro con LEGO" (7 min).</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Interactivos:</h3>
                            <ul className="content-list">
                            <li>Juego de memoria con tablas de multiplicar.</li>
                            <li>App "Number Run" para practicar cálculo mental.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Material descargable</h3>
                            <ul className="content-list">
                            <li>
                                Fichas de problemas con temática de supermercado (PDF).
                            </li>
                            <li>Plantillas para recortar figuras geométricas.</li>
                            </ul>
                        </div>
                        </div>
                        <div className="card-content">
                        <h2>Contenido</h2>
                        <ul className="content-list">
                            <li>
                            Números naturales, enteros y sus operaciones (suma, resta,
                            multiplicación, división).
                            </li>
                            <li>
                            Fracciones básicas y decimales (comparación, suma, resta).
                            </li>
                            <li>
                            Figuras geométricas planas (círculo, triángulo, cuadrado) y
                            sus propiedades.
                            </li>
                            <li>Cálculo de perímetros y áreas simples.</li>
                            <li>Unidades de medida (longitud, peso, capacidad, tiempo).</li>
                            <li>
                            Resolución de problemas con dinero y situaciones cotidianas.
                            </li>
                            <li>
                            Introducción a la estadística básica (gráficas de barras).
                            </li>
                        </ul>
                        <p className="card-price">
                        Desde $10<span className="discount">$15</span>
                        </p>
                        </div>
                    </div>
                <div className="card-buttons">
                    <a href="#" className="button">
                        Probar Gratis
                    </a>
                    <a href="#" className="button">
                        Unirse al Curso
                    </a>
                </div>
            </div>
        </div>
      </div>
  </section>
</>)
}