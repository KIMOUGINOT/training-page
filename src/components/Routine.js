import React from "react";
import Exo from './Exo'; 
import { removeFromLocalStorage, saveToLocalStorage, loadFromLocalStorage } from '../localStorage';

const Routine = ({ title, data, handleRemove }) => {
    return (
        <div className="routine">
            <div className="routine-header">
                <h3 className="routine-title">{title}</h3>
                <div className="routine-buttons">
                    <button className="button">
                        <img src={process.env.PUBLIC_URL + '/icons/editer.png'} alt="Editer icon" className="icon"/>
                    </button>
                    <button className="button">
                        <img 
                        src={process.env.PUBLIC_URL + '/icons/supprimer.png'} 
                        alt="Eraser icon" 
                        className="icon"
                        onClick={() => handleRemove(title)}
                        />
                    </button>
                    {/* <button className="button">
                        <img src={process.env.PUBLIC_URL + '/icons/bouton-de-lecture.png'} alt="Read icon" className="icon"/>
                    </button> */}
                </div>
            </div>
            {data.map((exo, index) => (
                    <Exo exo={exo} />
            ))}
        </div>
    );
}
export default Routine ;