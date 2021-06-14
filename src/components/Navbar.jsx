import React from 'react'
import '../style/navbar.scss'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light w-100">
        //     <div className="container-fluid">
        //         <button
        //             className="ml-4 navbar-toggler m-2 btn"
        //             type="button"
        //             data-mdb-toggle="collapse"
        //             data-mdb-target="#navbarNavAltMarkup"
        //             aria-controls="navbarNavAltMarkup"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //         >
        //             menu
        //                 </button>
        //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <div className="image_logo">
        //                 <img src={logo} alt="logo" />
        //             </div>
        //             <ul className="group_items navbar-nav">
        //                 <li className="nav-item active">Acceuil</li>
        //                 <li className="nav-item">Apropos</li>
        //                 <li className="nav-item">Réalisations</li>
        //                 <li className="nav-item">Compétences</li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent w-100">
                    <div class="container-fluid">
                        <div className="d-flex justify-content-betwee(n w-100">
                            <button
                                className="ml-4 navbar-toggler m-2"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i class="fas fa-bars"></i>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <h4 className="text-warning">Home</h4>
                                <Link className="text-white" to="/">Upcoming</Link>
                                <Link className="text-white" to="/">Popular</Link>
                                <h4 className="text-warning">Genres</h4>
                                <Link className="text-white" to="/movies">Movies</Link>
                                <Link className="text-white" to="/series">Series</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Navbar
