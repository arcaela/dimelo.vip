import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../styles/SignUp';
import Submit from '../components/Submit';

import esLocale from "date-fns/locale/es";
import DateFnsUtils from '@date-io/date-fns';
import AutoMaps from '../components/AutoMaps';
import DialogTermsConditions from '../components/DialogTermsConditions';
import { Button, CircularProgress, FormControl, FormHelperText, Grid, Toolbar, Typography, } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';


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
  const [date, _setDate] = React.useState( new Date(inputs.birthday.value || '01-01-2011') );
  const setDate = (date)=>_setDate((inputs.birthday.value=date.toLocaleDateString('es-ES')) && date);

  return (<>
      <DialogTermsConditions open={open} setOpen={setOpen} />
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography color='primary' variant='h3' children={inputs('fullname.value')?`¡Hola ${ucfirst(inputs('fullname.value'))}!`:'Regístrate ahora'} />
          <Typography color='primary' variant='subtitle2' children={inputs('fullname.value')?'Por favor continúa con el registro...':'Completa los campos a continuación.'} />
        </div>
        <div className={classes.body}>
          <StepComponent step={1}>
            <InputField name="fullname" label="Nombres y Apellidos" />
            <InputField name="dni" label="Cédula" type="number" />
            <Grid container justify="space-between" spacing={1}>
              <Grid item xs={12} sm={4}>
                <FormControl error={!!inputs.birthday.error}>
                  <FormHelperText>{ inputs.birthday.error || "Fecha de nacimiento" }</FormHelperText>
                  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                    <DatePicker
                      error={!!inputs.birthday.error}
                      openTo="year"
                      value={date}
                      minDate={ new Date('01-01-1941') }
                      maxDate={ new Date('01-01-2011') }
                      disableFuture
                      onChange={setDate}
                      format="dd/MM/yyyy"
                      inputVariant="outlined"
                      views={["year", "month", "date"]}
                    />
                  </MuiPickersUtilsProvider>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={8}>
                <AutoMaps onChange={(e,value)=>{ inputs.address.value=value; }} />
              </Grid>
            </Grid>
          </StepComponent>
          <StepComponent step={2}>
            <InputField name="email" label="¿Cuál es tu e-mail?" type="email" />
            <InputField name="password" label="Crea una contraseña" placeholder="**********" type="password" />
            <InputField name="movil" label="Número celular: " type="number" />
            <InputField name="phone" label="Teléfono fijo: " type="number" />
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