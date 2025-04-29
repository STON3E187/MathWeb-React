import ButtonLink from "./button_link";

export default function Hero(){
    return (
    <section className="hero-section">
    <div className="hero-text">
        <h1>Su socio de desarrollo para el comercio digital</h1>
        <p>
        Como agencia de desarrollo, creamos soluciones escalables para empresas
        minoristas. Ya sea un sistema de tiendas estable sin limitaciones, sitios
        web de campaña emocionantes, o software de negocios individual para
        procesos limpios.
        </p>
        <div className="buttons-container">
            <ButtonLink href="#" color="negro" contenido="Cursos y Precios" />
            <ButtonLink href="#" color="negro" contenido="Contactos" />
        </div>
    </div>
    {/*Aqui abajo ira la animacion*/}
    <div />
    </section>
    )
}