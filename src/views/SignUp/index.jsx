import React from 'react'
import Layout from '../layout';
import SignUp from './Forms/SignUp';
import SignUpMore from './Forms/SignUpMore';
import useForm from './components/useForm';
import useStyles from './styles';
import { Grid, Typography, } from '@material-ui/core';
import Users from '~/ServerLess/collections/Users';

export default function Auth({ ...req }){
    const classes = useStyles();
    const _useForm = useForm();
    const { step, inputs } = _useForm;
    
    req.params.code = atob(req.params.code||'')
    if( req.params.code?.length ){
        Users.where('cedula', '==', req.params.code).limit(1).get()
        .then(snap=>(inputs.leader.value=!snap.empty && req.params.code));
    } else inputs.leader.value=null;

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