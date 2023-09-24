// src/pages/Contact/Contact.js
import React from "react";
import './contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Kontaktinformasjon</h1>
            <p>Navn: [Ditt Navn]</p>
            <p>E-post: <a href="mailto:eksempel@eksempel.com">eksempel@eksempel.com</a></p>
            <p>Telefon: [Ditt Telefonnummer]</p>
            <p>LinkedIn: <a href="[LinkedIn URL]" target="_blank" rel="noopener noreferrer">LinkedIn Profil</a></p>
            <p>Github: <a href="[Github URL]" target="_blank" rel="noopener noreferrer">Github Profil</a></p>
        </div>
    );
}

export default Contact;
