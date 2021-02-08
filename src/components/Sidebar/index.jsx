import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Logo from '../Logo';
import List from '@material-ui/core/List';
import { useStyles } from './sidebar.styles';
import NavItem from '../../components/NavItem';
import Hidden from '@material-ui/core/Hidden';
import { useHistory } from "react-router-dom";



export default function Sidebar( { path, mobileOpen, setMobileOpen } ) {

    const classes = useStyles();

    let history = useHistory();

    let container;

    const hadlerNavigation = (path) => {
      history.push(path)
    }

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    }

    React.useEffect(() => {
      container = window !== undefined ? () => window().document.body : undefined;
    }, [])

    const Navigation = () => {
      return (
        <div>      
        <Logo />
        <List>
          <NavItem 
            onClick={ ()=> hadlerNavigation('/news') } 
            active={ path === '/news' } 
            text='Noticia' 
          />
          <NavItem 
            onClick={ ()=> hadlerNavigation('/red') } 
            active={ path === '/red' } 
            text="Red" 
          />
          <NavItem
            onClick={ ()=> hadlerNavigation('/test') } 
            active={ path === '/test'  } 
            text='Test de personalidad' 
          />
        </List>
      </div>
      )
    }

    return (

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <Navigation />
          </Drawer>
        </Hidden>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Navigation />
          </Drawer>
        </Hidden>
      </nav>

    )
}
