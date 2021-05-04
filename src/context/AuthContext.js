import React, {createContext, useEffect, useState} from "react";
import Service from '../services/Service'
import {useHistory} from 'react-router-dom'

const AuthContext = createContext({});

const AuthProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState();
    const history = useHistory()

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);

    const login = async (username, password) => {
        const {data, ok} = await Service().login({username, password});
        if (ok) {
            localStorage.setItem('token', data.tokenType + ' ' + data.accessToken);
            localStorage.setItem('username', data.user.username);
            localStorage.setItem('userid', data.user.id);
            setLoggedIn(true);
            setError("");
            history.push('/')
        } else {
            setError("");
            setError(data);
        }
    };

    const logout = async () => {
        const {data, ok} = await Service().logout(localStorage.getItem('username'));
        if (ok) {
            localStorage.clear();
            setLoggedIn(false);
            setError("");
            history.push('/login')
        } else {
            setError("");
            setError(data);
        }
    };

    const signUp = async (user) => {
       // console.log("test");
        const {data, ok} = await Service().signUp(
            {
                name: user.name,
                username: user.username,
                email: user.email,
                password: user.password,
                country: user.country,
                city: user.city,
                companyName: user.companyName,
                saleType: user.saleType,
                photoOne: "testlocation1",
                photoTwo:"testlocation2"
            });
        if (ok) {
            setError("");
            history.push('/login')
        } else {
            setError("");
            setError(data);
        }
    };

    const authContextValue = {
        login,
        loggedIn,
        setLoggedIn,
        logout,
        signUp,
        error
    };
    return <AuthContext.Provider value={authContextValue} {...props}/>
};

const useAuth = () => React.useContext(AuthContext);

export {AuthProvider, useAuth}