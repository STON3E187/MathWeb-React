export default function ButtonLink({
    href ="",
    color="",
    contenido=""
}){
    return(
        <a href={href} className={`button ${color}`}>
            {contenido}
        </a>
    );
}