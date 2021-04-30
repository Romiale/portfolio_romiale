import React from 'react';
import RoboModal from './RobotModal';
const Card = ({ robot }) => {

    return (
        <div className="card m-1 bg-secondary">
            <div data-mdb-toggle="modal" data-mdb-target={"#exampleModal" + robot.id}>
                <img className="ImageDeprofile col-11 " src={robot.src} alt="robot.alt" />
                <p className="text-center">{robot.name}</p>
                <p className="text-center">{robot.email}</p>
            </div>
            <RoboModal robot={robot} />
        </div>

    )
}
export default Card