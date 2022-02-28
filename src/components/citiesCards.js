import React from "react";
import ciudades from './datos.js'
function Card() {
    return(
        <div>
            {ciudades.map(ciudades=>
            <div className="card" style={{width: 25 + 'rem'}}>
                <img src={process.env.PUBLIC_URL + `/assets/${ciudades.image}`} className="card-img-top" alt="barcelona"></img>
                <div className="card-body">
                    <h3>{ciudades.name}</h3>
                    <p className="card-text">{ciudades.description}</p>
                </div>
            </div>
        )
        }
        </div>
    )
}
export default Card