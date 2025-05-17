import Logo from "../assets/logo";
import ArrowLogo from "../assets/arrow-logo";

import "../styles/footer.css"

export default function Footer(){
    return (
        <>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-email">
                    <p className="email-text">Suscríbete para recibir consejos y tácticas para crecer como deseas.</p>
                    <form className="email-form" method="post">
                        <input type="email" name="email-place" placeholder=" correo electronico" />
                        <button type="button"><ArrowLogo /></button>
                    </form>
                </div>
                <div className="footer-info">
                    <a className="logo footer-logo" href="#">
                        <Logo />
                        <span className="logo-titulo">mathweb.</span>
                    </a>
                    <div className="footer-ul-wrap">
                        <ul className="footer-ul">
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Contáctanos</a></li>
                            <li><a href="#">Preguntas Frecuentes</a></li>
                            <li><a href="#">Estudiantes</a></li>
                        </ul>
                        <ul className="footer-ul">
                            <li><a href="#">Acerca de Nosotros</a></li>
                            <li><a href="#">Política de Privacidad</a></li>
                            <li><a href="#">Términos de Usuario</a></li>
                            <li><a href="#">Trabaja con Nosotros</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}