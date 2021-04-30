import React from 'react';
import RoboDetaille from './RobotDetail';
const RobotModal = ({ robot }) => {
    return (
        <div className="modal top fade" id={"exampleModal" + robot.id} aria-labelledby="exampleModalLabel" aria-hidden="true" data-mdb-backdrop="true" data-mdb-keyboard="true">
            <div className="modal-dialog  col-3">
                <div className="modal-content">
                    <RoboDetaille robot={robot} />
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                            Fermer
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RobotModal