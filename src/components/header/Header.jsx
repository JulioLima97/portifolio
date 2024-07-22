"use client";
import { useState } from "react";
import Link from "next/link";
import "../../blocks/header.css";

export default function Header() {
  const [isPopupActive, setIsPopupActive] = useState(false);

  function openPopup() {
    setIsPopupActive(true);
  }

  function closePopup() {
    setIsPopupActive(false);
  }

  return (
    <header className="header">
      <nav className="nav">
        <h1 className="title">JL</h1>
        <Link href="/home" className="subtitle">Download CV</Link>
        <img onClick={openPopup} src="/icon-menu/icon-menu.png" alt="menu hamburger" />
        <div className={`overlay ${isPopupActive ? "active" : ""}`} onClick={closePopup}></div>
        <div id="popup" className={`popup ${isPopupActive ? "active" : ""}`}>
          <button className="overlay__menu_btn" onClick={closePopup}>x</button>
          <ul className="nav__menu">
            <li className="nav__menu__item">
              <Link className="nav__menu__item__link second-font" href="/">
                Home
              </Link>
            </li>
            <li className="nav__menu__item">
              <Link className="nav__menu__item__link second-font" href="/sobre">
                Sobre Mim
              </Link>
            </li>
            <li className="nav__menu__item">
              <Link className="nav__menu__item__link second-font" href="/projetos">
                Projetos
              </Link>
            </li>
            <li className="nav__menu__item">
              <Link className="nav__menu__item__link second-font" href="#contato">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
