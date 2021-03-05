import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../styles/SignUp';
import Submit from '../components/Submit';
import GoogleAddress from '../components/GoogleAddress';
import { KeyboardDatePicker } from '@material-ui/pickers';
import DialogTermsConditions from '../components/DialogTermsConditions';
import { Button, CircularProgress, FormControl, FormHelperText, Grid, Toolbar, Typography, } from '@material-ui/core';


const ucfirst=(str)=>str.toLowerCase().replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g,($1)=>$1.toUpperCase());
export default function SignUp({ useForm }){
  const {
    step,
    inputs,
    loading,
    prevStep,
    InputField,
    StepComponent,
  } = useForm;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [selectedDate, _setDate] = React.useState( inputs.birthday.date || new Date('01/01/2003') );
  const handleDateChange = async date=>{
    inputs.birthday.date=date;
    inputs.birthday.value=date.toLocaleDateString('es-ES');
    await _setDate(date)
  };
  return (<>
      <DialogTermsConditions open={open} setOpen={setOpen} />
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography color='primary' variant='h3' children={inputs.fullname.value?`¡Hola ${ucfirst(inputs.fullname.value)}!`:'Regístrate ahora'} />
          <Typography color='primary' variant='subtitle2' children={inputs.fullname.value?'Por favor continúa con el registro...':'Completa los campos a continuación.'} />
        </div>
        <div className={classes.body}>
          <StepComponent step={1}>
            <InputField bind="fullname" label="Nombres y Apellidos" />
            <InputField bind="cedula" label="Cédula" type="number" />
            <Grid container justify="space-between" spacing={1}>
              <Grid item xs={12} sm={4}>
                <FormControl error={!!inputs.birthday.error} variant="outlined">
                  <FormHelperText>{ inputs.birthday.error || "Fecha de nacimiento" }</FormHelperText>
                  <KeyboardDatePicker
                    required
                    openTo="year"
                    disableFuture
                    format="dd/MM/yyyy"
                    value={selectedDate}
                    inputVariant="outlined"
                    placeholder="10/10/2018"
                    views={['year','month', 'date']}
                    minDate={new Date('01/01/1950')}
                    maxDate={new Date('01/01/2005')}
                    invalidDateMessage="Fecha incorrecta"
                    KeyboardButtonProps={{color:'inherit'}}
                    onError={err=>inputs.birthday.error=err}
                    onChange={date => handleDateChange(date)}
                    onAccept={()=>inputs.birthday.error=null}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={8}>
                <GoogleAddress />
              </Grid>
            </Grid>
          </StepComponent>
          <StepComponent step={2}>
            <InputField bind="email" label="¿Cuál es tu e-mail?" type="email" />
            <InputField bind="password" label="Crea una contraseña" placeholder="**********" type="password" />
            <InputField bind="movil" label="Número celular: " type="number" />
            <InputField bind="phone" label="Teléfono fijo: " type="number" />
          </StepComponent>
        </div>
        <div className={classes.actions}>
          {step===1&&(<div className='terms'>
            Al continuar aceptas nuestras{' '}
            <strong href='#' onClick={() => setOpen(!open)}>políticas de uso de datos y privacidad.</strong>
          </div>)}
          {step>1 && (<Button variant='contained' onClick={()=>prevStep()} children="Volver" />)}
          <Button variant='contained' color={step<5?'primary':'secondary'} disabled={loading}
            onClick={()=>Submit(useForm)}
            children={loading?<CircularProgress style={{ color: 'white' }} size={20} />:(
              step<5?'Continuar':'Registrate'
            )}/>
        </div>
        <Toolbar className={classes.Toolbar}>
          ¿Ya tienes una cuenta? &nbsp; 
          <Typography> <Link to="/signin">Ingresa</Link> </Typography>
        </Toolbar>
      </div>
  </>);
}