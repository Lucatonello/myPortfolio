import styles from '../styles/Intro.module.css';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub, FaArrowDown } from 'react-icons/fa'; 
import { useLanguage } from "../translations/LanguageContext";
import { translations } from "../translations/translations";

const Intro = () => {
  const { language } = useLanguage();
  const heading = translations[language].intro.heading;
  const subtitle = translations[language].intro.subtitle;
  const slogan = translations[language].intro.slogan;
  
  const { ref: nameRef, inView: nameInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const { ref: taglineRef, inView: taglineInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const { ref: arrowRef, inView: arrowInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return (
    <section className={styles.intro}>
      <h1
        ref={nameRef}
        className={`${styles.name} ${nameInView ? styles.fadeIn : ''}`}
      >
        {heading}
      </h1>
      <p className={styles.title}>{subtitle}</p>

      <p
        ref={taglineRef}
        className={`${styles.tagline} ${taglineInView ? styles.fadeIn : ''}`}
      >
        {slogan}
      </p>
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
      <a
        ref={arrowRef}
        href="#projects"
        className={`${styles.arrow} ${arrowInView ? styles.fadeIn : ''}`}
      >
        <FaArrowDown />
      </a>
    </section>
  );
};

export default Intro;
