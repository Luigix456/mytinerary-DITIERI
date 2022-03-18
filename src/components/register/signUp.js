import React from 'react'
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import {Link as LinkRouter } from 'react-router-dom';
import Snack from '../../components/snackbar';
import FacebookSignUp from "./facebooksignup"
import {useState } from "react";
import countriesJS from "../countries";

 function SignUp(props) {
    const countries = [
        "unselected",
        "Argentina",
        "Spain",
        "Mexico",
        "Canada",
        "Russia",
        "Brazil",
        "Spain",
        "Uruguay",
        "United States",
        "Japan",
        "Italy",
        "Portugal",
        "Turkey",
        "London",
      ];
    
      const [selectCountries, setSelectCountries] = useState("unselected");
    
      function select(event) {
        console.log(event.target.value);
        setSelectCountries(event.target.value);
      }

        console.log(props)
        
    const handleSubmit = (event) => {
        event.preventDefault()   
        console.log(event.target.value)
        console.log(event.target[0].value)
        console.log(event.target[1].value)
        console.log(event.target[2].value)
        console.log(event.target[3].value)
        console.log(event.target[4].value)

        const userData={
            name:event.target[0].value,
            surName:event.target[1].value,
            email:event.target[2].value,
            password:event.target[3].value,
            picture:event.target[4].value,
            country: selectCountries,
            from:"form-Signup",
            
        }
        props.signUpUser(userData)
        
    }
   
    return (

      <>
<div className='d-flex flex-column justify-content-center align-items-center' >
    <div>
          <h2 className="mt-3 text-center">Select your country</h2>
        </div>
        <div>
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            onChange={select}
          >
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
          </div>
          {selectCountries !== "unselected" ? (
        <section>       

        <Snack/>
        <h1 className='mb-5 mt-5'>Create a new User with Facebook</h1>
        <FacebookSignUp country={selectCountries}/>
        <h2>Or with our Form</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend"></div>
                <input name="Name" className="form-control mb-3" placeholder="Name" type="text" />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    
                </div>
                <input name="Surname" className="form-control mb-3" placeholder="Surname" type="text" />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                   
                </div>
                <input name="email" className="form-control mb-3" placeholder="Email address" type="email" />
            </div>
        
            
            
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    
                </div>
                <input name='password' className="form-control mb-3" placeholder="password" type="password" />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    
                </div>
                   <input name="picture" className="form-control mb-3" placeholder="Upload your Profile image" type="text" />
                </div>
            <label>Select Your country</label>
            <select className="form-select mb-3" aria-label="Default select example">
               
            {countriesJS.map(countries =>
                <option key={countries.name} value={countries.value}>{countries.name}</option>
                )}
            </select>

            <div className="form-group d-flex justify-content-center align-items-center">
                <button type="submit" className="btn btn-primary btn-block mt-3"> Create Account  </button>
            </div>
            <div className="text-center mt-3">Do you have an existing account? <LinkRouter to="/signin">SignIn</LinkRouter> </div>
        </form>
        </section>    
        ) : (
            <h3>Select your country to proceed with the SignUp</h3>
          )}
        </div>
        </> 
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