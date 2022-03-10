import React from "react";
import {Link as LinkRouter} from "react-router-dom"


function header() {
    return(
        <div className="bg-danger">
            <header className="p-3 mb-3 border-bottom">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-danger">
                    <div className="container-fluid">
                        <img className="logo" src={process.env.PUBLIC_URL + `pngwing.png`}></img>
                        <a className="navbar-brand" href="#">MyTinerary</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                <LinkRouter to="/" className='link'>
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </LinkRouter>
                                </li>
                                <li class="nav-item">
                                    <LinkRouter to="cities" className='link'>
                                        <a className="nav-link" href="#">Cities</a>
                                    </LinkRouter>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                            <div className="dropdown text-end">
                                <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://w7.pngwing.com/pngs/11/510/png-transparent-computer-icons-colorado-state-university-user-profile-miscellaneous-service-logo.png" alt="mdo" width="50" height="50" className="rounded-circle"></img>
                                </a>
                                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                    <li><a className="dropdown-item" href="#">New trip...</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="#">Sign Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default header