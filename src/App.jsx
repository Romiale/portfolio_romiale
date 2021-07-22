import React from 'react'
import Navbar from '../src/components/Navbar';
import HomeSection from '../src/components/HomeSection';
import AboutSection from '../src/components/AboutSection'
import Services from '../src/components/Services';
import Realisations from '../src/components/Realisations';
import Competences from '../src/components/Competences';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import { HashRouter } from 'react-router-dom';

function App() {
    return (
        <div>
            <HashRouter>
                <Navbar />
                <HomeSection />
                <AboutSection />
                <Services />
                <Realisations />
                <Competences />
                <Contact />
                <Footer />
            </HashRouter>
        </div>
    )
}

export default App
