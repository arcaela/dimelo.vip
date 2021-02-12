import React from 'react';
import {
  Button,
  CircularProgress,
  ClickAwayListener,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { Autocomplete as RealAutocomplate } from '@material-ui/lab';
import { FiberManualRecord, Info } from '@material-ui/icons';
import BrandPNG from '~/images/brand.svg';

import Wizard from './Wizard';
import Regions from './votes_regions';
import { useStylesSingUpMore } from '../styles/singupmore.styles';
import MapGetLocation from '../components/MapGetLocation';

import { Loader } from 'google-maps';
import { Redirect } from 'react-router-dom';
import { reference } from '~/ServerLess';

const google = ( new Loader('AIzaSyBntYCJH39TRORGUSYpYHHrcg4Etk8Y208', {}) ).load();

export default function SignUpMore({ useInput, ...req }) {

  const classes = useStylesSingUpMore();

  const [tooltip, setTooltip] = React.useState(false);


  const {
    step,
    inputs,
    prevStep,
    loading,
    setInput,
    setInputs,
    InputField,
    Autocomplete,
    StepComponent,
    nextStep
  } = useInput;

  const handleBack = () => ( step === 2 ? req.history.goBack() : prevStep() );

  const [leaders, setLeaders] = React.useState(null);
  React.useEffect(()=>{
    if(!leaders){
      reference('leaders')
        .get()
        .then(snap=>setLeaders(snap.docs.map(e=>e.data()).reduce((_,o)=>{_[o.cedula]=o;return _},{})));
    }
  }, [ leaders ]);


  const [open, setOpen] = React.useState(false);
  const [direccion, setDireccion] = React.useState(null)

  React.useEffect(() => {
      const setMAp = async () => {
            if(!inputs.municipio.value) return;
            const geocoder = new ( await google ).maps.Geocoder();
            geocoder.geocode({ 
              address: inputs.municipio.value,
              componentRestrictions: {
                country: "CO",
              }
            }, (results, status) => {

              if (status === "OK" && results[0]) {
                
                const latlng = {
                  lat: results[0].geometry.location.lat(),
                  lng: results[0].geometry.location.lng(),
                }
                console.log(latlng)

                setDireccion( latlng );

              } else {}

            });
    }

    setMAp();
  }, [inputs.municipio.value]);


  return step >= 6 ? (
    step > 6 ? <Redirect from={window.location.pathname} to="/test" /> : <div
    className={classes.root}
    children={
      <Container maxWidth='xs' className={classes.welcome}>
        <img alt='Brand' src={BrandPNG} />
        <Typography variant='h5' color='initial'>
          ¡Registro exitoso!
        </Typography>
        <Typography variant='subtitle2' color='initial'>
          Gracias por completar el registro. <br />A tu correo electrónico te
          llegará una notificación.{' '}
        </Typography>
        <Button
          color='secondary'
          variant='contained'
          component='span'
          onClick={() => nextStep()}
          style={{ marginTop: 10 }}
        >
          <Typography color='inherit' component='span'>
            Iniciar
          </Typography>
        </Button>
      </Container>
    }
  />

  ) : (
    <div className={classes.root}>
      <MapGetLocation google={google} setInputs={setInputs} location={direccion} openModel={ open } setOpenModal={ setOpen } />
      <Container maxWidth='sm' className={classes.container}>
        <img alt='Brand' src={BrandPNG} className={classes.brand} />
        <div className={classes.header}>
          <Typography variant='h5' color='initial'>
            {step < 5 ? 'Un poco más...' : '¡Casi terminamos!'}
          </Typography>
          <span onClick={handleBack}>Volver</span>
          <Typography variant='subtitle2' color='initial'>
            {step < 5
              ? 'Completa estos campos para continuar el registro'
              : 'Solo faltan estos campos...'}
          </Typography>
        </div>
        <div className={ classes.body }>
          <StepComponent step={3}>
            <Autocomplete
              className={ classes.w100 }
              name='departamento'
              label='Departamento donde resides'
              options={Object.keys(Regions)}
              onChange={ () =>  setInput( 'municipio', { value: '' } ) }
            />
            <Autocomplete
              className={ classes.w100 }
              name='municipio'
              label='Municipio donde resides'
              disabled={!inputs.departamento.value}
              options={Object.keys(Regions[inputs.departamento.value]||{})}
            />
            <Autocomplete
              className={ classes.w100 }
              name='comuna'
              label='Comuna o Corregimiento (Si Aplica)'
              InputLabelProps={{ style: { fontSize: 13 } }}
              disabled={!inputs.municipio.value}
              options={Object.keys(
                (Regions[inputs.departamento.value]||{})[inputs.municipio.value]||{}
              )}
            />
            <FormControl>
              <FormHelperText onClick={ ()=> setOpen( !open ) } >
                Para ver mapa<Typography color="secondary" component="span" style={{marginLeft:5, cursor:'pointer'}}>CLICK AQUI</Typography>
              </FormHelperText>
              <InputField name='direccion' label='Dirección de residencia' />
            </FormControl>
            <InputField name='phone' label='Teléfono fijo' type='number' />
            <InputField name='movil' label='Teléfono celular' type='number' />
          </StepComponent>
          <StepComponent step={4}>
            <Autocomplete
              name='voting_dep'
              label='Departamento donde votas'
              options={ Object.keys(Regions) }
              onChange={ ()=>setInput('voting_mun',{value:''}) }
            />
            <Autocomplete
              name='voting_mun'
              label='Municipio donde votas'
              options={ Object.keys(Regions[inputs.voting_dep.value]||{}) }
            />
            <Autocomplete
              name='voting_point'
              label={"Puesto de votación"}
              options={Regions.points( inputs.voting_dep.value, inputs.voting_mun.value )}
              TextFieldProps={{
                helperText:(<span>
                  <Typography variant="caption">
                    Puedes consultar esa información 
                  </Typography>
                  <Typography component="a" target='_blank' rel='noreferrer'
                    href='https://wsp.registraduria.gov.co/censo/consultar/'
                    variant="caption" color='secondary' children=" AQUÍ" />
                </span>),
              }}
              InputProps={{
                endAdornment: (
                  <ClickAwayListener onClickAway={() => setTooltip(false)}>
                    <Tooltip arrow placement='top-start' interactive PopperProps={{ disablePortal: true }} open={tooltip}
                      title={<div>
                          <Typography color='secondary' variant='h6' component='div' >
                            IMPORTANTE
                          </Typography>
                          <Typography color='inherit' variant='subtitle2'>
                            {'Si no tienes clara esta información, en '}
                            <Typography target='_blank' rel='noreferrer'
                              href='https://wsp.registraduria.gov.co/censo/consultar/'
                              component="a" variant='body2' color='secondary' children=" este enlace " />
                            {' puedes acceder a la página de la Registraduría.'}
                          </Typography>
                        </div>
                      }>
                      <IconButton size="small" color='inherit'
                        onClick={()=>setTooltip(true)}
                        children={<Info />}/>
                    </Tooltip>
                  </ClickAwayListener>
                ),
              }}/>

            <FormControl variant="outlined" error={inputs.voting_leader.error}>
              <FormHelperText>{ inputs.voting_leader.error || '¿Quien es tu líder?' }</FormHelperText>
              <RealAutocomplate
                fullWidth
                freeSolo={false}
                autoHighlight
                disableClearable
                getOptionLabel={o=>o.name}
                options={Object.values(leaders||{})}
                renderInput={(params)=>(<TextField {...params} variant="outlined" />)}
                onChange={(o,value)=>console.log(inputs.voting_leader.value=value.cedula)}
              />
            </FormControl>
            <InputField name='voting_table' label='Mesa de votación' type='number' />
          </StepComponent>
          <StepComponent step={5}>
            <InputField
              name='people_depend'
              label='¿Cuántas personas de tu núcleo familiar son mayores de edad?'
              type='number' />
            <InputField
              name='people_join'
              label='Número de personas con las que contarías para que nos acompañen en la votación'
              type='number' />
          </StepComponent>
        </div>
        <div className={classes.actions}>
          <div className={`active-step-${step}`}>
            {' '}
            <FiberManualRecord /> <FiberManualRecord /> <FiberManualRecord />{' '}
          </div>
          <Button
            variant='contained'
            color={step < 5 ? 'primary' : 'secondary'}
            onClick={() => Wizard(useInput)}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress style={{ color: 'white' }} size={20} />
            ) : step < 5 ? (
              'Continuar'
            ) : (
              <Typography
                color='inherit'
                component='span'
                children='Registrate'
              />
            )}
          </Button>
        </div>
        <Toolbar className={classes.footer}>
          ¿Ya tienes una cuenta?&nbsp;<Typography>Ingresa</Typography>
        </Toolbar>
      </Container>
    </div>
  );
}
