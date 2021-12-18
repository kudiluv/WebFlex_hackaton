import React from "react";
import { useSelector } from "react-redux";
import NavTeacher from "../components/teacher/nav/NavTeacher";
import './../components/globalStyles/index.css';

const Navigation = () => {
    const data = useSelector(state => state.authReducer.data);
    switch (data.role) {
        case "teacher":
            return (
                <nav className="nav">
                    <span className="navName">Михаил вадимович</span>
                    <img src="" alt="" />
                    <ul className="navlist">
                        <NavTeacher></NavTeacher>
                    </ul>
                </nav>
            )
        default:
            return (
                <div>kek</div>
            );
    }
}

export default Navigation;