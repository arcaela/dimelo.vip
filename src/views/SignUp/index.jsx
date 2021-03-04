import React from 'react'
import Layout from '../layout';
import SignUp from './Forms/SignUp';
import SignUpMore from './Forms/SignUpMore';
import useForm from './components/useForm';
import useStyles from './styles';
import { Grid, Typography, } from '@material-ui/core';


export default function Auth({ ...req }){
    const classes = useStyles();
    const _useForm = useForm();
    const { step, inputs } = _useForm;
    inputs.leader.value=req.params.code || null;
    return (<Layout fullPage middleware={['guest']}>
        {step > 2 && <SignUpMore useForm={_useForm} {...req} />}
        {step <=2 && (<Grid container className={classes.root}>
            <Grid item xs={12} md={6} className={classes.gridLeft}>
                <Typography variant="h3">¡Bienvenido!</Typography>
                <Typography variant="subtitle2">Por favor, completa el registro...</Typography>
            </Grid>
            <Grid item xs={12} md={6} className={classes.gridRight} children={<SignUp useForm={_useForm} {...req} />} />
        </Grid>)}
    </Layout>)
}