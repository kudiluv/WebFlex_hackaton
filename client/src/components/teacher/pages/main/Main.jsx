import React from 'react';
import LecturesList from "./lecturesList";
import Filter from "./filter";

const TeacherMain = () => {
    return (
        <>
            <Filter/>
            <LecturesList/>
        </>
    );
};

export default TeacherMain;