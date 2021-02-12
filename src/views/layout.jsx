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
  Toolbar
} from '@material-ui/core';
import {
  Notifications,
  Menu as MenuIcon,
} from '@material-ui/icons';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import Logo from '../images/brand.svg'
import ButtonProfile from '../components/ButtonProfile';
import useAuth from '../ServerLess/Hooks/useAuth';



const useStyles = makeStyles((theme) => ({
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

export default function Layout({ fullPage=false, children }){
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
    const context = {
      auth:useAuth(),
      location:useLocation(),
    };
    return fullPage?children:(<div>
      <AppBar color="inherit" variant="outlined" position="fixed" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <IconButton onClick={()=>setOpen(on=>!on)} className={classes.drawerButton}>
            <MenuIcon />
          </IconButton>
          <span className="flex-grow" />
          <IconButton> <Notifications /> </IconButton>
          <ButtonProfile />
        </Toolbar>
      </AppBar>
      <Drawer
          open={open}
          className={classes.drawer}
          onClose={()=>setOpen(false)}
          ModalProps={{ keepMounted: true, }}
          variant={config.isDesktop?'permanent':'temporary'}>
          <img src={Logo} alt="Logo" style={{maxWidth:'90%',margin:'10px auto'}} />
          <List children={config.routes.filter(route=>{
            return route.show?(
              typeof route.show==='function'?route.show(context):true
            ):route.show!==false;
          }).map(route=><Go {...route} key={route.path} />)} />
      </Drawer>
      <main className={classes.content} children={children} />
  </div>);
}
