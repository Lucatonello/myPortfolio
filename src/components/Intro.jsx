import styles from '../styles/Intro.module.css';

const Intro = () => {
  return (
    <section className={styles.intro}>
      <h1 className={styles.name}>Hi, I'm Luca</h1>
      <p className={styles.title}>Full-stack Developer</p>
      <p className={styles.tagline}>Building clean, functional, and user-focused web applications.</p>
    </section>
  );
};

export default Intro;
