import React from 'react'
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import {Link as LinkRouter } from 'react-router-dom';
import countries from '../countries';
import Snack from '../../components/snackbar';
import Container from './container';

 function SignUp(props) {
console.log(props)
    const handleSubmit = (event) => {
        event.preventDefault()

        const userData={
            name:event.target[0].value,
            surName:event.target[1].value,
            email:event.target[2].value,
            password:event.target[3].value,
            from:"form-Signup"
        }
        props.signUpUser(userData)
        
    }
    
    /* alert(props.message) */
    return (
        <div>
        <Snack/>
        <Container/>
        <form onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                </div>
                <input name="name" className="form-control" placeholder="name" type="text" />
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                </div>
                <input name="Surname" className="form-control" placeholder="surname" type="text" />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                </div>
                <input name="email" className="form-control" placeholder="Email address" type="email" />
            </div>

            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                </div>
                <input name='password' className="form-control" placeholder="Create password" type="password" />
            </div>
            <label>Select Your country</label>
            <select className="form-select mb-3" aria-label="Default">
                {countries.map(countries =>
                <option key={countries.name} value={countries.value}>{countries.name}</option>
                )}
            </select>
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Sign In</button>
            </div>
            <div className="text-center">Have an account? <LinkRouter to="/signIn">SignIn</LinkRouter> </div>
        </form>
        </div>
    )

}

const mapDispatchToProps = {
    signUpUser: userActions.signUpUser,
    
}
const mapStateToProps = (state) => {
	return {
		message: state.userReducer.message,
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(SignUp);