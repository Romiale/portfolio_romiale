import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/facebook.svg'
import email from '../images/gmail.svg'
import linkedin from '../images/linkedin.svg'
import '../style/footer.scss';


function Footer() {
    return (
        <footer>
            <div className="footer_group_info">
                <div className="footer_information">
                    <img src={logo} alt="logo portfolio romiale" />
                    <p className="title"> Bésoin de plus d'informations ?</p>
                    <p>Rétrouvez-moi sur les réseaux sociaux, je répond plus rapidement aux messages et mails. à bientot !</p>
                    <div className="reseaux">
                        <img src={facebook} alt="facebook" />
                        <img src={email} alt="email" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                </div>
                <div>
                    <address>
                        <p>N° 116 Avenue Kapanga</p>
                        <p>Commune de Kinshasa - Kinshasa</p>
                        <p>République Démocratique du Congo</p>
                        <a href="mailto:romialengoy5@gmail.com">romialengoy5@gmail.com</a> <br />
                        <a href="tel:+243822332932">+243822332932</a>
                    </address>
                </div>
            </div>
            <p>&#169;  Copyright  2020 Tous droits réservés</p>
        </footer>
    )
}

export default Footer
