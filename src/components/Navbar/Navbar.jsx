import { useState } from 'react';
import './Navbar.scss';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import blurHeader from './blurHeader';

const Navbar = () => {

const [navToggle, setNavToggle] = useState(false);
const closeMenu = () => {
    setNavToggle(false);
}

window.addEventListener('scroll', blurHeader);

  return (
    <header className='header' id='header'>
        <nav className="nav container">
            <a href="#" className="nav__logo">Apple</a>

            <div className={`nav__menu ${navToggle ? "show-menu" : ""}`} id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link" onClick={closeMenu}>Home</a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link" onClick={closeMenu}>About</a>
                    </li>

                    <li className="nav__item">
                        <a href="#favorites" className="nav__link" onClick={closeMenu}>Favorites</a>
                    </li>

                    <li className="nav__item">
                        <a href="#models" className="nav__link" onClick={closeMenu}>Models</a>
                    </li>
                </ul>

                {/* Close button */}

                <div className="nav__close" id="nav-close" >
                    <RiCloseLine onClick={() => {
                        setNavToggle(false);
                    }}/>
                </div>
            </div>

             {/* Toggle button */}

             <div className="nav__toggle" id="nav-toggle" >
                    <RiMenuLine onClick={() => {
                        setNavToggle(true)
                    }}/>
                </div>
        </nav>
    </header>
  )
}

export default Navbar