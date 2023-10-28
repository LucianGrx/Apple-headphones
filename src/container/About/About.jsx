
import './About.scss';
import { RiInformationFill } from "react-icons/ri";



const About = () => {


  return (
    <section className="about section" id="about">
        <div className="about__container container grid">
            <div className="about__data">
                <h2 className="section__title">
                    MORE ABOUT ME
                </h2>

                <p className="about__description">
                I`m Lucian Biolan, a web developer. I`ve created this online store to showcase my web development expertise. With a strong passion for creating engaging web experiences, I`ve dedicated my skills to design and build this e-commerce platform.
                This website reflects my proficiency in front-end and back-end development, highlighting responsive design, user-friendly interactions, and a well-organized product catalog. It also demonstrates my focus on performance, security, and scalability.
                </p>

                <a href="#" className="button">
                    Know More <RiInformationFill />
                </a>
            </div>

            <img src="./src/assets/images/about-img.png" alt="image" className="about__img" />
        </div>
    </section>
  )
}

export default About