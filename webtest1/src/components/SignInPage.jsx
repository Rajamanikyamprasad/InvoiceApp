// src/components/SignInPage.js
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/SignInPage.css'

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSignIn = async () => {
    try {
      const response = await fetch('https://localhost:44347/api/Authentication/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, you can redirect the user to the home page or perform other actions
        console.log(data.Message);
        navigate('/overview');

      } else {
        // Login failed, display error message
        setErrorMessage(data.Message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
    // Perform your authentication logic here
    // For simplicity, just redirect to home after "signing in"
  };

  return (
    <div className='loginmain'>
			<div className='loginbox'>
      <h2>SignIn Here</h2>
			<br></br>
      <label>
        User/Email:
				<br/>
        <input type="email" placeholder='Enter user/email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      </label>
      <br />
      <label>
        Password:
				<br/>
        <input type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      </label>
      <br />
      <button onClick={handleSignIn}>Sign In</button>
      <br />
      <p>
        Don't have an account? <Link to="/signup" style={{color:'white'}}>Create Account</Link>
      </p>
    </div>
		</div>
  );
};

export default SignInPage;
