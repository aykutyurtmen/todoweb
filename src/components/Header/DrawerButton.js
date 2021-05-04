import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const DrawerButton = ({ onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <IconButton aria-label="nav-menu" onClick={onClick}>
        <MenuIcon style={{ color: '#ffffff' }}>menu</MenuIcon>
      </IconButton>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default DrawerButton;
