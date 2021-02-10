import React from 'react';
import FormControl from '@material-ui/core/FormControl';

import Button from '@material-ui/core/Button';


import CircularProgress from '@material-ui/core/CircularProgress';

import api from '../../ServerLess/api';

import { useStylesSingUp } from '../../views/Auth/styles/signup.styles';
import useInput  from '../../views/Auth/SignUp/useInput'
import { useHistory } from 'react-router-dom';



export default function Login() {
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
        await setLoading(true);
        
        const user = await api('auth/signin', { 
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
        <StepComponent step={1}>
          <InputField
            name='email'
            label='Correo'
            helperText=''
            variant='outlined'
            inputProps={{ style: { textAlign: 'center' } }}
            type='email'
          />
          <InputField
            name='password'
            label='Contraseña'
            helperText=''
            variant='outlined'
            inputProps={{ style: { textAlign: 'center' } }}
            type='password'
          />
        </StepComponent>

{/* 
        <FormControl className={loginStyle.formControl}>
          <CssTextField
            value={values.password}
            onChange={(e) => handlerChange(e)}
            id='password'
            name='password'
            variant='outlined'
            type='password'
            error={password}
            helperText={password ? 'Campo Obligatorio' : ''}
            label='Contraseña'
          />
        </FormControl>

        <FormControl className={`${loginStyle.formControl} ${loginStyle.ps}`}>
          <FormControlLabel
            control={
              <Checkbox
                onClick={(e) => handlerRemember(e)}
                name='remenber'
                value={values.remenber}
              />
            }
            label='Recordarme'
          /> */}
          {/* <span className={loginStyle.p}>Olvide mi contraseña</span> */}
        {/* </FormControl> */}
        <FormControl className={loginStyle.formControl}>
          <Button className={loginStyle.button} type='submit'>
            {loading ? <CircularProgress color='secondary' /> : 'Ingresar'}
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
