  import React from "react";
  import { Link } from "react-router-dom";
  import logo from "../images/AK_logo.svg";
  import hamburgerIcon from "../images/Hamburger_icon.svg";
  import closeIcon from "../images/Close_icon.svg";
  import { useState, useEffect, useRef, useCallback } from "react";

  function Navbar() {
    const [menuOpen, setMenuOpen] = useState(true);
    const menuRef = useRef(null);

    const toggleMenu = useCallback(() => {
      setMenuOpen(!menuOpen);
    }, [menuOpen]);

    const handleOutsideClick = useCallback(
      (event) => {
        if (
          menuOpen &&
          menuRef.current &&
          !menuRef.current.contains(event.target)
        ) {
          setMenuOpen(false);
        }
      },
      [menuOpen]
    );

    useEffect(() => {
      const hamburgerIcon = document.querySelector(".navbar-icon");
      const closeButton = document.querySelector(".navbar-close");
      const menuItems = document.querySelectorAll(".navbar-menu a");

      hamburgerIcon.addEventListener("click", toggleMenu);
      closeButton.addEventListener("click", toggleMenu);
      menuItems.forEach((item) => {
        item.addEventListener("click", toggleMenu);
      });

      document.addEventListener("click", handleOutsideClick);

      return () => {
        hamburgerIcon.removeEventListener("click", toggleMenu);
        closeButton.removeEventListener("click", toggleMenu);
        menuItems.forEach((item) => {
          item.removeEventListener("click", toggleMenu);
        });

        document.removeEventListener("click", handleOutsideClick);
      };
    }, [handleOutsideClick, toggleMenu]);


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
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    );
  }


  export default Navbar;
