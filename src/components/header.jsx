//Nota para mi yo del futuro, mucha parte logica de este componente lo sacaste del
//portafolio v4 de Brittany Chiang, gracias Brittany

import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import useScrollDirection from "../hooks/useScroll.jsx";
import Logo from "../assets/logo.jsx";
import { headerLinks } from "../data/allData.js";
import "../styles/headerNav.css"
import "../styles/headerNavResponsive.css";

export default function Header() {
  const [activate, setActivate] = useState(false);
  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const menuButtonRef = useRef(null);
  const navMenuRef = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 1000 });

  // Determina las clases basadas en el scroll
  const headerClasses = [
    "header-container",
    !scrolledToTop ? "scrolled" : "",
    !scrolledToTop && scrollDirection === "down" ? "hide" : "show",
    scrolledToTop ? "scrolled-to-top" : ""
  ].filter(Boolean).join(" ");

  let menuFocus;
  let firstFocus;
  let lastFocus;

  const setFocus = () => {
    menuFocus = [menuButtonRef.current, ...Array.from(navMenuRef.current.querySelectorAll("a"))];
    firstFocus = menuFocus[0];
    lastFocus = menuFocus[menuFocus.length - 1];
  };

  const handleBackwardTab = (event) => {
    if (document.activeElement === firstFocus) {
      event.preventDefault();
      lastFocus.focus();
    }
  };

  const handleForwardTab = (event) => {
    if (document.activeElement === lastFocus) {
      event.preventDefault();
      firstFocus.focus();
    }
  };

  
  const handleClick = () => {
    setActivate(!activate);
  };

  const tabDetecter = (event) => {
    switch(event.key){

      case "Escape":{
        setActivate(false);
        break;
      }

      case "Tab":{

        if (menuFocus && menuFocus.length === 1){
          event.preventDefault();
          break;
        }
        if (event.shiftKey) {
          handleBackwardTab(event);
        } else {
          handleForwardTab(event);
        }
        break;
      }

      default:{
        break;
      }
    }
  };

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };
  
  useEffect(() => {

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', tabDetecter);

    setFocus();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.addEventListener('keydown', tabDetecter);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('blur', activate);
  }, [activate]);

  return (
    <header className={headerClasses}>
      <div className="header-menu">
        <a className="logo" href="#">
          <Logo />
          <span className="logo-titulo">mathweb.</span>
        </a>

        {isMobile && <>
          <div className={`overlay ${activate ? "activate" : ""}`} onClick={handleClick}>
          </div>
          
          <button 
            ref={menuButtonRef}
            className={`nav-button ${activate ? "activate" : ""}`} 
            onClick={handleClick} 
            aria-label="Menu">
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
        </>}

        

        <nav className={`${isMobile ? "nav-menu-mobile" : "nav-menu"} ${activate ? "activate" : ""}`} ref={navMenuRef}>
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