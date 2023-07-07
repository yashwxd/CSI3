import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
      toast.error('Please fill in all the fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Invalid email');
      return;
    }
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      toast.info('Registering...');
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success('Registration successful. You can now log in.');
      await new Promise((resolve) => setTimeout(resolve, 2000));

      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isLoggedIn', true);
      navigate('/login');
    } catch (error) {
      toast.error('Registration failed.');
      console.error('Error during registration:', error);
    }
  };


  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <div className="input-group">
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <button type="submit">
          Sign up
        </button>
      </form>
      <p>
        Already signed up? <Link to="/login">Login here</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Signup;
