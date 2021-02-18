import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import api from '~/ServerLess/api';
import useStylesSingUp from '~/views/SignUp/styles/SignUp';
import useInput  from '~/ServerLess/Hooks/useInput'
import { Link } from 'react-router-dom';
import { Toolbar, Typography } from '@material-ui/core';

const style = makeStyles( () =>({
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
  const {
    InputField,
    hasErrors,
    inputs:{
        email,
        password
    },
    setInputs,
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
        window.location.replace('/test');
    } catch (e) {

      console.log(e);

    } finally { setLoading(false); }
  };

  return (
    <div className={loginStyle.container} style={{
      display:'flex',
      height:'100%',
      flexDirection:'column',
    }}>
      <h2 className={loginStyle.title} style={{marginTop:'auto'}}>Iniciar sesión</h2>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <div role="tabpanel" className={full.container} style={{
          width: '100%'
        }} >
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
        </div>

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
        justifyContent: 'center',
        marginTop:'auto',
      }} className={loginStyle.Toolbar}>
          ¿No tienes una cuenta? &nbsp; 
          <Typography>
            <Link to="/signup">Regístrate</Link>
          </Typography>
      </Toolbar>
    </div>
  );
}
