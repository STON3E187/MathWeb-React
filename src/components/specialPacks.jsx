import { packList } from "../data/allData";

export default function SpecialPacks(){

   
    return (
        <>
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