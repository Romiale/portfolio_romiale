import React from 'react';

const RobotDetail = ({ robot }) => {
    return (
        <div>
            <div className="d-flex justify-content-center border-bottom">
                <img className="ImageDeprofile mb-4 col-8 bg-secondary" src={robot.src} alt="robot.alt" />
            </div>
            <div>
                <p className="m-2"><span className="h6"> Name:</span> {robot.name}</p>
                <p className="m-2"><span className="h6">Email:</span> {robot.email}</p>
                <p className="m-2"><span className="h6">Username:</span> {robot.robotname}</p>
                <p className="m-2"><span className="h6">Phone :</span> {robot.phone}</p>
                <p className="m-2"><span className="h6">Adress:</span> {robot.address.street + " " + robot.address.city}</p>
            </div>
        </div>
    )
}
export default RobotDetail