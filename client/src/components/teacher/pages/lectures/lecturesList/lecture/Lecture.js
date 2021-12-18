import React from 'react';
import { Link } from 'react-router-dom';
import style from './style/style.module.css'

const LectureItem = ({ id, title, description, date }) => {
    return (
        <Link to={`/teacher/lecture/${id}`}>
            <div className={style.parent}>
                <div className={style.title}>{ title }</div>
                <div className={style.description}>{ description }</div>
                <div className={style.date}>{ date }</div>
            </div>
        </Link>
    );
};

export default LectureItem;