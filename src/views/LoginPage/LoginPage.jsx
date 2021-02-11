import { Grid, Hidden, Typography } from '@material-ui/core';
import React from 'react'
import Login from '../../components/Login';
import { loginStyles } from '../../components/Login/login.styles';
import { useStylesIndex } from '../Auth/styles/index.styles';
import { useStylesSingUp } from '../Auth/styles/signup.styles';


export default function LoginPage() {

    const classes = useStylesIndex();

    const loginStyle = loginStyles(); 

    const body  = useStylesSingUp();

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
            <Grid item xs={12} md={6} style={{
                margin: 'unset'
            }} className={`${ body.body } ${ classes.gridRight }  ${ loginStyle.root }`}>
                <Login />
            </Grid>
        </Grid>
    )
}
