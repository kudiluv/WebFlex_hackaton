import React from 'react';
import style from './style/style.module.css'
import RollBack from "../../rollBack";

const SuperUser = () => {
    return (
        <>
            <RollBack text={'Добавить пользователя'}/>

            <div className={style.container}>
                <div className={style.form}>
                    <div className={style.radioButton}>
                        <label><input type="radio" name='test'/> Преподаватель</label>
                        <label><input type="radio" name='test'/> Студент</label>
                    </div>
                    <input type="text" placeholder="ФИО:"/>

                    <button>Добавить</button>
                </div>
            </div>
        </>
    );
};

export default SuperUser;