import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Doctorr from './Doctorr';
import Patient from './Patient';
import Home from './Home';
import Navigate from './Navigate';
import './App.css';


  

const App = () => {
  return (
    <BrowserRouter>
    <Navigate/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/doctor" element={<Doctorr/>}/>
        <Route path="/patient" element={<Patient/>}/>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
