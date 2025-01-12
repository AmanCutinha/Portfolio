import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkdinLight from '../../assets/linkedin-light.svg';
import linkdinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkdinIcon = theme === 'light' ? linkdinLight : linkdinDark;
  return (
    <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
            className={styles.hero} 
            src={heroImg} 
            alt="profile picture" 
        />
        <img 
            className={styles.colorMode} 
            src={themeIcon} 
            alt="color mode icon" 
            onClick={toggleTheme }
        />
    </div>
    <div className={styles.info}>
        <h1>
            Aman
            <br /> 
            Cutinha
            </h1>
            <h2>
                Frontend Developer
            </h2>
            <span>
                <a href="https://twitter.com/" target='_blank'>
                <img src={twitterIcon} alt="twittwr icon" />
                </a>
                <a href="https://github.com/" target='_blank'>
                <img src={githubIcon} alt="github icon" />
                </a>
                <a href="https://linkdin.com/" target='_blank'>
                <img src={linkdinIcon} alt="linkdin icon" />
                </a>
            </span>
            <p className={styles.description}>
                I am a Front End Developer with a passion for building engaging and user-friendly web applications. My skills include HTML, CSS, and JavaScript, which I use to create seamless and visually appealing interfaces. Additionally, I have a basic understanding of C and C++, which helps broaden my perspective on software development.
                Currently pursuing opportunities to enhance my front-end skills, I am eager to learn and grow in this ever-evolving field. I look forward to connecting with like-minded professionals and contributing to innovative projects!
</p>
    <a href={CV} download>
        <button className="hover">
            Resume
        </button>
    </a>
    </div>
    </section>
  );
}

export default Hero