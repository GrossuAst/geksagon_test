import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { mainApi } from '../../utils/auth-api';

import loginStyles from './login.module.css';

function Login({setIsLoggedIn}) {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({username: '', password: ''});

    function handleChange(evt) {
        const target = evt.target;
        const name = target.name;
        const value = target.value;
        setLoginData({...loginData, [name]: value});
    };

    function handleLogin(evt) {
        evt.preventDefault();
        mainApi.login(loginData)
            .then((res) => {
                localStorage.setItem('jwt', res.access_token);
                setLoginData({username: '', password: ''});
                setIsLoggedIn(true);
                navigate('/', {replace: true});
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return(
        <>
            <form className={loginStyles.authForm}
                onSubmit={ handleLogin }
            >
                <p className={loginStyles.title}>Вход</p>
                <div className={loginStyles.inputs}>
                    <input className={loginStyles.input} 
                        name="username"
                        type="text"
                        placeholder='Имя'
                        required
                        onChange={ handleChange }
                    />
                    <input className={loginStyles.input}
                        name="password"
                        type="password"
                        placeholder='Пароль'
                        required
                        onChange={ handleChange }
                    />
                </div>
                <button className={loginStyles.submitButton} type="submit">Войти</button>
                <p className={loginStyles.text}>Еще не зарегестрированы? <Link className={loginStyles.link} to='/register'>Создать аккаунт</Link></p>
            </form>
        </>
    ) 
}

export default Login;