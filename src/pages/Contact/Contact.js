import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './contact.css';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();

    return (
        <div className="contact-container">
            <h1>{t('contact.title')}</h1>
            <h2>{t('contact.name')}</h2>
            <div className="icon-links">
                <div className="icon-container">
                    <div className="icon-title">{t('contact.email')}</div>
                    <a href="mailto:akselnk@stud.ntnu.no" title={t('contact.email')} target="_blank" rel="noopener noreferrer">
                        <EmailIcon sx={{ color: 'white', fontSize: "10rem", "&:hover": { color: "rgb(210, 210, 210)" } }} />
                    </a>
                </div>
                <div className="icon-container">
                    <div className="icon-title">{t('contact.linkedin')}</div>
                    <a href="https://www.linkedin.com/in/aksel-katralen-aaa149217/" title={t('contact.linkedin')} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ color: 'white', fontSize: "10rem", "&:hover": { color: "rgb(200, 200, 200)" }  }} />
                    </a>
                </div>
                <div className="icon-container">
                    <div className="icon-title">{t('contact.github')}</div>
                    <a href="https://github.com/akskat" title={t('contact.github')} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon sx={{ color: 'white', fontSize: "10rem", "&:hover": { color: "rgb(210, 210, 210)" }  }} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
