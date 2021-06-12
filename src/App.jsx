import React from 'react'
import Navbar from '../src/components/Navbar';
import HomeSection from '../src/components/HomeSection';
import AboutSection from '../src/components/AboutSection'
import Services from '../src/components/Services';
import Realisations from '../src/components/Realisations';
import Competences from '../src/components/Competences';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';


function App() {
    return (
        <div>
            <Navbar />
            <HomeSection />
            <AboutSection />
            <Services />
            <Realisations />
            <Competences />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
