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
import {
  //Notifications,
  Menu as MenuIcon,
} from '@material-ui/icons';
import { Link as _Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';


import useAuth from '~/ServerLess/Hooks/useAuth';
import middlewares from '~/config/middlewares';
import ButtonProfile from '~/components/ButtonProfile';
import api from '~/ServerLess/api';
// import Invitar from '~/components/Inivitar';



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
    paddingTop:theme.mixins.toolbar.minHeight+10,
  },
}));



export const layout = {
  drawerWidth:250,
  isDesktop:window.innerWidth>959,
  routes:[],
};



export default function Layout({ fullPage=false, middleware=true, children }){
  const classes = useStyles();
  const [ drawerOpen, setDrawerOpen ] = React.useState(layout.isDesktop);
  const [ block, setBlock ] = React.useState(false);
  const context = {
    auth:useAuth(),
    location:useLocation(),
    history:useHistory(),
    redirect:(redirect)=>(window.location.replace(redirect) && false),
  };
  const loading = (context.auth===null && !block);

  const check = (_,__=false)=>((typeof _ === 'function')?_({...context}):(
    (typeof _ ==='string'&&_ in middlewares&&!!__)?check(middlewares[_])
    :((Array.isArray(_))?_.map(c=>check(c,true)):!!_)
  ));
  const Link = ({ path, label, icon, show=true, })=>{
    const match = useRouteMatch({ path, exact:true, }), Icon=icon;
    return check(show)&&
    (<ListItem button to={path} component={_Link} selected={!!match}>
      <ListItemIcon children={
        (typeof Icon==='object'&&typeof Icon.$$typeof=='symbol')?<Icon/>:(
          typeof Icon==='string'?<img src={Icon} alt={Icon} />:Icon
          )
        }/>
      <ListItemText primary={label} />
    </ListItem>);
  };

  if( context.auth?.leader==='[locked]' && !block){
    setBlock(true);
    api('auth/signout', ()=>window.location.href='/signin')
      .catch((error)=>console.log(error, alert("Ups! Contacta con el administrador del sitio.")))
    return null;
  }

  const Page = (props)=><div className={clsx({[classes.root]:true, loading, fullPage})} {...props} />;
  if(!loading && !check(middleware)) return <div children="403 | Forbidden" />;
  else if(!loading && fullPage) return <Page children={children} />
  return (<Page>
    <AppBar color="inherit" variant="outlined" position="fixed" className={classes.appBar}>
       <Toolbar variant="dense" className={classes.toolbar}>
         <IconButton onClick={()=>setDrawerOpen(on=>!on)} className={classes.drawerButton}>
           <MenuIcon />
         </IconButton>
         <img alt="" src="/images/brand.svg" className="brand" />
         <span className="flex-grow" />
         {/* <Invitar /> */}
         { context.auth && <ButtonProfile />}
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
  </Page>);
}



