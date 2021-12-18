import React from 'react';
import LecturesList from "./lecturesList";
import Filter from "./filter";

const TeacherMain = () => {
    return (
        <div>
            <Filter/>
            <LecturesList/>
        </div>
    );
};

export default TeacherMain;