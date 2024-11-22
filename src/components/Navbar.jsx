import styles from '../styles/Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Luca Tonello</div>
            <ul className={styles.navLinks}>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
    </nav>
    )
}

export default Navbar;