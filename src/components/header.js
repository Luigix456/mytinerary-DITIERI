import React from "react";
import Button from '@mui/material/Button';
import {Link as LinkRouter} from "react-router-dom"
import { sizeHeight } from "@mui/system";
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';


const header = (props) => {
    function SignOut() {
		props.SignOutUser(props.user.email)
	}
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

                            {/* USUARIO */}

                            <div className="navorder userProfile">
                            <div className='dropdown text-end'>
                            {props.user === null ?
                            <a href='#' className='d-block link-dark text-decoration-none dropdown-toggle' id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src='https://w7.pngwing.com/pngs/11/510/png-transparent-computer-icons-colorado-state-university-user-profile-miscellaneous-service-logo.png' alt="mdo" width="50" height="50" className="rounded-circle"></img>
                            </a> :
                            <a href='#' className='d-block link-dark text-decoration-none dropdown-toggle' id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={props.user.picture} alt="fotoPerfil" width="50" height="50" className="rounded-circle"></img>
                            </a>}
                            <ul className='dropdown-menu text-small dropdownOptions'>
                                {props.user === null ? 
                                <>
                                    <LinkRouter to="/signUp">
                                        <li><a className="dropdown-item" href="#">Sign Up</a></li>
                                    </LinkRouter>
                                    <LinkRouter to="/signIn">
                                        <li><a className="dropdown-item" href="#">Sign in</a></li>
                                    </LinkRouter>
                                    </>
                                : 
                                    <><li><a onClick={SignOut} className="dropdown-item" href="#">Sign Out</a></li></>
                            }
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user,
	}
}
const mapDispatchToProps = {
	SignOutUser: userActions.SignOutUser,

}

export default connect(mapStateToProps, mapDispatchToProps)(header)