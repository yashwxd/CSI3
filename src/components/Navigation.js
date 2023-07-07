import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Navigation.css';
import { GlobalContext } from '../GlobalProvider';

const Navigation = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(GlobalContext);

  const handleLogout = () => {
    // Clear user data from localStorage and update authentication status
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);

    // Display toast message
    toast.success('Logout successful.');

    // Navigate to the home page
    navigate('/');
  };

  return (
    <nav className="navigation">
      <Link to="/"><div className="logo">E-Learning App</div></Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/course">Courses</Link>
        </li>
      </ul>
      <div className="auth-buttons">
        {isLoggedIn ? (
          <>
            <div className="user-info">Welcome, {JSON.parse(localStorage.getItem('user')).firstName}</div>
            <button className="signup-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="signup-button">
              <Link to="/signin">Sign up</Link>
            </button>
            <button className="login-button">
              <Link to="/login">Login</Link>
            </button>
          </>
        )}
      </div>
      <ToastContainer />
    </nav>
  );
};

export default Navigation;
