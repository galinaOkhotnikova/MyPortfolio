import React from 'react';

import './Footer.scss';

const Footer = () => {
    return (
    <div className="footer">
        <div className="footer__links">
            <a href="https://github.com/galinaOkhotnikova">
                <img src="/images/github.svg" alt="github"/>
            </a>

            <a href="https://t.me/Galya19O6">
                <img src="/images/telegram.svg" alt="telegram"/>
            </a>
        </div>
        <p className="footer__copyright">
            © 2023 galinaOkhotnikova
        </p>
    </div>      
)}

export default Footer;