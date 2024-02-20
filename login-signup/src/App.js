
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './Component/Navbar';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Home from './Component/Home';



function App() {
  return (
    <>
    <div className="App">
        <BrowserRouter>
    <Navbar /> 
    <div className="container">
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </div> 
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
