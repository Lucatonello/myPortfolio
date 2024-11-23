import styles from '../styles/About.module.css'
import myPicture from '../assets/proffesional_picture.JFIF'
import { FaArrowDown } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

function AboutSection () {
    const { ref: aboutRef, inView: aboutInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
  
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
              About Me
            </h2>
            <p className={`${styles.description} ${aboutInView ? styles.fadeInDescription : ''}`}>
              I'm Luca, a passionate full-stack developer with a focus on building clean, 
              functional, and user-friendly web applications. With a strong background 
              in both front-end and back-end technologies, I aim to create seamless 
              experiences that solve real-world problems.
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