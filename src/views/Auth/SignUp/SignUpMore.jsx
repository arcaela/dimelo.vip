import React from 'react';
import {
  Button,
  CircularProgress,
  ClickAwayListener,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { FiberManualRecord, Info } from '@material-ui/icons';
import BrandPNG from '../../../dist/images/brand.svg';

import Wizard from './Wizard';
import Regions from './votes_regions';
import { useStylesSingUpMore } from '../styles/singupmore.styles';
import MapGetLocation from '../components/MapGetLocation';

export default function SignUpMore({ useInput, ...req }) {

  const classes = useStylesSingUpMore();

  const [tooltip, setTooltip] = React.useState(false);

  const [leaders, setLeaders] = React.useState([]);

  const {
    step,
    inputs,
    setStep,
    prevStep,
    loading,
    setInput,
    firestore,
    InputField,
    Autocomplete,
    StepComponent,
  } = useInput;

  const handleBack = () => (step === 2 ? req.history.goBack() : prevStep());

  React.useEffect(() => {
    if (!leaders.length)
      firestore
        .collection('leaders')
        .get()
        .then((snap) => setLeaders(snap.docs.map((e) => e.data().name)));
  }, [leaders, firestore]);

  return step > 5 ? (
    <div
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
            onClick={() => setStep(1)}
            style={{ marginTop: 10 }}
          >
            <Typography color='inherit' component='span'>
              Registrar otra persona
            </Typography>
          </Button>
        </Container>
      }
    />
  ) : (
    <div className={classes.root}>
      <MapGetLocation />
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
        <div className={classes.body}>
          <StepComponent step={3}>
            <Autocomplete
              name='departamento'
              label='Departamento donde resides'
              options={Object.keys(Regions)}
              onChange={() => setInput('municipio', { value: '' })}
            />
            <Autocomplete
              name='municipio'
              label='Municipio donde resides'
              disabled={!inputs.departamento.value}
              options={
                Object.keys(Regions[inputs.departamento.value] || [])
              }
            />
            <Autocomplete
              name='comuna'
              label='Comuna o Corregimiento (Si Aplica)'
              InputLabelProps={{ style: { fontSize: 13 } }}
              disabled={!inputs.municipio.value}
              options={Object.keys(
                (!!inputs.departamento.value && !!inputs.municipio.value
                  && inputs.municipio.value in Regions)
                ?(Regions[inputs.departamento.value][inputs.municipio.value] ||[])
                :[]
              )}
            />
            <InputField name='direccion' label='Dirección de residencia' />
            <InputField name='phone' label='Teléfono fijo' type='number' />
            <InputField name='movil' label='Teléfono celular' type='number' />
          </StepComponent>
          <StepComponent step={4}>
            <Autocomplete
              name='voting_dep'
              label='Departamento donde votas'
              options={Object.keys(Regions)}
              onChange={() => setInput('municipio', { value: '' })}
            />
            <Autocomplete
              name='voting_mun'
              label='Municipio donde votas'
              options={
                inputs.voting_dep.value in Regions
                  ? Object.keys(Regions[inputs.voting_dep.value])
                  : []
              }
            />
            <Autocomplete
              name='voting_point'
              label='Puesto de votación'
              options={Regions.points(
                inputs.voting_dep.value,
                inputs.voting_mun.value
              )}
              InputProps={{
                endAdornment: (
                  <ClickAwayListener onClickAway={() => setTooltip(false)}>
                    <Tooltip
                      interactive
                      PopperProps={{ disablePortal: true }}
                      open={tooltip}
                      title={
                        <div>
                          <Typography
                            color='secondary'
                            variant='h6'
                            component='div'
                          >
                            IMPORTANTE
                          </Typography>
                          <Typography color='inherit' variant='subtitle2'>
                            Si no tienes clara esta información, en{' '}
                            <Typography
                              variant='body2'
                              component='span'
                              color='secondary'
                            >
                              <a
                                href='https://wsp.registraduria.gov.co/censo/consultar/'
                                target='_blank'
                                rel='noreferrer'
                              >
                                este enlace
                              </a>
                            </Typography>{' '}
                            puedes acceder a la página de la Registraduría.
                          </Typography>
                        </div>
                      }
                      arrow
                      placement='top-start'
                    >
                      <IconButton
                        onClick={() => setTooltip(true)}
                        color='inherit'
                        children={<Info />}
                      />
                    </Tooltip>
                  </ClickAwayListener>
                ),
              }}
            />
            <Autocomplete
              name='voting_leader'
              label='¿Quién es tu líder?'
              // disabled={!leaders.length}
              options={leaders}
              value={
                !leaders.length ? 'Cargando...' : inputs.voting_leader.value
              }
            />
            <InputField
              name='voting_table'
              label='Mesa de votación'
              type='number'
            />
            {/* 
                    <FormControl variant="outlined" error={Boolean(inputs.voting_leader.error)}>
                        <FormHelperText id="label-voting_leader">¿Quien es tu líder?</FormHelperText>
                        <Autocomplete
                            fullWidth
                            disableClearable
                            options={leaders}
                            disabled={!leaders.length}
                            getOptionSelected={()=>true}
                            value={!leaders.length?'Cargando...':inputs.voting_leader.value}
                            onChange={(e,value)=>setInput('voting_leader',{value})}
                            renderInput={(params)=><TextField {...params} variant="outlined" />}
                        />
                    </FormControl> */}
          </StepComponent>
          <StepComponent step={5}>
            <InputField
              name='people_depend'
              label='¿Cuántas personas de tu núcleo familiar son mayores de edad?'
              type='number'
            />
            <InputField
              name='people_join'
              label='Número de personas con las que contarías para que nos acompañen en la votación'
              type='number'
            />
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
