import React from 'react'
import Card from './Card';
function CardList({ robots }) {
    return (
        <div className="col-md-12 d-flex flex-wrap justify-content-center">
            {
                robots.map(robot => {
                    return <Card key={robot.id} robot={robot} />
                })
            }
        </div>
    )
}

export default CardList
