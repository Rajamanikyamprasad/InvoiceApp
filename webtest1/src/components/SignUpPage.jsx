// src/components/SignUpPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/SignUpPage.css'

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

	const [authenticated, setAuthenticated] = useState(false);

  const handleSignUp = async (e) => {
    // Perform your sign-up logic here
    // For simplicity, just redirect to sign-in after "signing up"
		e.preventDefault();

		try {
      const response = await fetch('https://localhost:44347/api/Authentication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
					role: 'User', 

        }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      // Handle successful authentication
      const data = await response.json();
      console.log('Authentication successful:', data);

      // Update state or take other actions based on the authentication result
			// navigate('/signin');

      // setAuthenticated(true);
			setTimeout(() => {
				setAuthenticated(true);
				// Redirect to home page after a delay
				setTimeout(() => {
					navigate('/signin');
				}, 3000); // 2000 milliseconds (2 seconds) delay before redirecting
			}, 2000); // 1000 milliseconds (1 second) delay before setting authentication to true
	
      // Additional actions, e.g., redirect the user
    } catch (error) {
      console.error('Error during authentication:', error.message);
      // Handle authentication failure, e.g., display an error message
    }

  };

	if (authenticated) {
    // Render something different or redirect the user after successful authentication
    return <p>Authentication successful! Redirecting...</p>;
  }

  return (
    <div className='signupmain'>
			<div className='form_box'>
      <h2>Register Here</h2>
			<br></br>
      <label>
        Username:
				<br/>
        <input type="text" name="username" placeholder='Enter username' onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
				<br/>
        <input type="email" name="email" placeholder='Enter email' onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Password:
				<br/>
        <input type="password" name="password" placeholder='Enter password' onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Confirm Password:
				<br/>
        <input type="password" name="confirmPassword" placeholder='confrim password' onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
      <br />
      <p>
        Already have an account? <Link to="/signin" style={{color:'white'}}>Sign In</Link>
      </p>
			</div>
    </div>
  );
};

export default SignUpPage;
