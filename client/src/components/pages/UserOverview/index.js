import React from 'react';
import ListUsers from "./listUsers";
import RollBack from "../../rollBack";

const UserOverview = () => {
    return (
        <>
            <RollBack text={'Список пользователей'}/>
            <ListUsers/>
        </>
    );
};

export default UserOverview;