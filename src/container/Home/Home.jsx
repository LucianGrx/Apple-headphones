import './Home.scss';
import { RiPlayCircleFill, RiGithubFill, RiLinkedinFill } from 'react-icons/ri';

const Home = () => {


  return (
    <section className='home section' id='home'>
        <div className="home__container container grid">
            <div className='home__content'>
            <img src="./src/assets/images/home-img.png" className='home__img' alt="image" />

            <h1 className="home__title">
                <span>A</span>
                <span>P</span>
                <span>P</span>
                <span>L</span>
                <span>E</span>
            </h1>

            <div className="home__tooltip">
                <img src="src/assets/images/tooltip-right.svg" alt="image" className="home__tooltip-img" />
                <span className="home__tooltip-text">$550</span>
            </div>
        </div>

        <a href="#favorites" className="home__button button">
            Buy Now <RiPlayCircleFill />
        </a>

        <div className="home__social">
            <span className="home__social-text">Follow me</span>
            <div className="home__social-links">
                <a href="https://www.linkedin.com/in/biolan-lucian" target='_blank' rel="noreferrer" className="home__social-link"><RiLinkedinFill /></a>
                <a href="https://github.com/LucianGrx" target='_blank' rel="noreferrer" className="home__social-link"><RiGithubFill /></a>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Home

