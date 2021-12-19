import React, { useState } from 'react';
import style from './style/style.module.css'
import RollBack from '../../rollBack';
import { userApi } from '../../api/user.api';
import Alert from '../../alert/index';


const AddUser = () => {
    const [data, setData] = useState({
        role: "",
        name: "",
        generateLink: false,
        registerToken: ""
    })
    const handleClick = async () => {
        if (data.name === "" || data.role === "") return (<Alert text={"Заполните поля"}></Alert>);
        const result = await userApi.createUser({role: data.role, name: data.name});
        setData({...data, registerToken: result.registerToken.id});
    }
    return (
        <>
            <RollBack text={'Добавить пользователя'}/>

            <div className={style.container}>
                <div className={style.form}>
                    <div className={style.radioButton}>
                        <label><input type="radio" name='test' onInput={(event) => setData({...data, role: event.target.value})} value="teacher"/> Преподаватель</label>
                        <label><input type="radio" name='test' onInput={(event) => setData({...data, role: event.target.value})} value="student"/> Студент</label>
                    </div>

                    <input type="text" placeholder="ФИО:" onInput={(event) => setData({...data, name: event.target.value, generateLink: false})}/>
                    <div className={style.generation} style={{display: data.registerToken ? 'block' : 'none'}}>
                        <span>Ссылка доступа: </span>
                        <pre>{data.registerToken ? `${process.env.REACT_APP_LOCALHOST}/register/${data.registerToken}` : ""}</pre>
                    </div>

                    <button onClick={() => setData({...data, generateLink: true})} onMouseDown={handleClick}>Добавить</button>
                </div>
            </div>
        </>
    );
};

export default AddUser;