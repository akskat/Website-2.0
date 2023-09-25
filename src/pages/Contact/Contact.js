import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Kontaktinformasjon</h1>
            <p>Navn: [Ditt Navn]</p>
            <p>Telefon: [Ditt Telefonnummer]</p>
            <div className="icon-links">
                <a href="mailto:akselnk@stud.ntnu.no" title="E-post" target="_blank" rel="noopener noreferrer">
                    <EmailIcon sx={{ color: 'white', fontSize: "8rem" }} />
                </a>
                <a href="https://www.linkedin.com/in/aksel-katralen-aaa149217/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ color: 'white', fontSize: "8rem" }} />
                </a>
                <a href="https://github.com/akskat" title="Github" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ color: 'white', fontSize: "8rem" }} />
                </a>
            </div>
        </div>
    );
}

export default Contact;
