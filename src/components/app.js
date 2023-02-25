import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "../Pages/Home";
import About from "../Pages/AboutUs";
import Auth from "../Pages/Auth";
import Order from "../Pages/Order";
import MedicalService from "../Pages/MedicalService";
import Test from "../Pages/BookTest";
import Appoinment from "../Pages/Appoinment";
import Emergency from "../Pages/Emergency";
import Insurance from "../Pages/Insurance";
import Health from "./Confirmation Pages/Health";
import Life from "./Confirmation Pages/Life";
import Total from "./Confirmation Pages/Total";

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='/login' element={<Auth/>} />
      <Route path='/order' element={<Order/>} />
      <Route path='/medicalservice' element={<MedicalService/>} />
      <Route path='/booktest' element={<Test/>} />
      <Route path='/appoinment' element={<Appoinment/>} />
      <Route path='/emergency' element={<Emergency/>} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/goHealth" element={<Health />} />
      <Route path="/goLife" element={<Life />} />
      <Route path="/totalCoverage" element={<Total />} />
      </Routes>
    </Router>
  );
}

export default App;

