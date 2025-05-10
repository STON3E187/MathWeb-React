import ButtonLink from "./buttonLink";

export default function Hero(){


    // const textFrames = [
    //     [{text : "No", color : "red"}, {text : "Necesitas", color: "red"}, {text: "+ Memoria", color : "red"}],
    //     [{text : "No", color : "red"}, {text : "Necesitas", color: "blue"}, {text: "+ Memoria", color : "red"}],
    //     [{text : "No", color : "red"}, {text : "Necesitas", color: "blue"}, {text: "+ Memoria", color : "red"}],
    //     [{text : "No + Memoria", color : "red"}, {text : "Necesitas", color: "blue"}],
    //     [{text : "No + Memoria", color : "red"}, {text : "Necesitas Entender +", color: "blue"}],
    // ];

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
    </section>
    );
}