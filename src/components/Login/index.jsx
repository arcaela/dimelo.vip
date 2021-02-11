import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import api from '../../ServerLess/api';
import { useStylesSingUp } from '../../views/Auth/styles/signup.styles';
import useInput  from '../../views/Auth/SignUp/useInput'
import { Link, useHistory } from 'react-router-dom';
import { Toolbar, Typography } from '@material-ui/core';

const style = makeStyles( theme =>({
  container:{
    '& .MuiFormControl-root':{
      width: '100% !important',
      maxWidth: '100% !important'
    }
  }
}))

export default function Login() {
  
  const full = style()

  const loginStyle = useStylesSingUp();

  const router = useHistory()


  const {
    InputField,
    hasErrors,
    inputs:{
        email,
        password,
        remember
    },
    setInputs,
    StepComponent,
    loading, 
    setLoading 
  } = useInput()

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if(hasErrors('email', 'password')) return;
    try {

        setLoading(true);
        
        await api('auth/signin', { 
          email: email.value, 
          password: password.value, 
          remember: true
        })
        setInputs({
          email:{
            value: '',
            error: null
          },
          password:{
            value: '',
            error: null
          }
        })

        router.push('/news');
        
    } catch (e) {

      console.log(e);

    } finally { setLoading(false); }
  };

  return (
    <div className={loginStyle.container}>
      <h2 className={loginStyle.title}>Iniciar sesión</h2>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <StepComponent className={full.container} style={{
          width: '100%'
        }} step={1}>
          <InputField
            style={{
              width: '100%',
              maxWidth: '100% !important'
            }}
            name='email'
            label='Correo'
            helperText=''
            variant='outlined'
            inputProps={{ style: { textAlign: 'center' } }}
            type='email'
          />
          <InputField
            style={{
              width: '100%',
              maxWidth: '100% !important'
            }}
            name='password'
            label='Contraseña'
            helperText=''
            variant='outlined'
            inputProps={{ style: { textAlign: 'center' } }}
            type='password'
          />
        </StepComponent>

        <FormControl
        
        style={{
          width: '100%',
          maxWidth: '100% !important'
        }}

        className={loginStyle.formControl}>
          <Button 
          style={{
            color: '#fff'
          }}
          color='secondary'
          variant='contained'
          size='large'
          fullWidth
          disableElevation
          className={loginStyle.button} 
          type='submit'>
            {loading ? <CircularProgress color='secondary' /> : 'Ingresar'}
          </Button>
        </FormControl>
      </form>
      <Toolbar style={{
        justifyContent: 'center'
      }} className={loginStyle.Toolbar}>
          ¿Ya tienes una cuenta? &nbsp; 
          <Typography>
            <Link to="/">Ingresa</Link>
          </Typography>
      </Toolbar>
    </div>
  );
}
