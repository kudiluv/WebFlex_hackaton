import React, { useState } from 'react';
import style from './style/login.module.css'
import background from './../../media/images/loginBackground.svg';
import { fetchAuth } from './../../store/thunks/auth';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [userdata, setUserdata] = useState({
        email: "",
        password: ""
    });
    const dispatch = useDispatch();
    console.log(userdata);
    const handleSubmit = () => {
        dispatch(fetchAuth(userdata));
        console.log('negr');
    }
    return (
        <div className={style.container} style={{backgroundImage: `url(${background})`}}>
            <div className={style.form}>
                <div className={style.title}>Авторизация</div>

                <input type="email" placeholder='E-mail:' onChange={(event) => setUserdata({...userdata, email: event.target.value})}/>
                <input type="password" placeholder='Пароль:' onChange={(event) => setUserdata({...userdata, password: event.target.value})}/>

                <button type="button" onClick={handleSubmit}>Войти</button>

                <a className={style.getIn} href={'/'}>У вас ещё нет аккаунта?</a>
            </div>
        </div>
    );
};

export default Login;