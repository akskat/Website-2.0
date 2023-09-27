// src/components/Footer.js
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import norway from '../images/norway.svg';  // Importerer norway.svg
import uk from '../images/uk.svg';  // Importerer uk.svg
import { useTranslation } from 'react-i18next';


import './footer.css';

function Footer() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = React.useState(i18n.language);

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
    }

    return (
        <div className="footer-container">
            <div className="footer">
                <div className="footer-text">
                    Aksel Katralen, 
                    <br/>
                    Trondheim/Hamar
                    <br/>
                    © 2023
                </div>
                <div className="footer-icons">
                    <a href="mailto:akselnk@stud.ntnu.no" title="E-post" target="_blank" rel="noopener noreferrer">
                        <EmailIcon sx={{ color: 'white', fontSize: "4rem"  }} />
                    </a>
                    <a href="https://www.linkedin.com/in/aksel-katralen-aaa149217/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ color: 'white', fontSize: "4rem"  }} />
                    </a>
                    <a href="https://github.com/akskat" title="Github" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon sx={{ color: 'white', fontSize: "4rem"  }} />
                    </a>
                </div>
                <div className="footer-languages">
                    <img 
                        src={norway} 
                        alt="Norwegian Flag" 
                        onClick={() => handleLanguageChange('no')}
                        className={selectedLanguage === 'no' ? 'active' : ''}
                    />
                    <img 
                        src={uk} 
                        alt="UK Flag" 
                        onClick={() => handleLanguageChange('en')}
                        className={selectedLanguage === 'en' ? 'active' : ''}
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;

