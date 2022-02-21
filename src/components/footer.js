import React from "react";
import {Link as LinkRouter} from "react-router-dom"


function footer() {
    return(
        
        <div className="bg-light">
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-2">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <LinkRouter to="/" className='link'>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                </LinkRouter>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About Us</a></li>
                                <LinkRouter to="cities" className='link'>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Cities</a></li>
                                </LinkRouter>
                            </ul>
                        </div>

                        <div className="col-4 offset-1">
                            <form>
                                <h5>Subscribe to receive news about future plans</h5>
                                <div className="d-flex w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address"></input>
                                    <button className="btn btn-danger" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between py-4 my-4 border-top">
                        <p>&copy; 2022 Luis Ditieri, MINDHUB. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
        
    )
}
export default footer