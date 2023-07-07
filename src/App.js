import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';

import Navigation from './components/Navigation';
import GlobalProvider from './GlobalProvider';
import Login from './components/Login';
import Signup from './components/Signup';
import Course from './components/Course';
import SingleCourse from './components/SingleCourse';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <GlobalProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/:id" element={<PrivateRoute><SingleCourse/></PrivateRoute>} />
          <Route path="/signin" element={<Signup />} />
        </Routes>
        <Footer />
      </GlobalProvider>
    </Router>
  );
};

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const redirectURL = '/login';

  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to={redirectURL} />;
  }
}

export default App;
