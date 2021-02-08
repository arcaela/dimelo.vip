import { Grid, Hidden, Typography } from '@material-ui/core';
import React from 'react'
import Login from '../../components/Login';
import { loginStyles } from '../../components/Login/login.styles';
import { useStylesIndex } from '../Auth/styles/index.styles';


export default function LoginPage() {

    const classes = useStylesIndex();

    const loginStyle = loginStyles(); 

    return (
        <Grid container className={ classes.root }>
            <Hidden smDown>
                <Grid item xs={12} md={6} className={classes.gridLeft}>
                    <Typography variant="h3">Bienvenido</Typography>
                    <Typography variant="subtitle2">
                        ¡Bienvenido! Por favor, ingrese a su cuenta.
                    </Typography>
                </Grid>
            </Hidden>
            <Grid item xs={12} md={6} className={` ${ classes.gridRight }  ${ loginStyle.root }`}>
                <Login />
            </Grid>
        </Grid>
    )
}
