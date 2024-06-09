import React from "react";
import Exo from './Exo'; // Component to create

const Routine = ({ name, data }) => {
    return (
        <div className="Routine">
            <div className="title-container">
                <h2 className="routine-title">{name}</h2>
                <button className="edit-button">
                    <img src={process.env.PUBLIC_URL + '/editer.png'} alt="Editer icon" className="icon"/>
                </button>
                <button className="button">
                    <img src={process.env.PUBLIC_URL + '/supprimer.png'} alt="Eraser icon" className="icon"/>
                </button>
                <button className="button">
                    <img src={process.env.PUBLIC_URL + '/bouton-de-lecture.png'} alt="Read icon" className="icon"/>
                </button>
            </div>
            {data.map((exo, index) => (
                    <Exo exo={exo} />
            ))}
        </div>
    );
}
export default Routine ;