// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';



const HomePage = () => {
  return (
    <div className='main'>
				<div className='content_box'>
      <h1><span style={{color:'red'}} className='acta'>A</span>
			<span style={{color:'#2565ae'}} className='actct'>c</span>
			<span style={{color:'green'}} className='actct'>t</span>ualize Fathom Invoice</h1>
      <p className='quote1'>"Powerful Invoicing Platfrom <br></br><span style={{color:'gold'}} className='quote11'>'Your Business --- Your Clients'</span> "</p>
      <br></br>
			<p className='quote2'>We will help your Businees Quickly & <br></br> made Work Managemnet Easy</p>
			<br></br>
			<br></br>
			<Link to="/signup" className='link'>Create Account</Link>
			</div>
    </div>
  );
};

export default HomePage;
