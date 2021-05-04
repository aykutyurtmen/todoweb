import { Grid } from '@material-ui/core'
import SignIn from '../components/LoginForm'
import React, { useEffect} from 'react'

const Login = () => {

    useEffect(() => {
    }, []);

        return (
            <Grid>
                <SignIn/>
            </Grid>
        );
    };

export default Login;