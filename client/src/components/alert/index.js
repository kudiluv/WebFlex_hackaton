import React, { useState } from 'react';
import style from './style/alert.module.css'

const Alert = (text = false) => {
    const [active, setActive] = useState(text)

    const onClose = () => {
        setActive(false)
    }
    if (active) {
        return (
            <div className={style.container}>
                <div className={style.content}>
                    <div>Пользователь успешно добавлен</div>

                    <span className={style.close} onClick={onClose}>X</span>
                </div>

            </div>
        );
    }

    return <></>
};

export default Alert;