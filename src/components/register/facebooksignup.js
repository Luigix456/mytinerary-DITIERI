import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import './styleSign.css'

function FacebookSignUp(props) {
  
    console.log(props)
    const responseFacebook = async (res) => {
    console.log(res)
    console.log(res.name)
      const fullNameSeparado = res.name.split(" ")
      console.log(fullNameSeparado)

    const userData = {
      name:fullNameSeparado[0],
      surName:fullNameSeparado[1] + " " + fullNameSeparado[2],
      email: res.email,
      password: res.id,
      picture:res.picture.data.url,
      country: props.country,
      from: "facebook",
      
      
    }
    await props.signUpUser(userData)
  }

  return (
      <div className="mb-5 fb">
         <FacebookLogin
            cssClass="buttonsocial my-facebook-button-class"
            icon="fa-facebook"
            textButton=" SignUp with Facebook"
            appId="1030028274557756"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}

        />
     </div>
  );
}
const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(FacebookSignUp);