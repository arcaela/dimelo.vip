import { Grid, Hidden, Typography } from '@material-ui/core';
import React from 'react'
import Login from './Form';
import { loginStyles } from './Form/login.styles';
import useStylesIndex from '../SignUp/styles';
import useStylesSingUp from '../SignUp/styles/SignUp';
import Layout from '../layout';
export default function LoginPage() {
    const classes = useStylesIndex();
    const loginStyle = loginStyles(); 
    const body  = useStylesSingUp();
    return (<Layout fullPage middleware={['guest']}>
        <Grid container className={classes.root}>
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
    </Layout>)
}
