import React, { useEffect, useState } from 'react';
import style from './style/alert.module.css'

const Alert = ({active, text}) => {
    const [_active, setActive] = useState(active)

    useEffect(() => {
        setActive(active)
    }, [active])

    const onClose = () => {
        setActive(false)
    }

    if (_active)
        return (
            <div className={style.container} onClick={() => setActive(false)}>
                <div className={style.content}>
                    <div>{text}</div>

                    <span className={style.close} onClick={onClose}>X</span>
                </div>

            </div>
        );

    return <></>

};

export default Alert;