import React, { useEffect } from "react";
import { fetchLectures } from "../../../store/thunks/lectures";
import { useDispatch, useSelector } from "react-redux";

const Lectures = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLectures("/teacher/lectures?page=1"));
    },[props,dispatch])
    const lectures = useSelector(state => state.lecturesReducer.lectures);
    return (
        <>лекции</>
    )
}

export default Lectures;