import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import Cities from './components/cities'
import "./style.css";
import axios from 'axios'

function App() {
  useEffect(() => {
    axios.get(`http://localhost:4000/api/allcities`)
    .then(response =>console.log(response.data.response.cities))
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/cities" element={<Cities/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App
