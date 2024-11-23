import styles from '../styles/Navbar.module.css';
import { useLanguage } from "../translations/LanguageContext";

function Navbar() {
    const { toggleLanguage, language } = useLanguage();

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Luca Tonello</div>
            <ul className={styles.navLinks}>
                <li>
                    <button onClick={toggleLanguage} className={`${styles.languageButton} ${language === "en" ? styles.en : styles.es}`}>
                        {language === "en" ? "Español" : "English"}
                    </button>
                </li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
    </nav>
    )
}

export default Navbar;