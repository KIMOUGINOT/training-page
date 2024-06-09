import React from "react";

const Exo = ({ exo }) => {
    return (
        <div className="Exo">
            <h3>{exo.name}</h3>
            <h3>{exo.duration}</h3>
        </div>        
    );
}

export default Exo;
