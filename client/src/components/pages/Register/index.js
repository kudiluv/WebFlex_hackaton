import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister } from "../../store/thunks/auth";
import { Redirect, useParams } from 'react-router-dom';
import AuthorizationLayout from "../../layouts/authorization";
import style from "../../layouts/authorization/style/login.module.css";

const Register = () => {
    const { id } = useParams();
    const [userdata, setUserdata] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const dispatch = useDispatch();
    const handleSubmit = () => {
        if (userdata.password === userdata.confirmPass) 
            dispatch(fetchRegister({ 
                id: id,
                user: {
                    email: userdata.email,
                    password: userdata.password
                },
            }));
    }
    console.log(id);
    const token = useSelector(state => state.authReducer.token);
    return (
        <>{
            token ? <Redirect to="/teacher"> </Redirect> :
        <div>
            <AuthorizationLayout>
                <div className={style.title}>Регистрация</div>

                <input type="text" placeholder='ФИО:' disabled={true}/>
                <input type="email" placeholder='E-mail:' onChange={event => setUserdata({...userdata, email: event.target.value})}/>
                <input type="password" placeholder='Пароль:' onChange={event => setUserdata({...userdata, password: event.target.value})}/>
                <input type="password" placeholder='Повторите пароль:' onChange={event => setUserdata({...userdata, confirmPass: event.target.value})}/>

                <button type="button" onClick={handleSubmit}>Продолжить</button>

                <div>
                    При продолжении вы даете согласие с правилами сервиса и даете
                    согласие на обработку персональных данных
                </div>
            </AuthorizationLayout>
        </div>}</>);
};

export default Register;