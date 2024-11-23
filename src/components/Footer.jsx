import styles from '../styles/Footer.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className={styles.footerSection}>
        <div className={styles.footerContent}>
          <div className={styles.socialLinks}>
            <a href="https://github.com/Lucatonello" target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/in/luca-tonello-b70377285" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
            </a>
          </div>
          <p className={styles.copyText}>
            &copy; {new Date().getFullYear()} Luca Tonello. All rights reserved.
          </p>
        </div>
      </footer>
    )
}

export default Footer;