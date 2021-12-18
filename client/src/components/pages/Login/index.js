import React, { useState } from 'react';
import AuthorizationLayout from "../../layouts/authorization";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth } from "../../store/thunks/auth";
import { Redirect } from 'react-router-dom';
import style from "../../layouts/authorization/style/login.module.css";

const Login = () => {
    const [userdata, setUserdata] = useState({
        email: "",
        password: ""
    });
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(fetchAuth(userdata));
    }
    const token = useSelector(state => state.authReducer.token);
    return (
        <>{
            token ? <Redirect to="/teacher"> </Redirect> :
        <div>
            <AuthorizationLayout>
                <div className={style.title}>Авторизация</div>

                <input type="email" placeholder='E-mail:'
                       onChange={(event) => setUserdata({...userdata, email: event.target.value})}/>
                <input type="password" placeholder='Пароль:'
                       onChange={(event) => setUserdata({...userdata, password: event.target.value})}/>

                <button type="button" onClick={handleSubmit}>Войти</button>

                <a href={'/'}>У вас ещё нет аккаунта?</a>
            </AuthorizationLayout>
        </div>}</>
    );
};

export default Login;