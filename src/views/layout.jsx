import React from 'react';
import clsx from 'clsx';
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
import { Menu as MenuIcon, } from '@material-ui/icons';
import { Link as _Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import { api, useAuth } from '~/ServerLess'
import middlewares from '~/config/middlewares';

import Invitar from '~/components/Invitar';
import ButtonProfile from '~/components/ButtonProfile';

const useStyles = makeStyles((theme) => ({
  '@keyframes pulsate': { '0%': { opacity: .4, }, '50%': { opacity: 1, }, '100%': { opacity: .4, }, },
  root:{
    '&:not(.fullPage)':{ display:'flex', },
    '&.loading':{
      height:'100vh',
      background:'url(/images/brand.svg) no-repeat center /200px',
      animation:'$pulsate 2s infinite',
      '& *':{ display:'none' },
    },
  },

  appBar: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 'auto',
      display:'flex',
      borderRadius:10,
      top:10, right:40,
      boxShadow:'0px 3px 3px 0px #00000021',
      maxWidth: `calc(100% - ${layout.drawerWidth+80}px )`,
    },
  },
  toolbar:{
    display:'flex',
    justifyContent:'flex-end',
    '& .flex-grow':{ flexGrow:1, },
    '& .brand':{
      maxHeight:20,
      [theme.breakpoints.up("md")]:{ display:'none', },
    },
    '& > *':{ margin:'0 10px 0 0', },
    '& > *:last-child':{ marginRight:0, },
    '& .MuiAvatar-root':{ marginLeft:10, width:30, height:30, },
  },
  drawer: {
    flexShrink: 0,
    width: layout.drawerWidth,
    position:'relative',
    '& .Mui-selected':{
      backgroundColor:theme.palette.secondary.main,
    },
    '& .MuiDrawer-paper':{
      '& .MuiListItemIcon-root':{
        color:'white',
      },
      color:'white',
      width: layout.drawerWidth,
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
    paddingTop:theme.mixins.toolbar.minHeight+30,
    [theme.breakpoints.down('sm')]:{
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
}));


export const layout = {
  drawerWidth:250,
  isDesktop:window.innerWidth>959,
  routes:[],
};



export default function Layout({ fullPage=false, middleware=true, children }){
  const classes = useStyles();
  const [ loading, setLoading ] = React.useState(true);
  const [ drawerOpen, setDrawerOpen ] = React.useState(layout.isDesktop);
  const context = {
    auth:useAuth(),
    location:useLocation(),
    history:useHistory(),
    redirect:path=>({ $redirect:path, }),
  };
  const isValidAccess = (arr=[], isLink=false)=>{
    arr = (typeof arr==='function')?[arr]:(Array.isArray(arr)?arr:[()=>true]);
    for (const fn of arr) {
      const executor = (typeof fn==='string' && arr in middlewares)?middlewares[fn]:fn;
      const allow = executor(context);
      if(!allow) return false;
      if(allow && typeof allow ==='object' && '$redirect' in allow)
        return isLink?false:allow;
    }
    return true;
  };
  const Link = React.memo(({ path, label, icon, show=true, })=>{
    const match = useRouteMatch({ path, exact:true, }), Icon=icon;
    return isValidAccess(show, true)&&
    (<ListItem button to={path} component={_Link} selected={!!match}>
      <ListItemIcon children={
        (typeof Icon==='object'&&typeof Icon.$$typeof=='symbol')?<Icon/>:(
          typeof Icon==='string'?<img src={Icon} alt={Icon} />:Icon
        )}/>
      <ListItemText primary={label} />
    </ListItem>);
  });
  const Page = React.memo((props)=>(<div
    className={clsx({ [classes.root]:true, loading, fullPage })} {...props} />),[
      loading,
      fullPage,
    ]);



  if(context.auth!==null){
    const allow = isValidAccess(middleware);
    if(!allow) return <div children="403 | Forbidden" />;
    else if(typeof allow ==='object' && '$redirect' in allow)
      window.location.replace(allow.$redirect);
    else if(context.auth?.locked){
      api('auth/signout', ()=>window.location.href='/signin')
        .catch((error)=>console.log(error, alert("Ups! Contacta con el administrador del sitio.")))
    }
    else if(loading) setLoading(false);
  }

  return (<Page children={fullPage?children:(<>
    <AppBar color="inherit" variant="outlined" position="fixed" className={classes.appBar}>
      <Toolbar variant="dense" className={classes.toolbar}>
        <IconButton onClick={()=>setDrawerOpen(on=>!on)} className={classes.drawerButton}>
          <MenuIcon />
        </IconButton>
        <img alt="" src="/images/brand.svg" className="brand" />
        <span className="flex-grow" />
        { context.auth && <Invitar {...context} /> }
        { context.auth && <ButtonProfile {...context} />}
      </Toolbar>
    </AppBar>
    <Drawer
      open={drawerOpen}
      className={classes.drawer}
      onClose={()=>setDrawerOpen(false)}
      ModalProps={{ keepMounted: true, }}
      variant={layout.isDesktop?'permanent':'temporary'}>
      <img src="/images/brand.svg" alt="Logo" style={{maxWidth:'90%',margin:'10px auto'}} />
      <List children={layout.routes.map(route=><Link {...route} key={route.path} />)} />
    </Drawer>
    <main className={classes.content} children={children} />
  </>)} />)
}



