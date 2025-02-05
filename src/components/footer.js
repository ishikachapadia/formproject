"use client";

import "../styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
        <div className="footer-contentLeft">
            <div className="footerContactUs"></div>
            <div className="footerContactUsInfo"></div>
        </div>
        <div className="footer-contentRight">
        <div className="footerSocialMedia">
            <div className="social"></div>
            <div className="social"></div>
            <div className="social"></div>
        </div>
        <div className="footerLinks">

        <nav className="footer-nav1">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact Us</a>
            <a href="/contact">Contact Us</a>
        </nav>
        <nav className="footer-nav2">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact Us</a>
            <a href="/contact">Contact Us</a>
        </nav>
        </div>
        </div>
        </footer>
    );
    }
