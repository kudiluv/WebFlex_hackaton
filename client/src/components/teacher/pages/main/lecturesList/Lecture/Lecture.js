import React from 'react';
import style from './style/style.module.css'

const LectureItem = ({ title, description, date }) => {
    return (
        <div className={style.parent}>
            <div className={style.title}>{ title }</div>
            <div className={style.description}>{ description }</div>
            <div className={style.date}>{ date }</div>
        </div>
    );
};

export default LectureItem;