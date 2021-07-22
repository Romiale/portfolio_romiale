import React from 'react'
import '../style/competences.scss'
function Competences() {
    return (
        <section className="competences" id="competences">
            <div className="competences_comment">
                <h2>Mes compétences</h2>
                <hr />
                <span>Bésoin d'un dévéloppeur qualifié et familier aux nouvelles téchnologies ?,</span> <br />
                <p> Mon esprit créatif doublé de mes
                connaissances techniques me
                permettent d'etre Extrêmement
                motivé et développer constamment
                mes compétences qui me donnent
                d'être efficace en équipe ou seul face
aux problèmes à résoudre.</p>
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
