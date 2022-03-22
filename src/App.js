import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import Cities from './components/cities'
import "./style.css";
import Details from './components/details'
import ScrollTop from './components/scrollToTop' 
import SignIn from './components/register/signIn'
import SignUp from './components/register/signUp'
import userActions from './redux/actions/userActions'

function App(props) {
  useEffect(() => {
    if(localStorage.getItem('token') !== null){
      const token = localStorage.getItem('token')
      props.VerificarToken(token)
    }
    // eslint-disable-next-line
  }, [])
  return (
    <BrowserRouter>
      <ScrollTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/cities" element={<Cities/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
const mapDispatchToProps = {
  VerificarToken: userActions.VerificarToken,
}

export default connect(null, mapDispatchToProps)(App);

