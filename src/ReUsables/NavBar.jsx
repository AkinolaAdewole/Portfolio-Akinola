import React,{useRef} from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = ({scrollToSection}) => {
 
  return (
    <div className='bg'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand logomargin text-white" to="/">AKINOLA</Link>

        <button
          className="navbar-toggler text-white navButton"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>

        <div className="container navpadding">
          <div className="collapse navbar-collapse navpadding" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to='#' onClick={() => scrollToSection('aboutme')}>
                  About me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="#" onClick={() => scrollToSection('works')}>Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="#" onClick={() => scrollToSection('contact')}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='container' style={{ paddingTop: "50px" }}>
        <h5 className='text-white'>Akinola Adewole</h5>
        <p className='text-white'>
          Hi, I am a fullstack web developer Crafting digital experiences through elegant code and
          innovative design to bring ideas to life on the web
        </p>
      </div>
    </div>
  );
};

export default NavBar;
