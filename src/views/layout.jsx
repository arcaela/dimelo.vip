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
import Invitar from '~/components/Invitar';



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
  const [ open, setOpen ] = React.useState(layout.isDesktop);
  const context = {
    auth:useAuth(),
    location:useLocation(),
    history:useHistory(),
    redirect:(redirect)=>(window.location.replace(redirect) && false),
  };
  const loading = context.auth===null;
  const parse = (_,__=false)=>((typeof _ === 'function')?_({...context}):(
    (typeof _ ==='string'&&_ in middlewares&&!!__)?parse(middlewares[_])
    :((Array.isArray(_))?_.map(c=>parse(c,true)):!!_)
  ));
  const Link = ({ path, label, icon, show=true, })=>{
    const match = useRouteMatch({ path, exact:true, }), Icon=icon;
    return parse(show)&&
    (<ListItem button to={path} component={_Link} selected={!!match}>
      <ListItemIcon children={
        (typeof Icon==='object'&&typeof Icon.$$typeof=='symbol')?<Icon/>:(
          typeof Icon==='string'?<img src={Icon} alt={Icon} />:Icon
        )
      }/>
      <ListItemText primary={label} />
    </ListItem>);
  };
  const Page = (props)=><div className={clsx({[classes.root]:true, loading, fullPage})} {...props} />;
  if(!loading && !parse(middleware)) return <div children="403 | Forbidden" />;
  else if(!loading && fullPage) return <Page children={children} />
  return (<Page>
    <AppBar color="inherit" variant="outlined" position="fixed" className={classes.appBar}>
       <Toolbar variant="dense" className={classes.toolbar}>
         <IconButton onClick={()=>setOpen(on=>!on)} className={classes.drawerButton}>
           <MenuIcon />
         </IconButton>
         <img alt="" src="/images/brand.svg" className="brand" />
         <span className="flex-grow" />
         <Invitar />
         <ButtonProfile />
       </Toolbar>
     </AppBar>
    <Drawer
         open={open}
         className={classes.drawer}
         onClose={()=>setOpen(false)}
         ModalProps={{ keepMounted: true, }}
         variant={layout.isDesktop?'permanent':'temporary'}>
         <img src="/images/brand.svg" alt="Logo" style={{maxWidth:'90%',margin:'10px auto'}} />
         <List children={layout.routes.map(route=><Link {...route} key={route.path} />)} />
     </Drawer>
     <main className={classes.content} children={children} />
  </Page>);
}



