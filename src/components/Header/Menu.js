import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Menu = ({ show, onClose }) => {
  const history = useHistory()
  const location = useLocation()
  const classes = useStyles()

  const [showSubMenuIndex, setShowSubMenuIndex] = useState(0)
  const [isRoot, setIsRoot] = useState(true)

  let INITIAL_MENU_LIST = [
    {
      icon: 'equalizer',
      visible:true,
      subMenuList: [
        {
          title: 'Todo',
          subtitle: 'Todo',
          icon: 'bar_chart',
          page: '/',
          show: true,
        },
        {
          title: 'Calendar',
          subtitle: 'Calendar',
          icon: 'bar_chart',
          page: '/calendar',
          show: true,
        },
      ],
    },
    {
      icon: 'work_outline_outlined',
      visible: false,
      subMenuList: [
        {
          title: 'Onboarding',
          subtitle: 'Customer Onboarding',
          icon: 'people-alt',
          page: '/customer/onboarding/list',
          show: false,
        },
      ],
    },

  ]
  const [MENU_LIST, setMenuList] = useState(INITIAL_MENU_LIST)



  useEffect(() => {
    setMenuList(INITIAL_MENU_LIST)
  }, [isRoot])


  useEffect(() => {
    MENU_LIST.map((menu, index) =>
      menu.subMenuList && menu.subMenuList.map((subMenu) => {
        if (location.pathname.split('/')[1] === subMenu.page.split('/')[1]) {
          setShowSubMenuIndex(index);
        }
      }),
    );
  }, [location.pathname]);

  const renderSubMenu = (subMenu) => {
    if (subMenu.show === true) {
      return (
        <ListItem
          className={location.pathname.startsWith(subMenu.page) ? classes.listItemActive : undefined}
          button
          key={subMenu.title}
          onClick={() => {
            history.push(subMenu.page)
            onClose()
          }}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <ArrowForwardIosIcon fontSize="small">{subMenu.icon}</ArrowForwardIosIcon>
          </ListItemIcon>
          <ListItemText
            className={classes.listItemText}
            primary={subMenu.title}
            primaryTypographyProps={{
              className: classes.listItemText,
            }}
            secondary={subMenu.subtitle || false}
            secondaryTypographyProps={{
              className: classes.listItemSubText,
            }}
          />
        </ListItem>)
    }

  }
  return (
    <Drawer
      anchor="left"
      open={show}
      onClose={onClose}
      PaperProps={{
        className: classes.root,
      }}
    >
      <Box display="flex" height="100%">
        <Box className={classes.menu}>
          <List>
            {MENU_LIST.map((menu, index) => {
               if(menu.visible) {
                 return (
                   <ListItem key={index}>
                     <ListItemAvatar className={classes.drawerIconContainer} onClick={() => setShowSubMenuIndex(index)}>
                       <Avatar className={showSubMenuIndex === index ? classes.drawerIconActive : classes.drawerIcon}>
                         <Icon>{menu.icon}</Icon>
                       </Avatar>
                     </ListItemAvatar>
                   </ListItem>
                 )
               }
            })}
          </List>
        </Box>
        <Box className={classes.subMenu}>
          <Typography component="h2" className={classes.brand}>{"DuckSocks"}</Typography>
          {MENU_LIST.map((menu, index) => (
            <List key={index} style={{ display: index !== showSubMenuIndex && 'none' }}>
              {menu.subMenuList &&
              menu.subMenuList.map(subMenu => renderSubMenu(subMenu))
              }
            </List>
          ))}
        </Box>
      </Box>
    </Drawer>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: theme.constants.drawerWidth,
  },
  drawerIconContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  drawerIcon: {
    backgroundColor: theme.palette.primary.light,
    cursor: 'pointer',
    width: 60,
    height: 60,
  },
  drawerIconActive: {
    backgroundColor: theme.palette.accent.main,
    cursor: 'pointer',
    width: 60,
    height: 60,
  },
  menu: {
    width: 100,
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.dark,
  },
  subMenu: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
  },
  // listItemActive: {
  //   borderLeft: 5,
  //   borderColor: theme.palette.accent.main,
  //   borderStyle: 'solid',
  //   backgroundColor: theme.palette.primary.light,
  // },
  listItemIcon: {
    color: theme.palette.secondary.main,
    minWidth: 36,
  },
  listItemText: {
    color: theme.palette.secondary.main,
    fontSize: '1em',
  },
  listItemSubText: {
    color: theme.palette.secondary.main,
    fontSize: '0.7em',
  },
  brand: {
    fontSize: '1.4em',
    paddingLeft: theme.spacing(2),
    color: '#fff',
    fontWeight: 500,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

export default Menu
