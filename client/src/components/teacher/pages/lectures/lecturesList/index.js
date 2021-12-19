import React, { useEffect, useState } from 'react';
import style from './style/style.module.css'
import LectureItem from "./lecture/Lecture";
import Pagination from '../../../../pagination';
import { useDispatch, useSelector } from "react-redux";
import { fetchLectures } from '../../../../store/thunks/lectures';


const LecturesList = (props) => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLectures(`/teacher/lectures?page=${page}`));
    },[props,dispatch,page])
    const getCurrentPage = (value) => {
        setPage(value);
    }
    const lectures = useSelector(state => state.lecturesReducer.lectures);
    return (
        <div className={style.lectures}>
            <div className={style.container}>
                {lectures.rows.map(item =>
                    <LectureItem
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        description={item.description}
                        date={item.updatedAt}
                    />)}
            </div>
            {lectures.count > 15 ? <Pagination pages={lectures.pages} handlePage={getCurrentPage} current={page}></Pagination> : ""}
        </div>
    );
};

export default LecturesList;