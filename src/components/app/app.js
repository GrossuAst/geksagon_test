import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import appStyles from './app.module.css';

import Register from "../../pages/register/register";
import Login from "../../pages/login/login";
import MainPage from "../../pages/main/main";

function App() {  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      {/* главная */}
      <Route path="/"
        element={ <MainPage /> }
      />

      {/* логин */}
      <Route 
        path="/login"
        element={ 
          <Login
            setIsLoggedIn={ setIsLoggedIn }  
          /> 
        }
      />

      {/* регистрация */}
      <Route 
        path="/register" 
        element={ <Register /> }
      />
    </Routes>
  );
}

export default App;
