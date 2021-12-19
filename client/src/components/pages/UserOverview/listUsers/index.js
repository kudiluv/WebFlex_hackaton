import React from 'react';
import style from './style/listUsers.module.css'

import ItemUser from "../itemUser";

const ListUsers = () => {
    return (
        <div className={style.container}>
            <ItemUser fio={'Тест'} email={'email@test.ru'}/>
        </div>
    );
};

export default ListUsers;