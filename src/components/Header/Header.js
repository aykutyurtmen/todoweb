import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Menu from './Menu';
import DrawerButton from './DrawerButton';
import Logo from './Logo';
import HeaderButtons from './HeaderButtons';

const Header = props => {
  const classes = useStyles();
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = () => event => {
      setDrawer(!drawer);
  };

  return (
    <>
      <Menu show={drawer} onClose={toggleDrawer()} />
      <AppBar position="sticky" className={classes.header}>
        {<DrawerButton onClick={toggleDrawer()}/>}
        <Box className={classes.headerContent}>
          <Logo />
          {<HeaderButtons/>}
        </Box>
      </AppBar>
    </>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    backgroundColor: theme.palette.primary,
    marginBottom: theme.spacing(3),
  },
  headerContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
}));

export default Header;
