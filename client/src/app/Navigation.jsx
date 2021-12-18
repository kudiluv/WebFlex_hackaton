import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
    const data = useSelector(state => state.authReducer.data);
    switch (data.role) {
        case "teacher":
            return (
                <ul>
                    <li><Link to="/teacher/lections">Лекции</Link></li>
                    <li><Link to="/teacher/messages">Сообщения</Link></li>
                    <li><Link to="/teacher/upload-lection">Загрузить лекцию</Link></li>
                    <li></li>
                </ul>
            )
        default:
            break;
    }
}

export default Navigation;