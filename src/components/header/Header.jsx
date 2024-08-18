"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { saveAs } from "file-saver";
import "../../blocks/header.css";
import Luz from "../Luz";

export default function Header() {
  const [isPopupActive, setIsPopupActive] = useState(false);

  function openPopup() {
    setIsPopupActive(true);
  }

  function closePopup() {
    setIsPopupActive(false);
  }

  function handleLinkClick() {
    closePopup();
  }

  function downloadCV() {
    saveAs("../../utils/Julio-lima", "CV-Julio-Lima.pdf"); // Caminho para o seu arquivo PDF
  }

  // Fechar popup ao pressionar a tecla "Esc"
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closePopup();
      }
    }

    // Adiciona o event listener ao montar o componente
    document.addEventListener("keydown", handleKeyDown);

    // Remove o event listener ao desmontar o componente
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="header">
      <Luz className="luz" />
      <nav className="nav">
        <h1 className="title">JL</h1>
        <a href="#" className="subtitle" onClick={downloadCV}>
          Download CV
        </a>
        <img
          onClick={openPopup}
          src="/icon-menu/icon-menu.png"
          alt="menu hamburger"
        />
        <div
          className={`overlay ${isPopupActive ? "active" : ""}`}
          onClick={closePopup}
        ></div>
        <div id="popup" className={`popup ${isPopupActive ? "active" : ""}`}>
          <button className="overlay__menu_btn" onClick={closePopup}>
            x
          </button>
          <ul className="nav__menu">
            <li className="nav__menu__item">
              <Link
                className="nav__menu__item__link second-font"
                href="/"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav__menu__item">
              <Link
                className="nav__menu__item__link second-font"
                href="/sobre"
                onClick={handleLinkClick}
              >
                Sobre Mim
              </Link>
            </li>
            <li className="nav__menu__item">
              <Link
                className="nav__menu__item__link second-font"
                href="/#projetos"
                onClick={handleLinkClick}
              >
                Projetos
              </Link>
            </li>
            <li className="nav__menu__item">
              <Link
                className="nav__menu__item__link second-font"
                href="#contato"
                onClick={handleLinkClick}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
