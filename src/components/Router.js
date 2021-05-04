import React from "react";
import {Route, Switch} from "react-router-dom";
import Login from "../pages/Login";
import Error from "./Error";
import SignUp from "../pages/Signup";
import Header from "./Header/Header";
import TodoList from "../pages/TodoList";
import Calendar from "../pages/Calendar";


const Router = () => {

    return localStorage.getItem('token') ?
        (
            <>
                <Header/>
                <Switch>
                    <Route path="/" component={TodoList} exact/>
                    <Route path="/calendar" component={Calendar}/>
                    <Route component={Error}/>
                </Switch>
            </>
        ) : (
            <div>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route component={Login}/>
                </Switch>
            </div>
        );
}

export default Router;