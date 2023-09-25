import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './footer.css';

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-text">
                    Aksel Katralen, 
                    <br/>
                    Trondheim/Hamar
                </div>
                <div className="footer-icons">
                    <a href="mailto:akselnk@stud.ntnu.no" title="E-post" target="_blank" rel="noopener noreferrer">
                        <EmailIcon sx={{ color: 'white', fontSize: "4rem"  }} />
                    </a>
                    <a href="https://github.com/akskat" title="Github" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon sx={{ color: 'white', fontSize: "4rem"  }} />
                    </a>
                    <a href="https://www.linkedin.com/in/aksel-katralen-aaa149217/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ color: 'white', fontSize: "4rem"  }} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
