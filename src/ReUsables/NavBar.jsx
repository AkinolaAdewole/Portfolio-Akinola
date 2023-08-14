import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav1 ">
        <a className="navbar-brand  logomargin" href="#" >Akinola Adewole</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navmargin" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home </a>
                </li>
                <li class="nav-item">
                    <h3>About</h3>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar