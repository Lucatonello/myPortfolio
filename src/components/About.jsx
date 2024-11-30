import styles from '../styles/About.module.css'
import myPicture from '../assets/proffesional_picture.jfif'
import { FaArrowDown } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from "../translations/LanguageContext";
import { translations } from "../translations/translations";

function AboutSection () {
    const { ref: aboutRef, inView: aboutInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { language } = useLanguage();
    const heading = translations[language].about.heading;
    const content = translations[language].about.content;
  
    return (
        <section ref={aboutRef} className={styles.aboutSection} id="about">
        <div className={`${styles.aboutContent} ${aboutInView ? styles.fadeInContent : ''}`}>
          <div className={`${styles.imageContainer} ${aboutInView ? styles.slideUpImage : ''}`}>
            <img 
              src={myPicture} 
              alt="Luca Tonello" 
              className={styles.profileImage} 
            />
          </div>
          <div className={styles.textContainer}>
            <h2 className={`${styles.sectionTitle} ${aboutInView ? styles.fadeInTitle : ''}`}>
              {heading}
            </h2>
            <p className={`${styles.description} ${aboutInView ? styles.fadeInDescription : ''}`}>
              {content}
            </p>
          </div>
        </div>
        <a href="#contact" className={`${styles.arrow} ${aboutInView ? styles.fadeInArrow : ''}`}>
          <FaArrowDown />
        </a>
      </section>
    );
  };
  
  export default AboutSection;