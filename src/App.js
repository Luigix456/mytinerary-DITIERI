import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import Cities from './components/cities'
import "./style.css";
import axios from 'axios'
import Details from './components/details'
import ScrollTop from './components/scrollToTop' 
import SignIn from './components/register/signIn'
import SignUp from './components/register/signUp'

function App() {
  useEffect(() => async() => {
    /* axios.get(`http://localhost:4000/api/allcities`)
    .then(response =>console.log(response.data.response.cities)) */
  }, [])

  return (
    <BrowserRouter>
      <ScrollTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/cities" element={<Cities/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App
