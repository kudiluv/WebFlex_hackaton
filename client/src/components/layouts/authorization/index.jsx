import React from 'react';
import style from './style/login.module.css'
import background from '../../media/images/loginBackground.svg';


const AuthorizationLayout = ({children}) => {
    return (
        <div className={style.container} style={{backgroundImage: `url(${background})`}}>
            <div className={style.form}>
                {children}
            </div>
        </div>
    );
};

export default AuthorizationLayout;