export default function SpecialPacks(){
    return (
        <>
        {/*Paquetes Especiales*/}
        <section className="packs">

            <div className="packs-header">
                <h2>Paquetes<span>Especiales</span></h2>
            </div>

            <div className="pack-card">
                <h3>(Super Pack Completo)2</h3>
                <ul className="pack-list">
                    <li>Taller de transición a Universidad (2 horas).</li>
                    <li>Todos los niveles.</li>                
                </ul>
                <p className="pack-price">Desde $60</p>
            </div>

            <div className="pack-card">
                <h3>Camino a la (Universidad)</h3>
                <ul className="pack-list">
                    <li>Nivel Intermedio + Avanzado.</li>
                    <li>Taller de transición a Universidad (2 horas).</li>
                </ul>
                <p className="pack-price">Desde $45</p>
            </div>

            <div className="pack-card">
                <h3>Aprendizaje Continuo++</h3>
                <ul className="pack-list">
                    <li>Nivel Principiante + Intermedio.</li>
                    <li>Guía de apoyo para padres (PDF).</li>
                    <li>1 sesión grupal familiar (dudas generales).</li>
                    <li>6 sesiones grupales (3 por nivel).</li>
                </ul>
                <p className="pack-price">Desde $25</p>
            </div>

            <div className="pack-card">
                <h3>Institucional / Intermedio</h3>
                <ul className="pack-list">
                    <li>5 x paquetes de Nivel Intermedio.</li>
                    <li>Informes de progreso grupales.</li>
                    <li>Webinar para profesores (2 horas).</li>
                </ul>
                <div className="price-wrap">
                    <p className="pack-price">
                        Desde $50<span className="pack-discount">$10c/u</span>
                    </p>
                    <p className="pack-saveoff">Ahorra $25 - $50</p>
                </div>
            </div>

            <div className="pack-card">
                <h3>Institucional / Avanzado</h3>
                <ul className="pack-list">
                    <li>5 x paquetes de Nivel Avanzado.</li>
                    <li>Informes de progreso grupales.</li>
                    <li>Webinar para profesores (2 horas).</li>
                    <li>Taller de transición a Universidad (2 horas).</li>
                </ul>
                <div className="price-wrap">
                    <p className="pack-price">
                        Desde $80<span className="pack-discount">$20c/u</span>
                    </p>
                    <p className="pack-saveoff">Ahorra $75 - $150</p>
                </div> 
            </div>

        </section>
        </>
    )
}