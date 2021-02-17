import React from 'react'
import Layout from '../layout';
import SignUp from './Forms/SignUp';
import SignUpMore from './Forms/SignUpMore';
import useInput from '../../ServerLess/Hooks/useInput';
import useStyles from './styles/basic';
import { Grid, Hidden, Typography, } from '@material-ui/core';


export default function Auth(req){
    const classes = useStyles();
    const { step } = useInput();
    return (<Layout fullPage middleware={['guest']}>
        {step > 2 && <SignUpMore req={req} />}
        {step < 3 && (<Grid container className={classes.root}>
            <Hidden smDown>
                <Grid item xs={12} md={6} className={classes.gridLeft}>
                    <Typography variant="h3">Bienvenido</Typography>
                    <Typography variant="subtitle2">
                        ¡Bienvenido! Por favor, {req.path==='/sigin' ? 'ingrese a su cuenta.' : 'completa el registro.'}
                    </Typography>
                </Grid>
            </Hidden>
            <Grid item xs={12} md={6} className={classes.gridRight}>
                <SignUp {...req} />
            </Grid>
        </Grid>)}
    </Layout>)
}