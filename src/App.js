import React from "react";
import ThemeContextProvider from "./context/ThemeContext";
import Router from "./components/Router.js";
import {useAuth} from './context/AuthContext';
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import DefaultTheme from './Themes/Default';
import './Assets/scss/app.scss';

function App() {
    const {loggedIn} = useAuth();
    return (
        <div className="App">
            <ThemeContextProvider>
                <ThemeProvider theme={DefaultTheme}>

                        <Router/>

                </ThemeProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
