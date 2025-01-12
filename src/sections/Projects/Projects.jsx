
import styles from './ProjectsStyles.module.css';
import shop from '../../assets/ss.png';
import pl from '../../assets/profile.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={shop} 
                link="https://github.com/Subtilizer28/ShopScout" 
                h3="Shop Scout" 
                p="Shopping Assistant" 
            />
             <ProjectCard 
                src={pl} 
                link="https://github.com/Subtilizer28/ShopScout" 
                h3="Portfolio" 
                p="Portfolio Website" 
            />
        </div>
    </section>
  );
}

export default Projects;