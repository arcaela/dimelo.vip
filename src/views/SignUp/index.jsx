import React from 'react'
import Layout from '../layout';
import SignUp from './Forms/SignUp';
import SignUpMore from './Forms/SignUpMore';
import useInput from '../../ServerLess/Hooks/useInput';
import useStyles from './styles';
import { Grid, Typography, } from '@material-ui/core';


export default function Auth({ ...req }){
    const classes = useStyles();
    req.useInput = useInput();
    const { step, inputs } = req.useInput;
    if(req.params.referer){
        const cedula = parseInt(atob(req.params.referer));
        inputs.voting_leader.value=!isNaN(cedula)?cedula:null;
    }
    return (<Layout fullPage middleware={['guest']}>
        {step > 2 && <SignUpMore {...req} />}
        {step < 3 && (<Grid container className={classes.root}>
            <Grid item xs={12} md={6} className={classes.gridLeft}>
                <Typography variant="h3">¡Bienvenido!</Typography>
                <Typography variant="subtitle2">Por favor, completa el registro...</Typography>
            </Grid>
            <Grid item xs={12} md={6} className={classes.gridRight} children={<SignUp {...req} />} />
        </Grid>)}
    </Layout>)
}