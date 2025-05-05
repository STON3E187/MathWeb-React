export default function SpecialPacks(){
   
    const packList = [

        {
            "title": "(Super Pack Completo)2",
            "list" : [
                "Taller de transición a Universidad (2 horas).",
                "Todos los niveles."
            ],
            "price" : "Desde $60",
            "discount" : null,
            "saveOff" : null
        },
        {
            "title": "Camino a la (Universidad)",
            "list" : [
                "Nivel Intermedio + Avanzado.",
                "Taller de transición a Universidad (2 horas)."
            ],
            "price" : "Desde $45",
            "discount" : null,
            "saveOff" : null
        },
        {
            "title": "Aprendizaje Continuo++",
            "list" : [
                "Nivel Intermedio + Avanzado.",
                "Guía de apoyo para padres (PDF).",
                "1 sesión grupal familiar (dudas generales).",
                "6 sesiones grupales (3 por nivel)."
            ],
            "price" : "Desde $25",
            "discount" : null,
            "saveOff" : null
        },
        {
            "title": "Institucional / Intermedio",
            "list" : [
                "5 x paquetes de Nivel Intermedio.",
                "Informes de progreso grupales.",
                "Webinar para profesores (2 horas)."
            ],
            "price" : "Desde $50",
            "discount" : "$10c/u",
            "saveOff" : "Ahorra $25 - $50"
        },
        {
            "title": "Institucional / Avanzado",
            "list" : [
                "5 x paquetes de Nivel Avanzado.",
                "Informes de progreso grupales.",
                "Webinar para profesores (2 horas).",
                "Taller de transición a Universidad (2 horas)."
            ],
            "price" : "Desde $50",
            "discount" : "$10c/u",
            "saveOff" : "Ahorra $25 - $50"
        }
];
   
    return (
        <>
        {/*Paquetes Especiales*/}
            <section className="packs">
                <h2 className="packs-header">Paquetes<span>Especiales</span></h2>

                {packList.map(function(pack ,index){
                    return (
                        <div key={index} className="pack-card">
                                <h3>{pack.title}</h3>
                                <ul className="pack-list">
                                    {pack.list.map(
                                        function(sentence, sentenceIndex){
                                            return(
                                            <li key={sentenceIndex}>{sentence}</li>
                                        );
                                    })}
                                </ul>
                            <div className="price-wrap">
                                    <p className="pack-price">
                                        {pack.price}<span className="pack-discount">{pack.discount}</span>
                                    </p>
                                    <p className="pack-saveoff">{pack.saveOff}</p>
                            </div>
                        </div>);
                })}
            </section>
        </>
    )
}