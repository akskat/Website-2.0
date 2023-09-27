import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Kontaktinformasjon</h1>
            <h2>Aksel Katralen</h2>
            <div className="icon-links">
                <div className="icon-container">
                    <div className="icon-title">E-post</div>
                    <a href="mailto:akselnk@stud.ntnu.no" title="E-post" target="_blank" rel="noopener noreferrer">
                        <EmailIcon sx={{ color: 'white', fontSize: "10rem", "&:hover": { color: "rgb(210, 210, 210)" } }} />
                    </a>
                </div>
                <div className="icon-container">
                    <div className="icon-title">LinkedIn</div>
                    <a href="https://www.linkedin.com/in/aksel-katralen-aaa149217/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ color: 'white', fontSize: "10rem", "&:hover": { color: "rgb(210, 210, 210)" }  }} />
                    </a>
                </div>
                <div className="icon-container">
                    <div className="icon-title">Github</div>
                    <a href="https://github.com/akskat" title="Github" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon sx={{ color: 'white', fontSize: "10rem", "&:hover": { color: "rgb(210, 210, 210)" }  }} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
