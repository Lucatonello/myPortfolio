import styles from '../styles/Contact.module.css'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.contactContent}>
                <h2 className={styles.sectionTitle}>Contact Me</h2>
                <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                    <FaPhoneAlt className={styles.icon} />
                    <p className={styles.contactText}>+54 911 67630302</p>
                </div>
                <div className={styles.contactItem}>
                    <FaEnvelope className={styles.icon} />
                    <p className={styles.contactText}>lucatonello097@gmail.com</p>
                </div>
                <div className={styles.contactItem}>
                    <FaMapMarkerAlt className={styles.icon} />
                    <p className={styles.contactText}>Buenos Aires, Argentina</p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;