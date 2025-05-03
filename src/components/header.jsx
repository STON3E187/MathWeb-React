import Logo from "../assets/logo";

export default function Header(){
    return(
    <header className="header-container">
        <div className="header-menu">
          <a className="logo" href="#">
            <Logo />
            <span className="logo-titulo">mathweb.</span>
          </a>
            <nav className="nav-menu">
              <ul className="nav-menu-items">
                <li className="nav-menu-item">
                  <a href="#">Inicio</a>
                </li>
                <li className="nav-menu-item">
                  <a href="#">Cursos y Precios</a>
                </li>
                <li className="nav-menu-item">
                  <a href="#">Recursos</a>
                </li>
                <li className="nav-menu-item">
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </nav>
        </div>
      </header>
      );
}