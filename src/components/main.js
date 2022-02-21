import { borderRadius } from '@mui/system'
import React from 'react'
import {Link as LinkRouter} from "react-router-dom"

function Main() {
    return (
        <div className="titleDescription">
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={process.env.PUBLIC_URL + `/assets/group-of-people-traveling-concept-PBNCKWD.jpg`} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" style={{borderRadius: 4 + "rem"}}></img>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">My<span style={{color:"red"}}>Tinerary</span></h1>
                    <p className="lead" style={{fontWeight: 'bolder'}}>Find your perfect trip, designed by insiders who know and love their cities!</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <LinkRouter to="cities" className='link'>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Click to view Cities</button>
                        </LinkRouter>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main