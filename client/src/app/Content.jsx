import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../components/pages/Login/index';
import Register from '../components/pages/Register/index';
import Teacher from '../components/teacher/pages/main/Main';
import Lectures from '../components/teacher/pages/lectures/Lectures';
import './../components/globalStyles/index.css';
import { checkRole } from '../components/checkRole/checkRole';
import UploadLecture from '../components/teacher/pages/uploadLecture';
import Search from '../components/student/pages/search/Search';
import ItemLecture from '../components/teacher/pages/itemLecture';
import AddUser from '../components/admin/pages/AddUser';

const Content = (props) => {
    return (
        <>
            <Switch>

                <Route exact path="/" component={Login}></Route>
                <Route exact path="/register/:id" component={Register}></Route>
                <Route exact path="/lecture/:id" render={() => {
                    if (checkRole.teacher(props.role) || checkRole.student(props.role))
                        return <ItemLecture></ItemLecture>
                    else
                        return <Redirect to="/"></Redirect>;
                }}></Route>
                <Route exact path="/teacher" render={() => {
                    if (!checkRole.teacher(props.role))
                        return <Redirect to="/"></Redirect>;
                    else
                        return <Teacher></Teacher>
                }}>
                </Route>
                <Route exact path="/teacher/lectures" render={() => {
                    if (!checkRole.teacher(props.role))
                        return <Redirect to="/"></Redirect>;
                    else
                        return <Lectures></Lectures>
                }}>
                </Route>
                <Route exact path="/teacher/upload-lecture" render={() => {
                    if (!checkRole.teacher(props.role))
                        return <Redirect to="/"></Redirect>;
                    else
                        return <UploadLecture></UploadLecture>
                }}>
                </Route>
                <Route exact path="/student/search" render={() => {
                    if (!checkRole.student(props.role))
                        return <Redirect to="/"></Redirect>;
                    else
                        return <Search></Search>;
                }}></Route>
                    <Route exact path="/student" render={() => {
                    if (!checkRole.student(props.role))
                        return <Redirect to="/"></Redirect>;
                    else
                        return <Search></Search>;
                }}>
                </Route>
                <Route exact path="/admin/add-user" render={() => {
                    if (!checkRole.admin(props.role))
                        return <Redirect to="/"></Redirect>;
                    else
                        return <AddUser></AddUser>;
                }}>
                </Route>
            </Switch>
        </>
    );
};

export default Content;