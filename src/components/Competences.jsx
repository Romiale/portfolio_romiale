import React from 'react'
import '../style/competences.scss'
function Competences() {
    return (
        <section className="competences">
            <div className="competences_comment">
                <h2>Mes compétences</h2>
                <hr />
                <span>Bésoin d'un dévéloppeur qualifié et familier aux nouvelles téchnologies ?,</span> <br />
                <p> Vous etes au bon endroit ! Avec la maitrise des téchnologies back et front-end, du web design et du SEO je suis prets à intégrer votre et à travailler sur vos projets.</p>
            </div>
            <div className="competences_level">
                <div>
                    <p>HTML</p>
                    <div className="competences_bar">
                        <div></div>
                    </div>
                </div>
                <div>
                    <p>Css, Sass</p>
                    <div className="competences_bar">
                        <div></div>
                    </div>
                </div>
                <div>
                    <p>Javascript, React</p>
                    <div className="competences_bar">
                        <div></div>
                    </div>
                </div>
                <div>
                    <p>PHP, Laravel</p>
                    <div className="competences_bar">
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Competences
