import React from 'react';
import { Button, CircularProgress, Toolbar, Typography, } from '@material-ui/core';
import DialogTermsConditions from './DialogTermsConditions';
import { useStylesSingUp } from '../styles/signup.styles';
import { Link } from 'react-router-dom';
import Wizard from './Wizard';

const ucfirst = (str) =>
  str
    .toLowerCase()
    .replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, ($1) =>
      $1.toUpperCase()
    );



export default function SignUp({ useInput, ...req }) {
  const classes = useStylesSingUp();

  const [open, setOpen] = React.useState(false);

  const { step, inputs, loading, InputField, StepComponent } = useInput;

  return (
    <div className={classes.root}>
      <DialogTermsConditions state={[open, setOpen]} />

      <div className={classes.header}>
        <Typography color='primary' variant='h3'>
          {inputs.name.value
            ? `¡Hola ${ucfirst(inputs.name.value)}!`
            : 'Regístrate ahora'}
        </Typography>
        <Typography color='primary' variant='subtitle2'>
          {inputs.name.value
            ? 'Por favor continúa con el registro...'
            : 'Completa los campos a continuación.'}
        </Typography>
      </div>
      <div className={classes.body}>
        <StepComponent step={1}>
          <InputField
            name='cedula'
            label='Por favor indica tu cédula'
            helperText='Esta será utilizada para verificar tu identidad.'
            variant='outlined'
            inputProps={{ style: { textAlign: 'center' } }}
            type='number'
          />
        </StepComponent>
        <StepComponent step={2}>
          <InputField
            name='username'
            label='Crea un nombre de usuario'
            helperText='Puedes utilizar letras, números, guiones y puntos. (a-z A-Z 0-9 . - _)'
          />
          <InputField
            name='password'
            label='Crea una contraseña'
            placeholder='**********'
            type='password'
          />
          <InputField
            name='email'
            label='Dirección de correo electrónico'
            helperText='Indicanos tu dirección de correo electrónico.'
            type='email'
          />
          <InputField name='age' label='¿Cuál es tu edad?' type='number' />
        </StepComponent>
      </div>
      <div className={classes.actions}>
        {step === 1 && (
          <div className='terms'>
            Al continuar aceptas nuestras{' '}
            <strong href='#' onClick={() => setOpen(!open)}>
              políticas de uso de datos y privacidad.
            </strong>
          </div>
        )}
        <Button
          color='primary'
          variant='contained'
          disabled={loading}
          onClick={() => Wizard(useInput)}
        >
          {loading ? (
            <CircularProgress size={20} />
          ) : (
            <Typography color='inherit' component='span'>
              Continuar
            </Typography>
          )}
        </Button>
      </div>
      {true && (
        <Toolbar className={classes.Toolbar}>
          ¿Ya tienes una cuenta? &nbsp; 
          <Typography>
            <Link to="/login">Ingresa</Link>
          </Typography>
        </Toolbar>
      )}
    </div>
  );
}
