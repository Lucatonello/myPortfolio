import styles from '../styles/Intro.module.css';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub, FaArrowDown } from 'react-icons/fa'; 

const Intro = () => {
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
        Hi, I'm Luca
      </h1>
      <p className={styles.title}>Full-stack Developer</p>

      <p
        ref={taglineRef}
        className={`${styles.tagline} ${taglineInView ? styles.fadeIn : ''}`}
      >
        Building clean, functional, and user-focused web applications.
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
