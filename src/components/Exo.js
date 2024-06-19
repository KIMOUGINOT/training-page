import React from "react";

const Exo = ({ exo }) => {
    return (
        <div className="Exo">
            <div className="exo-band"></div>
            <div className="exo-content">
                <p className="exo-title">{exo.name}</p>
                <p className="exo-detail">{exo.duration}</p>
            </div>
        </div>        
    );
}

export default Exo;
