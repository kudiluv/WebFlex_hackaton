import React from "react";
import { useSelector } from "react-redux";
import NavTeacher from "../components/teacher/nav/NavTeacher";
import NavStudent from "../components/student/nav/NavStudent";
import './../components/globalStyles/index.css';

const Navigation = () => {
    const data = useSelector(state => state.authReducer.data);
    switch (data.role) {
        case "teacher":
            return (
                <>
                    <span className="navName">Михаил вадимович</span>
                    <img src="" alt="" />
                    <ul className="navlist">
                        <NavTeacher></NavTeacher>
                    </ul>
                </>
            )
        case "student":
            return (
                <>
                    <span className="navName">Иван Махалыч</span>
                    <img src="" alt="" />
                    <ul className="navlist">
                        <NavStudent></NavStudent>
                    </ul>
                </>
            )
        default:
            return (
                <div>kek</div>
            );
    }
}

export default Navigation;