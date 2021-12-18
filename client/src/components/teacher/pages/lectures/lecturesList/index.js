import React from 'react';
import style from './style/style.module.css'
import LectureItem from "./lecture/Lecture";
import Pagination from '../../../../pagination';


const LecturesList = (props) => {

    return (
        <div className={style.lectures}>
            <div className={style.container}>
                {props.lectures.map(item =>
                    <LectureItem
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        description=""
                        date={item.updatedAt}
                    />)}
            </div>
            <Pagination></Pagination>
        </div>
    );
};

export default LecturesList;