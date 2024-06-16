import React from "react";

const Exo = ({ exo }) => {
    return (
        <div className="Exo">
            <div className="exo-band"></div>
            <div className="exo-content">
                <p>{exo.name}</p>
                <p>{exo.duration}</p>
            </div>
        </div>        
    );
}

export default Exo;
