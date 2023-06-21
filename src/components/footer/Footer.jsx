import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Trung</h1>
            
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/trung-tran-08742b259/" className="footer__social-link" target={"_blank"}>
                    <i class="bx bxl-linkedin-square"></i>
                </a>
                
                <a href="https://github.com/chungasda" className="footer__social-link" target={"_blank"}>
                    <i class="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; CTDev</span>
        </div>
    </footer>
  )
}

export default Footer