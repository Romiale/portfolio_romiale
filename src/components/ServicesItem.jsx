import React from 'react'

function ServicesItem({ icone, service }) {

    const { title, description } = service
    return (
        <div>
            <img src={icone} alt="icone" />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default ServicesItem
