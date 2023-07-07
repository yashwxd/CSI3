import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '' && password.trim() !== '') {
      if (!/\S+@\S+\.\S+/.test(email)) {
        toast.error('Invalid email');
      } else {
        setIsSubmitting(true);

        // Retrieve user data from localStorage
        const userData = JSON.parse(localStorage.getItem('user'));

        // Check if the entered email and password match the stored user data
        if (userData && email === userData.email && password === userData.password) {
          setIsSubmitting(false);

          // Show success toast message
          toast.success('Login successful!');

          // Store the authentication status in localStorage
          localStorage.setItem('isLoggedIn', true);

          // Navigate to the home page
          navigate('/');
        } else {
          setIsSubmitting(false);

          // Show error toast
          toast.error('Login failed. Please try again.');
        }
      }
    } else {
      toast.error('Please enter email and password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
      </form>
      <p>
        Not logged in? <Link to="/signin">Sign up here</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Login;
