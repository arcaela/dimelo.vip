import React from 'react'
import Layout from '../layout';
import useStyles from './SignIn';
import { api } from '~/ServerLess';
import { Link } from 'react-router-dom';
import useForm from '~/views/SignUp/components/useForm';
import { Button, CircularProgress, Grid, Toolbar, Typography, } from '@material-ui/core';



export default function SignIn(req){
    const classes = useStyles();
    const {
        inputs,
        loading,
        setInput,
        setLoading,
        InputField,
    } = useForm();
    return (<Layout fullPage middleware={['guest']}>
        <Grid container className={classes.$root}>
            <Grid item xs={12} md={6} className={classes.gridLeft}>
                <Typography variant="h3">¡Bienvenido!</Typography>
                <Typography variant="subtitle2">Por favor, ingrese a su cuenta...</Typography>
            </Grid>
            <Grid item xs={12} md={6} className={classes.gridRight}>
                <div className={classes.root}>
                    <div className={classes.header}>
                        <Typography color='primary' variant='h3' children={'Ingresa a tu cuenta'} />
                        <Typography color='primary' variant='subtitle2' children='Completa los campos a continuación...' />
                    </div>
                    <div className={classes.body}>
                        <InputField FormControlProps={{fullWidth:true}} bind="email" label="Dirección de correo electrónico" helperText="" type="email" />
                        <InputField FormControlProps={{fullWidth:true}} bind="password" label="Crea una contraseña" placeholder="**********" type="password" />
                        <Button variant='contained' color='primary'
                            fullWidth
                            disabled={loading}
                            onClick={async ()=>{
                                await setLoading(true);
                                await api('auth/signin', {
                                    remember:true,
                                    email:inputs.email.value,
                                    password:inputs.password.value,
                                }).then(client=>window.location.replace(client.patron?'/posts':'/test'))
                                .catch((error)=>setInput('email', {error:error.message}))
                                .finally(async ()=>await setLoading(false))
                            }}
                            children={loading?<CircularProgress style={{ color: 'white' }} size={20} />:"Ingresar"}/>
                    </div>
                    <Toolbar className={classes.Toolbar}>
                        ¿No tienes una cuenta aún? &nbsp; 
                        <Typography> <Link to="/signup">Registrate</Link> </Typography>
                    </Toolbar>
                </div>
            </Grid>
        </Grid>
    </Layout>)
}