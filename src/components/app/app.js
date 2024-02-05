import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';

import { shorterApi } from "../../utils/shorter-api";

import Register from "../../pages/register/register";
import Login from "../../pages/login/login";
import MainPage from "../../pages/main/main";

function App() {
  const navigate = useNavigate();

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
  }, [isLoggedIn]);
  
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    token && 
    shorterApi.getData(token)
      .then((res) => {
        setIsLoggedIn(true);
        setInitialData(res);
        navigate('/', {replace: true});
        console.log(res)
      })
  }, []);

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
            setIsLoggedIn={ setIsLoggedIn }
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
