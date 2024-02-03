import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import appStyles from './app.module.css';

import { shorterApi } from "../../utils/shorter-api";

import Register from "../../pages/register/register";
import Login from "../../pages/login/login";
import MainPage from "../../pages/main/main";

function App() {
  // const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    if(isLoggedIn) {
      shorterApi.getData(localStorage.getItem('jwt'))
        .then((res) => {
          setInitialData(res);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })  
    }
    return
  }, [isLoggedIn]);
  
  // useEffect(() => {
  //   checkToken()
  // });

  // function checkToken() {
  //   const token = localStorage.getItem('jwt');
  //   return token;
  // };

  return (
    <Routes>
      {/* главная */}
      <Route path="/"
        element={ 
          isLoggedIn ? 
          <MainPage 
            isLoggedIn={ isLoggedIn }
            initialData={ initialData }
            setInitialData={ setInitialData }
          /> : 
          <Navigate to='/login' replace />
        }
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
