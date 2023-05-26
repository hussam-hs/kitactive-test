import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import UserProfilePage from './pages/UserProfilePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={LoginPage} />
        <Route path="/register" Component={RegistrationPage} />
        <Route path="/user-profile" Component={UserProfilePage} />
      </Routes>
    </Router>
  );
};

export default App;

 
