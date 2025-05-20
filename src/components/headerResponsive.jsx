import { useEffect, useState } from "react";
import useScrollDirection from "../hooks/useScroll.jsx";
import Logo from "../assets/logo";
import { headerLinks } from "../data/allData";
import "../styles/headerNavResponsive.css";

export default function HeaderResponsive() {
  const [activate, setActivate] = useState(false);
  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  // Esto es una poronga, pero bueno, no se me ocurre otra forma que no sea complicada
  // esto es una mala practica en React, este es un ejemplo de lo que no hacer jajaja
  const container = document.querySelector("body")

  
  const handleClick = () => { 
    setActivate(!activate);
    !activate ? container.style.overflow = "hidden" : container.style.overflow = "auto";
  };

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determina las clases basadas en el scroll
  const headerClasses = [
    "header-container",
    !scrolledToTop ? "scrolled" : "",
    !scrolledToTop && scrollDirection === "down" ? "hide" : "show",
    scrolledToTop ? "scrolled-to-top" : ""
  ].filter(Boolean).join(" ");

  return (
    <header className={headerClasses}>
      <div className="header-menu">
        <a className="logo" href="#">
          <Logo />
          <span className="logo-titulo">mathweb.</span>
        </a>
        <div className={`overlay ${activate ? "activate" : ""}`}>
        </div>
        <nav className={`nav-menu-mobile ${activate ? "activate" : ""}`}>
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

        <button className={`nav-button ${activate ? "activate" : ""}`} onClick={handleClick} aria-label="Menu">
          <svg
            className="button-menu"
            width={50}
            height={50}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 11L47 11" stroke="white" strokeWidth={5} strokeLinecap="round" />
            <path d="M3 25L47 25" stroke="white" strokeWidth={5} strokeLinecap="round" />
            <path d="M3 39L47 39" stroke="white" strokeWidth={5} strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}