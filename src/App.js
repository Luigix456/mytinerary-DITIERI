import React from 'react'
import "./style.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import Cities from './components/cities'

function App() {
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
