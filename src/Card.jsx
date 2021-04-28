import React from 'react';
import RoboModal from './RobotModal';
const Card = ({ user }) => {

    return (
        <div className="card m-1 bg-secondary">
            <div data-mdb-toggle="modal" data-mdb-target={"#exampleModal" + user.id}>
                <img className="ImageDeprofile col-11 " src={user.src} alt="user.alt" />
                <p className="text-center">{user.name}</p>
                <p className="text-center">{user.email}</p>
            </div>
            <RoboModal user={user} />
        </div>

    )
}
export default Card