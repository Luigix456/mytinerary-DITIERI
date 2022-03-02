import React from "react";
import {Link as LinkRouter} from "react-router-dom"
const Details = ()=>{
    return(
        <>
        <img className="advice" src={process.env.PUBLIC_URL + `/assets/construction.jpg`}></img>
        <LinkRouter to="/cities" className='link'>
            <button type="button" className="btn btn-outline-danger btn-lg px-4 button-details" style={{fontWeight: 'bolder'}} >¡Return to Cities!</button>
        </LinkRouter>
        </>
    )
}
export default Details;