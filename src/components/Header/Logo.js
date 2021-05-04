import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {useHistory} from "react-router-dom";


const Logo = props => {
    const classes = useStyles();
    const history = useHistory()
    return (
        <div className={classes.container}>
            <Button onClick={() => {history.push('/')}}> <span className={classes.text}>{"TO DO APP"}</span> </Button>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        height: 70,
        paddingLeft: theme.spacing(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: '1.4em',
        fontWeight: 500,
    }
}));

export default Logo;
