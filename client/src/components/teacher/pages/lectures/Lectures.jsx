import React from "react";
import LecturesList from "./lecturesList/index";
import PageTitle from "../../../pageTitle/index";

const Lectures = (props) => {
    return (
        <>
            <PageTitle text="Лекции"/>
            <LecturesList/>
        </>
    )
}

export default Lectures;