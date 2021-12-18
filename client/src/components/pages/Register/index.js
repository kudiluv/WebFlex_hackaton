import React from 'react';
import AuthorizationLayout from "../../layouts/authorization";
import style from "../../layouts/authorization/style/login.module.css";

const Register = () => {
    return (
        <div>
            <AuthorizationLayout>
                <div className={style.title}>Регистрация</div>

                <input type="email" placeholder='E-mail:'/>
                <input type="password" placeholder='Пароль:'/>
                <input type="password" placeholder='Повторите пароль:'/>

                <button type="button">Продолжить</button>

                <div>
                    При продолжении вы даете согласие с правилами сервиса и даете
                    согласие на обработку персональных данных
                </div>
            </AuthorizationLayout>
        </div>
    );
};

export default Register;