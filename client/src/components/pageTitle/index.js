import React from 'react';
import style from './style/style.module.css'

const PageTitle = (props) => {
    return (
        <div>
            <div className={style.filter}>{props.text}</div>
        </div>
    );
};

export default PageTitle;