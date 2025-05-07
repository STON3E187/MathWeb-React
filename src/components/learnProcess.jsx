import { processList } from "../data/allData";

export default function LearnProcess(){
    return (
        <>
            <section className="learn-proc">
                <div className="learn-proc-container">
                    <div className="learn-proc-title">
                        <h2>Así Enseñamos Matemáticas:</h2>
                        <p>Guiamos a los estudiantes para que desarrollen pensamiento estructurado, comprendan los conceptos y apliquen la lógica detrás de cada operación.</p>
                    </div>
                    <div className="list-proc-side">
                        <ul className="porc-list">
                            {processList.map(function(listIndex ,index){
                                return (
                                    <li key={index}>
                                        <h3>{listIndex.title}</h3>
                                        <p>{listIndex.paragraph}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}