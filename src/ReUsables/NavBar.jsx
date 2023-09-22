import React,{useRef} from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineMail}  from 'react-icons/ai'
import {BiSolidToTop} from 'react-icons/bi'

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

          <div className='intro container'>
            <h5 className='text-white'>Akinola Adewole</h5>
              <div>
                    <p className='text-white'>
                    Hi, I am a full stack web developer crafting digital experiences through elegant code <br /> 
                    and innovative design to bring ideas to life on the web
                  </p>
                  <p className='text-white'>
                  With a solid foundation in various programming languages and frameworks, I relish the 
                   <br /> challenge of transforming complex concepts into user-friendly web applications.
                  </p>
              </div>

                <div className='d-flex'>
                    <div className='btn'>
                        <Link to='https://wa.me/+2348144744865' target='_blank' className='text-white h5'> 
                            <BsWhatsapp /> 
                        </Link>
                    </div>

                    <div className='btn'>
                        <Link to='https://github.com/AkinolaAdewole?tab=repositories' target='_blank' className='text-white h5'>
                              <AiOutlineGithub /> 
                        </Link>
                    </div>

                    <div className='btn'>
                        <Link to='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank' className='text-white h5'> 
                              <AiOutlineMail />
                        </Link>
                    </div>
                </div>

                <div className='shadow-lg'>
                    <div className='btn btn-success rounded-0 text-white' to="#" onClick={() => scrollToSection('works')}>Check my works</div>
                </div>
                
          </div>
    </div>
  );
};

export default NavBar;
