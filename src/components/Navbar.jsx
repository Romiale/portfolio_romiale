import React from 'react'
import '../style/navbar.scss'
import logo from '../images/logo.svg'
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light w-100">
            <div className="container-fluid">
                <button
                    className="ml-4 navbar-toggler m-2"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    menu
                        </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="image_logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className="group_items">
                        <li><Link to="#home">Acceuil</Link></li>
                        <li><Link to="#apropos">À propos</Link></li>
                        <li><Link to="#réalisations">Réalisations</Link></li>
                        <li><Link to="#competences">Compétences</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
