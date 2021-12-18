import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../components/pages/Login/index';
import Register from '../components/pages/Register/index';
import Teacher from '../components/teacher/pages/main/Main';
import Lectures from '../components/teacher/pages/lectures/Lectures';
import './../components/globalStyles/index.css';
import { checkRole } from '../components/checkRole/checkRole';

const Content = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/register/:id" component={Register}></Route>
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
            </Switch>
        </div>
    );
};

export default Content;