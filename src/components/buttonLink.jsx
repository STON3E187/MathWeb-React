export default function ButtonLink({
    href ="",
    color="",
    content=""
}){
    return(
        <a href={href} className={`button ${color}`}>
            {content}
        </a>
    );
}