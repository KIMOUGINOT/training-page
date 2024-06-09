import React from "react";
import Exo from './Exo'; // Component to create

const Routine = ({ name, data }) => {
    return (
        <div className="Routine">
            <div className="routine-title">
                <h2>{name}</h2>
            </div>
            <button className="edit-button">
                <img src="../public/editer.png" alt="Editer icon" className="edit-icon"/>
            </button>
            {data.map((exo, index) => (
                    <Exo exo={exo} />
            ))}
        </div>
    );
}
export default Routine ;