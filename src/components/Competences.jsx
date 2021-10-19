import React from 'react'
import '../style/competences.scss'
import html from '../images/technos/html5.svg'
import css3 from '../images/technos/css3.svg'
import javascript from '../images/technos/javascript.svg'
import react from '../images/technos/react.svg'
import php from '../images/technos/php.svg'
import laravel from '../images/technos/laravel.svg'
import node from '../images/technos/node.svg'
import mongodb from '../images/technos/mongodb.svg'
import mysql from '../images/technos/mysqltwo.svg'

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
                    <p>HTML 5</p>
                    <div className="competences_bar">
                        <div> 
                            <img src={html} alt="html"/>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Css 3</p>
                    <div className="competences_bar">
                        <div>
                            <img src={css3} alt="css3"/>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Javascript</p>
                    <div className="competences_bar">
                        <div>
                            <img src={javascript} alt="javascript"/>
                        </div>
                    </div>
                </div>
                <div>
                    <p>React</p>
                    <div className="competences_bar">
                        <div>
                            <img src={react} alt="react"/>
                        </div>
                    </div>
                </div>
                <div>
                    <p>PHP</p>
                    <div className="competences_bar">
                        <div>
                            <img src={php} alt="php"/>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Laravel</p>
                    <div className="competences_bar">
                        <div>
                            <img src={laravel} alt="laravel"/>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Node</p>
                    <div className="competences_bar">
                        <div>
                            <img src={node} alt="node"/>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Mysql</p>
                    <div className="competences_bar">
                        <div>
                            <img src={mysql} alt="node"/>
                        </div>
                    </div>
                </div>
                <div>
                    <p>MongoDB</p>
                    <div className="competences_bar">
                        <div>
                            <img src={mongodb} alt="node"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Competences
