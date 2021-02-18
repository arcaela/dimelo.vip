import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../styles/SignUp';
import wizard from '../components/wizard';
import DialogTermsConditions from '../components/DialogTermsConditions';
import { Button, CircularProgress, Toolbar, Typography, } from '@material-ui/core';
const ucfirst=(str)=>str.toLowerCase().replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g,($1)=>$1.toUpperCase());


export default function SignUp({ useInput }){
  const {
    step,
    inputs,
    loading,
    prevStep,
    InputField,
    StepComponent,
  } = useInput;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  return (<>
      <DialogTermsConditions state={[open, setOpen]} />
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography color='primary' variant='h3' children={inputs.name.value?`¡Hola ${ucfirst(inputs.name.value)}!`:'Regístrate ahora'} />
          <Typography color='primary' variant='subtitle2' children={inputs.name.value?'Por favor continúa con el registro...':'Completa los campos a continuación.'} />
        </div>
        <div className={classes.body}>
          <StepComponent step={1}>
            <InputField name="name" label="Nombres" />
            <InputField name="lastname" label="Apellidos" />
            <InputField name="dni" label="Cédula" type="number" />
            <InputField name="birthday" label="Edad" type="number" />
            <InputField name="movil" label="Número celular: " type="number" />
            <InputField name="phone" label="Teléfono fijo: " type="number" />
          </StepComponent>
          <StepComponent step={2}>
            <InputField name="username" label="Crea un nombre de usuario" />
            <InputField name="email" label="Dirección de correo electrónico" helperText="" type="email" />
            <InputField name="password" label="Crea una contraseña" placeholder="**********" type="password" />
            <InputField name="repassword" label="Confirma tu contraseña" placeholder="**********" type="password" />
          </StepComponent>
        </div>
        <div className={classes.actions}>
          {step===1&&(<div className='terms'>
            Al continuar aceptas nuestras{' '}
            <strong href='#' onClick={() => setOpen(!open)}>políticas de uso de datos y privacidad.</strong>
          </div>)}
          {step>1 && (<Button variant='contained' onClick={()=>prevStep()} children="Volver" />)}
          <Button variant='contained' color={step<5?'primary':'secondary'} disabled={loading}
            onClick={()=>wizard(useInput)}
            children={loading?<CircularProgress style={{ color: 'white' }} size={20} />:(
              step<5?'Continuar':'Registrate'
            )}/>
        </div>
        <Toolbar className={classes.Toolbar}>
          ¿Ya tienes una cuenta? &nbsp; 
          <Typography> <Link to="/login">Ingresa</Link> </Typography>
        </Toolbar>
      </div>
  </>);
}