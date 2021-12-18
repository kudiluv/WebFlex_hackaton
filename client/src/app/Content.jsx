import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../components/pages/Login/Login';
import Teacher from '../components/teacher/pages/main/Main';

const Content = (props) => {
    return (
        <div className="content">
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/register/:id" ></Route>
                {
                    props.role === "teacher" ? <>
                        <Route exact path="/teacher" component={Teacher}></Route>
                    </> 
                    : <Redirect to="/"></Redirect>
                }
            </Switch>
        </div>
    );
};

export default Content;