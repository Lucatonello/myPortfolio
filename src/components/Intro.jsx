import styles from '../styles/Intro.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 

const Intro = () => {
  return (
    <section className={styles.intro}>
    <h1 className={styles.name}>Hi, I'm Luca</h1>
    <p className={styles.title}>Full-stack Developer</p>
    <p className={styles.tagline}>Building clean, functional, and user-focused web applications.</p>
    <div className={styles.socialLinks}>
      <a 
        href="https://www.linkedin.com/in/luca-tonello-b70377285/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.icon}
      >
        <FaLinkedin />
      </a>
      <a 
        href="https://github.com/Lucatonello" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.icon}
      >
        <FaGithub />
      </a>
    </div>
  </section>
  );
};

export default Intro;
