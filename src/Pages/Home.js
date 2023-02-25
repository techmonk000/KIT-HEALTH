import React from "react";
import { Link } from 'react-router-dom';

import Header from "../components/Header";
import ContactUs from "./Contactus";


const Home = () =>{
    return(
        <div align="center">
          <Header />
          <iframe src="https://i.pinimg.com/originals/b8/f6/bf/b8f6bf5e5b054f2487d735a0c324a01f.jpg" width="320" height="320" align="left"></iframe>
          <a href="/Contactus"><button>Contact Us</button></a>


          

    </div>
    )
};
export default Home;
