import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/ak-studio.svg";
import hamburgerIcon from "../images/Hamburger_icon.svg";
import closeIcon from "../images/Close_icon.svg";
import { useState, useEffect, useRef, useCallback } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleOutsideClick = useCallback(
    (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        toggleMenu();
      }
    },
    [toggleMenu]
  );

  useEffect(() => {
    const hamburgerIcon = document.querySelector(".navbar-icon");
    const closeButton = document.querySelector(".navbar-close");
    const menuItems = document.querySelectorAll(".navbar-menu a");

    // Add event listeners to toggle the menu when the hamburger icon, close button, or menu items are clicked
    hamburgerIcon.addEventListener("click", toggleMenu);
    closeButton.addEventListener("click", toggleMenu);
    menuItems.forEach((item) => {
      item.addEventListener("click", toggleMenu);
    });

    // Add event listener to close the menu when the user clicks anywhere outside of the menu
    document.addEventListener("click", handleOutsideClick);

    // Remove event listeners when the component unmounts to avoid memory leaks
    return () => {
      hamburgerIcon.removeEventListener("click", toggleMenu);
      closeButton.removeEventListener("click", toggleMenu);
      menuItems.forEach((item) => {
        item.removeEventListener("click", toggleMenu);
      });

      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick, menuRef, toggleMenu]);

  return (
    <nav>
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" width={150} className="navbar-logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <img
          src={menuOpen ? closeIcon : hamburgerIcon}
          alt={menuOpen ? "Close" : "Menu"}
          width={50}
          className="navbar-icon navbar-close"
          onClick={toggleMenu}
        />
      </div>
      <div className={`navbar-menu${menuOpen ? " open" : ""}`} ref={menuRef}>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/projects" onClick={closeMenu}>
          Projects
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
}




export default Navbar;
