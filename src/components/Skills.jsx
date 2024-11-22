import styles from '../styles/Skills.module.css';

const skills = [
    'Python', 'JavaScript', 'C', 'HTML', 'CSS', 'React', 'Node.js', 'PostgreSQL', 'Git/GitHub', 'Flask', 'Bootstrap'
  ];
  
  const Skills = () => {
    return (
      <section className={styles.skills}>
        <h2 className={styles.sectionTitle}>My Skills</h2>
        <div className={styles.skillsList}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <p className={styles.skillName}>{skill}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;