import styles from '../styles/About.module.css'
import myPicture from '../assets/proffesional_picture.JFIF'
import { FaArrowDown } from 'react-icons/fa';

function About() {
    return (
        <section className={styles.aboutSection} id="about">
        <div className={styles.aboutContent}>
            <div className={styles.imageContainer}>
            <img 
                src={myPicture} 
                alt="Luca Tonello" 
                className={styles.profileImage} 
            />
            </div>
            <div className={styles.textContainer}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.description}>
                I'm Luca, a passionate full-stack developer with a focus on building clean, 
                functional, and user-friendly web applications. With a strong background 
                in both front-end and back-end technologies, I aim to create seamless 
                experiences that solve real-world problems.
            </p>
            </div>
        </div>
        <a href="#contact" className={styles.arrow}>
            <FaArrowDown />
        </a>

        </section>
    )
}

export default About;