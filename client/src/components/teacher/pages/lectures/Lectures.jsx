import React, { useEffect } from "react";
import { fetchLectures } from "../../../store/thunks/lectures";
import { useDispatch, useSelector } from "react-redux";
import LecturesList from "./lecturesList/index";
import PageTitle from "../../../pageTitle/index";

const Lectures = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLectures("/teacher/lectures?page=2"));
    },[props,dispatch])
    const lectures = useSelector(state => state.lecturesReducer.lectures);
    return (
        <>
            <PageTitle text="Лекции"/>
            <LecturesList lectures={lectures.rows}/>
        </>
    )
}

export default Lectures;