import React from 'react'
import '../style/services.scss';
import ServicesItem from '../components/ServicesItem';
import services from '../dataservices';
import web from '../images/web.svg';
import backend from '../images/backend.svg';
import ui from '../images/ui.svg';


function Services() {

    return (
        <div className="services">
            <div className="services_comment">
                <h3>Mes services</h3>
                <p>Spécialisé dans le domaine du dévelopement web et web mobile allant du front-end jusqu'au back-and, le UI et UX design.</p>
            </div>
            <div className="services_illustration">
                <ServicesItem icone={web} service={services[0]} />
                <ServicesItem icone={backend} service={services[1]} />
                <ServicesItem icone={ui} service={services[2]} />
            </div>
        </div>
    )
}

export default Services
