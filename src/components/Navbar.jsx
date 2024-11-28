import { useState } from "react";
import styles from '../styles/Navbar.module.css';
import { useLanguage } from "../translations/LanguageContext";
import { translations } from "../translations/translations";

function Navbar() {
    const { toggleLanguage, language } = useLanguage();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

    const about = translations[language].nav.about;
    const projects = translations[language].nav.projects;
    const contact = translations[language].nav.contact;

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false); // Close the sidebar when an item is clicked
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Luca Tonello</div>
            <ul className={styles.navLinks}>
                <li>
                    <button onClick={toggleLanguage} className={`${styles.languageButton} ${language === "en" ? styles.en : styles.es}`}>
                        {language === "en" ? "Español" : "English"}
                    </button>
                </li>
                <li><a href="#about" onClick={closeSidebar}>{about}</a></li>
                <li><a href="#projects" onClick={closeSidebar}>{projects}</a></li>
                <li><a href="#contact" onClick={closeSidebar}>{contact}</a></li>
            </ul>

            {/* Hamburger Button */}
            <button className={styles.hamburger} onClick={toggleSidebar}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>

            {/* Sidebar */}
            <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
                <button className={styles.closeBtn} onClick={toggleSidebar}>×</button>
                <ul>
                    <li><a href="#about" onClick={closeSidebar}>{about}</a></li>
                    <li><a href="#projects" onClick={closeSidebar}>{projects}</a></li>
                    <li><a href="#contact" onClick={closeSidebar}>{contact}</a></li>
                    <li>
                        <button onClick={toggleLanguage} className={`${styles.languageButton} ${language === "en" ? styles.en : styles.es}`}>
                            {language === "en" ? "Español" : "English"}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
