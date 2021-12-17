import React from 'react';
import style from './style/login.module.css'
import background from './../../media/images/loginBackground.svg'

const Login = () => {
    return (
        <div className={style.container} style={{backgroundImage: `url(${background})`}}>
            <div className={style.form}>
                <div className={style.title}>Авторизация</div>

                <input type="email" placeholder='E-mail:'/>
                <input type="password" placeholder='Пароль:'/>

                <button>Войти</button>

                <a className={style.getIn} href={'/'}>У вас ещё нет аккаунта?</a>
            </div>
        </div>
    );
};

export default Login;