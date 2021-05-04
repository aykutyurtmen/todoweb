import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useAuth} from "../../context/AuthContext"

const HeaderButtons = props => {
  const classes = useStyles();
  const {logout} = useAuth();

  return (
    <div className={classes.container}>
      <IconButton
        onClick={() => {}}
        className={`${classes.button} ${classes.notification}`}>
        <SettingsIcon className={`${classes.smallButton}`}>notifications</SettingsIcon>
      </IconButton>
      <Box component="span" display={{ xs: 'none', sm: 'block' }}>
        <Button
          onClick={() => {}}
          className={`${classes.button} ${classes.smallButton}`}
        >
          TO DO APP
        </Button>
      </Box>
      <IconButton className={classes.button} onClick={() => {logout()}}>
        <ExitToAppIcon className={`${classes.accountButton}`}>account_circle</ExitToAppIcon>
      </IconButton>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: '#fff',
    backgroundColor: theme.palette.primary.light,
    margin: theme.spacing(1),
  },
  notification: {
    width: 30,
    height: 30,
  },
  smallButton: {
    fontSize: '0.8em',
  },
  accountButton: {
    fontSize: '1em',
  }
}));

export default HeaderButtons;
