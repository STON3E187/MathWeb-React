import Logo from "../assets/logo";
import { headerLinks } from "../data/allData";

import "../styles/headerNav.css"

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
                {headerLinks.map((link, index) => {
                  return(
                    <li key={index} className="nav-menu-item">
                      <a href={link.link}>{link.title}</a>
                    </li>
                  )
                })}
              </ul>
            </nav>
        </div>
      </header>
      );
}