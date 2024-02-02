import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import registerStyles from './register.module.css';
import { mainApi } from "../../utils/auth-api";

function Register() {
    const navigate = useNavigate();

    const [data, setData] = useState({username: '', password: ''});

    function handleChange(evt) {
        const target = evt.target;
        const name = target.name;
        const value = target.value;
        setData({...data, [name]: value});
    };

    function handleRegisterUser(evt) {
        evt.preventDefault();
        mainApi.register(data)
            .then((res) => {
                setData({username: '', password: ''});
                navigate('/login', {replace: true});
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return(
        <>
            <form 
                className={registerStyles.authForm}
                onSubmit={ handleRegisterUser }
            >
                <p className={registerStyles.title}>Регистрация</p>
                <div className={registerStyles.inputs}>
                    <input className={registerStyles.input} 
                        id="username"
                        name="username"
                        type="text"
                        placeholder='Имя'
                        required
                        onChange={handleChange}
                    />
                    <input className={registerStyles.input}
                        id="password"
                        name="password"
                        type="password"
                        placeholder='Пароль'
                        required
                        onChange={handleChange}
                    />
                </div>
                <button className={registerStyles.submitButton} type="submit">Зарегистрироваться</button>
                <p className={registerStyles.text}>Уже зарегестрированы?<Link className={registerStyles.link} to='/login'> Войти</Link></p>
            </form>
        </>
    ) 
}

export default Register;