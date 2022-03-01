import React from "react";
import datos from './datos.js'
function Card({city}) {
    return(
        <div>
            {/* {datos.map(ciudades=> */}
            <div className="card">
            <div className="card-header">
              <img src={process.env.PUBLIC_URL + `/assets/${city.image}`} alt="rover" />
            </div>
            <div className="card-body">
              <span className="tag tag-teal">{city.continent}</span>
              <h4>
              {city.name}
              </h4>
              <p>
              {city.description}
              </p>
            </div>
          </div>
        </div>
        )
}
export default Card