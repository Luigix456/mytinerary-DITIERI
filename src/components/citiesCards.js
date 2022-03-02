import React from "react";
function Card(props) {
    return(
        <div>
            {/* {datos.map(ciudades=> */}
            <div className="card">
            <div className="card-header">
              <img src={process.env.PUBLIC_URL + `/assets/${props.image}`} alt="rover" />
            </div>
            <div className="card-body">
              <span className="tag tag-teal">{props.continent}</span>
              <h4>
              {props.name}
              </h4>
              <p>
              {props.description}
              </p>
            </div>
            <div className="cont-det"><a className="details">Details</a></div>
          </div>
        </div>
        )
}
export default Card