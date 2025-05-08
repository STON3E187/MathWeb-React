import { useRef } from "react"
import "../styles/coursesSectionLegacy.css";

export default function CoursesLegacy(){

const cardPrincipiante = useRef(null);
const cardIntermedio = useRef(null);
const cardAvanzado = useRef(null);

const cardPrincipianteTitle = useRef(null);
const cardIntermedioTitle = useRef(null);
const cardAvanzadoTitle = useRef(null);

const toggleClassAll = (card, title) =>{

    const allCard = [cardPrincipiante, cardIntermedio, cardAvanzado];
    const allCardTitle = [cardPrincipianteTitle, cardIntermedioTitle, cardAvanzadoTitle];
    
    allCard.forEach((reference) => {
        console.log(reference.current);
        if (reference.current){
            reference.current.classList.toggle("activate", reference === card);
        }
    });

    allCardTitle.forEach((reference) => {
        if (reference.current){
            reference.current.classList.toggle("activate", reference === title);
        }
    });

}

return (<>
  {/*Cursos Card*/}
  <section className="course">

    <div className="course-header">
      <h2>Aprende lo que necesitas, entiende lo que haces</h2>
      <p>
      Nuestros cursos combinan explicaciones paso a paso, situaciones reales y herramientas visuales que te ayudan a dominar cada tema antes de llegar a la universidad.
      </p>
    </div>

    <div className="course-cards">

        {/*Carta de Principiante*/}
        <div className="course-card beginner" >
            <h2 className="card-title" ref={cardPrincipianteTitle} onClick={() => toggleClassAll(cardPrincipiante, cardPrincipianteTitle)}>Nivel Principiante</h2>
            <div className="card-container" ref={cardPrincipiante}>
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
                        <p className="card-price beginner">
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

        {/*Carta de Intermedio*/}
        <div className="course-card intermediate">
            <h2 className="card-title" ref ={cardIntermedioTitle}onClick={() => toggleClassAll(cardIntermedio, cardIntermedioTitle)}>Nivel Intermedio</h2>
            <div className="card-container" ref={cardIntermedio}>
                    <div className="card-content-text">
                        <div className="card-content">
                        <h2>Recursos</h2>
                            <div>
                                <h3>Videos:</h3>
                                <ul className="content-list">
                                    <li>Álgebra: "Ecuaciones usando balanzas virtuales" (8 min).</li>
                                    <li>Geometría: "Pitágoras en la arquitectura" (10 min).</li>
                                    <li>Estadística: "Gráficas con datos de TikTok" (9 min).</li>
                                </ul>
                            </div>
                        <div>
                            <h3>Herramientas digitales:</h3>
                            <ul className="content-list">
                            <li>Simulador de ecuaciones en GeoGebra.</li>
                            <li>Generador automático de problemas en Wordwall.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Proyectos prácticos:</h3>
                            <ul className="content-list">
                            <li>Medir el aula y calcular volúmenes.</li>
                            <li>Encuesta sobre redes sociales y gráfica de resultados.</li>
                            </ul>
                        </div>
                        </div>

                        <div className="card-content">
                            <h2>Contenido</h2>
                            <ul className="content-list">
                                <li>Operaciones con números racionales y potencias.</li>
                                <li>
                                Álgebra: ecuaciones de primer y segundo grado, sistemas de
                                ecuaciones.
                                </li>
                                <li>
                                Geometría: teorema de Pitágoras, ángulos, polígonos, circunferencia.
                                </li>
                                <li>Proporcionalidad y porcentajes.</li>
                                <li>Funciones lineales y gráficas.</li>
                                <li>Probabilidad básica y estadística (media, moda, mediana).</li>
                                <li>Introducción a la trigonometría (seno, coseno, tangente).</li>
                            </ul>
                            <p className="card-price intermediate">
                                Desde $20<span className="discount">$30</span>
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

        {/*Carta de Avanzado*/}
        <div className="course-card advanced">
            <h2 className="card-title" ref={cardAvanzadoTitle} onClick={() => toggleClassAll(cardAvanzado, cardAvanzadoTitle)}>Nivel Avanzado</h2>
            <div className="card-container" ref={cardAvanzado}>
                    <div className="card-content-text">
                        <div className="card-content">
                        <h2>Recursos</h2>
                        <div>
                            <h3>Videos:</h3>
                            <ul className="content-list">
                            <li>Cálculo: "Derivadas en movimiento" (12 min).</li>
                            <li>Matemáticas financieras: "Intereses compuestos" (14 min).</li>
                            <li>Programación lineal: "Optimizando rutas de delivery" (15 min).</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Recursos avanzados:</h3>
                            <ul className="content-list">
                            <li>Calculadora gráfica Desmos con tutorial integrado.</li>
                            <li>Casos de estudio con hojas de cálculo (Google Sheets).</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Actividades:</h3>
                            <ul className="content-list">
                            <li>Analizar préstamos bancarios reales.</li>
                            <li>Optimizar presupuestos familiares.</li>
                            </ul>
                        </div>
                        </div>
                        <div className="card-content">
                        <h2>Contenido</h2>
                        <ul className="content-list">
                            <li>Álgebra avanzada: polinomios, factorización, números complejos.</li>
                            <li>Geometría analítica (rectas, parábolas, circunferencias).</li>
                            <li>Funciones exponenciales y logarítmicas.</li>
                            <li>Cálculo diferencial e integral (límites, derivadas, integrales).</li>
                            <li>Probabilidad y distribuciones (binomial, normal).</li>
                            <li>Matemáticas financieras (interés simple y compuesto).</li>
                            <li>Programación lineal (optimización).</li>
                        </ul>
                        <p className="card-price advanced">
                            Desde $35<span className="discount">$50</span>
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