import styles from '../styles/Contact.module.css'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

function Contact() {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true, // Animation runs only once when the element is in view
        threshold: 0.2, // Trigger when 20% of the element is visible
      });
    
    return (
        <section
            className={`${styles.contactSection} ${sectionInView ? styles.animateSection : ''}`}
            id="contact"
            ref={sectionRef}
            >
            <div className={styles.contactContent}>
                <h2 className={styles.sectionTitle}>Contact Me</h2>
                <div className={styles.contactInfo}>
                <div className={`${styles.contactItem} ${sectionInView ? styles.animateItem : ''}`}>
                    <FaPhoneAlt className={styles.icon} />
                    <span className={styles.contactText}>+54 911 67630302</span>
                </div>
                <div className={`${styles.contactItem} ${sectionInView ? styles.animateItem : ''}`}>
                    <FaEnvelope className={styles.icon} />
                    <span className={styles.contactText}>lucatonello097@gmail.com</span>
                </div>
                <div className={`${styles.contactItem} ${sectionInView ? styles.animateItem : ''}`}>
                    <FaMapMarkerAlt className={styles.icon} />
                    <span className={styles.contactText}>Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>
            <a href="#" className={styles.arrow}>
                <FaArrowUp />
            </a>
        </section>

    )
}

export default Contact;