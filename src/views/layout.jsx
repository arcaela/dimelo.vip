import React from 'react';
import {
  makeStyles,
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Avatar,
  Button,
} from '@material-ui/core';
import {
  Notifications,
  Menu as MenuIcon,
} from '@material-ui/icons';
import { Link, useRouteMatch } from 'react-router-dom';
import Logo from '../dist/images/brand.svg'



const useStyles = makeStyles((theme) => ({
  root: { display: 'flex', },
  appBar: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      borderRadius:10,
      top:10, right:40,
      maxWidth: `calc(100% - ${config.drawerWidth+80}px )`,
      boxShadow:'0px 3px 3px 0px #00000021',
    },
  },
  toolbar:{
    display:'flex',
    justifyContent:'flex-end',
    '& .flex-grow':{ flexGrow:1, },
    '& > *':{ margin:'0 10px 0 0', },
    '& > *:last-child':{ marginRight:0, },
    '& .MuiAvatar-root':{ marginLeft:10, width:30, height:30, },
  },
  drawer: {
    flexShrink: 0,
    width: config.drawerWidth,
    position:'relative',
    '& .Mui-selected':{
      backgroundColor:theme.palette.secondary.main,
    },
    '& .MuiDrawer-paper':{
      '& .MuiListItemIcon-root':{
        color:'white',
      },
      color:'white',
      width: config.drawerWidth,
      backgroundColor:theme.palette.primary.main,
    },
  },
  [theme.breakpoints.up('md')]: {
    drawerButton:{ display:'none', },
  },
  content: {
    flexGrow: 1,
    display:'flex',
    minHeight:'100vh',
    flexDirection:'column',
    padding: theme.spacing(5),
    paddingTop:theme.mixins.toolbar.minHeight+10,
  },
}));



export const config = {
    drawerWidth:250,
    isDesktop:window.innerWidth>959,
    routes:[],
};

export default function Layout({ children }){
    const classes = useStyles();
    const [ open, setOpen ] = React.useState(config.isDesktop);
    const Go = ({ path, label, icon })=>{
      const match = useRouteMatch({ path, exact:true, });
      const Icon = icon;
      return (<ListItem button to={path} component={Link} selected={!!match}>
          <ListItemIcon children={
            (typeof Icon==='object'&&typeof Icon.$$typeof=='symbol')?<Icon/>:Icon
          }/>
          <ListItemText primary={label} />
      </ListItem>);
    };
    return (<div className={classes.root}>
        <AppBar color="inherit" variant="outlined" position="fixed" className={classes.appBar}>
          <Toolbar variant="dense" className={classes.toolbar}>
            <IconButton onClick={()=>setOpen(on=>!on)} className={classes.drawerButton}>
              <MenuIcon />
            </IconButton>
            <span className="flex-grow" />
            <IconButton> <Notifications /> </IconButton>
            <Button aria-controls="simple-menu" aria-haspopup="true">
              <span>Alejandro Reyes</span>&nbsp;
              <Avatar children="A" />
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
            open={open}
            className={classes.drawer}
            onClose={()=>setOpen(false)}
            ModalProps={{ keepMounted: true, }}
            variant={config.isDesktop?'permanent':'temporary'}>
            <img src={Logo} alt="Logo" style={{maxWidth:'90%',margin:'10px auto'}} />
            <List children={config.routes.map(route=><Go {...route} key={route.path} />)} />
        </Drawer>
        <main className={classes.content} children={children} />
    </div>);
}
