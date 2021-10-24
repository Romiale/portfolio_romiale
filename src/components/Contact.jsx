import React from 'react'
import '../style/contact.scss';

function Contact() {
    return (
        <section className="contact">
            <h2>CONTACTEZ-MOI</h2>
            <hr />
            <div className="form">
                <div>
                    <h3>Informations</h3>
                    <p>Je vous prie de fournir des informations de la manière la plus précise et consise pour une meilleure collaboration SVP.</p>
                </div>
                <form>
                    <input type="email" placeholder="E-mail" required />
                    <textarea name="message" id="message" placeholder="Message" required>
                    </textarea>
                    <button className="btn btn-primary">Envoyer</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
