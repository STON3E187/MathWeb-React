import ButtonLink from "./buttonLink";

export default function Hero(){
    return (
    <section className="hero-section">
        <div className="hero-text">
            <h1>No Necesitas Memoria <span className="hero-second-text">Necesitas Entender</span></h1>
            <p>
            Olvida la memorización. Aprende el porqué de las fórmulas, comprende cada paso detrás de una operación y desarrolla pensamiento estructurado y racional para dominar la lógica matemática.
            </p>
            <div className="buttons-container">
                <ButtonLink href="#" color="hero-button" content="Cursos y Precios" />
                <ButtonLink href="#" color="hero-button" content="Contactos" />
            </div>
        </div>
        {/*Aqui abajo ira la animacion*/}
        <div />
    </section>
    )
}