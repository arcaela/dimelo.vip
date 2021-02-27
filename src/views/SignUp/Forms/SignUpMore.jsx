import React from 'react';
import {
  Button,
  Toolbar,
  Tooltip,
  Container,
  TextField,
  Typography,
  IconButton,
  FormControl,
  FormHelperText,
  CircularProgress,
  ClickAwayListener,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import wizard from '../components/Submit';
import { reference } from '~/ServerLess';
import BrandSVG from '~/images/brand.svg';
import regions from '../components/regions';
import useStyles from '../styles/SignUpMore';
import GoogleMaps from '../components/GoogleMaps';
import { FiberManualRecord, Info } from '@material-ui/icons';
import { Autocomplete as MuiAutocomplete } from '@material-ui/lab';



export default function SignUpMore({ useForm }){
  const classes = useStyles();
  const {
    step,
    inputs,
    loading,
    prevStep,
    nextStep,
    setInputs,
    Autocomplete,
    InputField,
    StepComponent,
  } = useForm;
  return (<>
    {step>5&&(<div>{(window.location.href='/test') && ''}Espere porfavor...</div>)}
    {step===5&&(<div className={classes.root} children={
      <Container maxWidth='xs' className={classes.welcome}>
        <img alt='Brand' src={BrandSVG} />
        <Typography variant='h5' color='initial' children='¡Registro exitoso!' />
        <Typography variant='subtitle2' color='initial'>
          Gracias por completar el registro. <br />
          A tu correo electrónico te llegará una notificación.{' '}
        </Typography>
        <Button color='secondary' variant='contained' onClick={()=>nextStep()} style={{marginTop:10}}>
          <Typography color='inherit'>
            Iniciar
          </Typography>
        </Button>
      </Container>}
    />)}
    {step<6&&(<div className={classes.root}>
      <Container maxWidth="sm" className={classes.container}>
        <img alt='Brand' src={BrandSVG} className={classes.brand} />
        <div className={classes.header}>
          <Typography variant='h5' color='initial' children={(step<4&&'Un poco más...')||'Cuéntanos sobre tu familia...'} />
          <Typography variant='subtitle2' color='initial' children={(step<4&&'Completa estos campos para continuar el registro')||'Solo faltan estos campos...'} />
        </div>
        <div className={classes.body}>
          <StepComponent step={3}>
            <Autocomplete name='voting_dep' label='Departamento donde votas'
              options={regions.all}
              onChange={()=>setInputs({voting_mun:{value:''},voting_point:{value:''},voting_table:{value:''},})}
            />
            <Autocomplete name='voting_mun' label='Municipio donde votas'
              getOptions={()=>regions.path(inputs.voting_dep.value)}
              onChange={()=>setInputs({voting_point:{value:''},voting_table:{value:''},})}
            />
            <Autocomplete
              need='voting_mun'
              name='voting_point'
              label="Puesto de votación"
              getOptions={()=>regions.flat(`${inputs.voting_dep.value}.${inputs.voting_mun.value}`)}
              TextFieldProps={{
                helperText:(<>
                  <span key={1} style={{golor:'white'}}>Puedes consultar esta información </span>
                  <a key={2} target='_blank' rel='noreferrer' href='https://wsp.registraduria.gov.co/censo/consultar/' style={{color:'#82D827'}}> AQUÍ</a>
                </>),
              }}
            />
            <Autocomplete name='voting_table' need='voting_point' label='Mesa de votacion'
              TextFieldProps={{helperText:"Dinos tu número de mesa de votación"}}
              getOptions={()=>regions.deep(`${inputs.voting_dep.value}.${inputs.voting_mun.value}`,)}
            />
          </StepComponent>
          <StepComponent step={4}>
            <InputField FormControlProps={{fullWidth:true}} name="adults" label="¿Cuantos son mayores de edad?" type="number" />
            <InputField FormControlProps={{fullWidth:true}} name="partners" label="¿Cuantos te apoyan en esta meta?" type="number" />
          </StepComponent>
        </div>
        <div className={classes.actions}>
          <div className={`active-step-${step}`} children={([1,2,3,]).map(key=><FiberManualRecord key={key} />)} />
          <Button variant="contained" style={{margin:'0',color:'black'}} onClick={()=>prevStep()} children="Volver" />
          <Button variant='contained' color={step<5?'primary':'secondary'} disabled={loading}
            onClick={()=>wizard(useForm)}
            children={loading?<CircularProgress style={{ color: 'white' }} size={20} />:(
              step<5?'Continuar':'Registrate'
            )}/>
        </div>
        <Toolbar className={classes.Toolbar}>
          ¿Ya tienes una cuenta? &nbsp; 
          <Typography> <Link to="/signin">Ingresa</Link> </Typography>
        </Toolbar>
      </Container>
    </div>)}
  </>);
}