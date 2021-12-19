import React, { useState } from 'react';
import style from './style/style.module.css'
import RollBack from "../../rollBack";

const SuperUser = () => {
    const [linkGeneration, setLinkGeneration] = useState(false)

    return (
        <>
            <RollBack text={'Добавить пользователя'}/>

            <div className={style.container}>
                <div className={style.form}>
                    <div className={style.radioButton}>
                        <label><input type="radio" name='test'/> Преподаватель</label>
                        <label><input type="radio" name='test'/> Студент</label>
                    </div>

                    <input type="text" placeholder="ФИО:" onInput={() => setLinkGeneration(false)}/>
                    <div className={style.generation} style={{display: linkGeneration ? 'block' : 'none'}}>
                        <span>Ссылка доступа: </span>
                        <pre>https://translate.yandex.ru/?lang=ru-en</pre>
                    </div>

                    <button onClick={() => setLinkGeneration(true)}>Добавить</button>
                </div>
            </div>
        </>
    );
};

export default SuperUser;