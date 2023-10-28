import "./Footer.scss";
import { RiSendPlaneFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div>
          <a href="#" className="footer__logo">
            APPLE
          </a>
        </div>

        <div className="footer__data grid">
          <div>
            <h3 className="footer__title">Products</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Headphones
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Earphones
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Earbuds
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Accesories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Support</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Product Help
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Update
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Provides
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__group">
            <form action="" className="footer__form">
              <input
                type="email"
                placeholder="Email"
                className="footer__input"
              />
              <button className="footer__button button">
                Subscribe <RiSendPlaneFill />
              </button>
            </form>

            <div className="footer__social">
              <a href="https://github.com/LucianGrx" target="_blank" rel="noreferrer" className="footer__social-link">
                <RiGithubFill />
              </a>

              <a href="https://www.linkedin.com/in/biolan-lucian/" rel="noreferrer" target="_blank" className="footer__social-link">
                <RiLinkedinFill />
              </a>
            </div>
          </div>
        </div>
      </div>

      <span className="footer__copy">
        All Rights Reserved By Biolan Lucian
      </span>
    </footer>
  );
};

export default Footer;
