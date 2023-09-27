import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/AK_logo.svg";
import hamburgerIcon from "../images/Hamburger_icon_white.svg";
import closeIcon from "../images/Close_icon_white.svg";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
    setClickCount(0);
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar-menu")) {
        setClickCount((count) => count + 1);
        if (clickCount >= 1 && menuOpen) {
          setMenuOpen(false);
          setClickCount(0);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [clickCount, menuOpen, setMenuOpen]);

  return (
    <nav>
      <div className="navbar-left">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            width={90}
            className="navbar-logo"
            onClick={() => setMenuOpen(false)}
          />
        </Link>
      </div>
      
      <div className={`navbar-menu${menuOpen ? " open" : ""}`}>
        <Link to="/about" onClick={toggleMenu}>
          {t('navbar.about')}
        </Link>
        <Link to="/projects" onClick={toggleMenu}>
          {t('navbar.projects')}
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          {t('navbar.contact')}
        </Link>
      </div>
      <div className="navbar-right">
        <img
          src={menuOpen ? closeIcon : hamburgerIcon}
          alt={menuOpen ? "Close" : "Menu"}
          width={50}
          className="navbar-icon"
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
}

export default Navbar;
