import React from 'react'
import Sidebar from '../Sidebar';
import { useStyles } from '../Sidebar/sidebar.styles';

import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

export default function Layout( { children,  path} ) {

    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
  

    return (
        <div className={classes.root}>
            <Sidebar 
            mobileOpen={ mobileOpen }
            setMobileOpen={ setMobileOpen }
            path={ path } />
            <main className={classes.content}>
            <div className={classes.toolbar} />
            <AppBar 
            color="default"
            position="fixed" 
            className={classes.appBar}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                </Toolbar>
            </AppBar>
                {children}
            </main>
      </div>
    )
}
