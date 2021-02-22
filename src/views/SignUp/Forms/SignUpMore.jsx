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
import wizard from '../components/wizard';
import { reference } from '~/ServerLess';
import BrandSVG from '~/images/brand.svg';
import regions from '../components/regions';
import useStyles from '../styles/SignUpMore';
import GoogleMaps from '../components/GoogleMaps';
import { FiberManualRecord, Info } from '@material-ui/icons';
import { Autocomplete as MuiAutocomplete } from '@material-ui/lab';



let $leaders = [];
export default function SignUpMore({ useInput, params:{referer} }){
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
  } = useInput;
  const [tooltip, setTooltip] = React.useState(false);

  /* Leaders */
  const [_open, _setOpen] = React.useState(false);
  const [_options, _setOptions] = React.useState($leaders);
  const _loading = _open&&_options.length===0;
  const _value = inputs.voting_leader.value?(
    !_options.length?{name:'Cargando...'}
    :(_options.find(o=>o.cedula===inputs.voting_leader.value)||null)
  ):null;
  React.useEffect(() => {
    let active = true;
    if(_loading || (!_options.length && inputs.voting_leader.value)){
      (async () => {
        const snap = await reference('leaders').orderBy('name','asc').get();
        if (active) _setOptions(()=>$leaders=snap.docs.map(e=>e.data()));
      })();
      return ()=> active=false;
    }
    else return undefined;
  }, [ inputs, _options, _loading]);


  return (<>
    {step>6&&(<div>{window.location.href='/test'}Espere porfavor...</div>)}
    {step===6&&(<div className={classes.root} children={
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
          <Typography variant='h5' color='initial' children={(step<5&&'Un poco más...')||'Cuéntanos sobre tu familia...'} />
          <Typography variant='subtitle2' color='initial' children={(step<5&&'Completa estos campos para continuar el registro')||'Solo faltan estos campos...'} />
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
                helperText:(<span>
                  <Typography variant="caption" style={{fontWeight:100}}>
                    Puedes consultar esta información 
                    <a target='_blank' rel='noreferrer' href='https://wsp.registraduria.gov.co/censo/consultar/' children=" AQUÍ" style={{color:'#82D827'}} />
                  </Typography>
                </span>),
                InputProps:{
                  style:{paddingRight:9},
                  endAdornment: (
                    <ClickAwayListener onClickAway={() => setTooltip(false)}>
                      <Tooltip arrow placement='top-start' interactive PopperProps={{ disablePortal: true }} open={tooltip}
                        title={<div>
                            <Typography color='secondary' variant='h6' component='div' >
                              IMPORTANTE
                            </Typography>
                            <Typography color='inherit' variant='subtitle2'>
                              {'Si no tienes clara esta información, en '}
                              <a target='_blank' rel='noreferrer' href='https://wsp.registraduria.gov.co/censo/consultar/' children="este enlace" style={{color:'#82D827'}} />
                              {' puedes acceder a la página de la Registraduría.'}
                            </Typography>
                          </div>
                        }>
                        <IconButton size="small" color='inherit'
                          onClick={()=>setTooltip(true)}
                          children={<Info />}/>
                      </Tooltip>
                  </ClickAwayListener>),
                },
              }}
            />
            <Autocomplete name='voting_table' need='voting_point' label='Mesa de votacion'
              TextFieldProps={{helperText:"Dinos tu número de mesa de votación"}}
              getOptions={()=>regions.deep(`${inputs.voting_dep.value}.${inputs.voting_mun.value}`,)}
            />
            <FormControl variant="outlined" fullWidth>
              <FormHelperText error={!!inputs.voting_leader.error}>{inputs.voting_leader.error || '¿Quién es tu líder?'}</FormHelperText>
              <MuiAutocomplete
                open={_open && !(referer && _value)}
                value={_value}
                freeSolo={false}
                disableClearable
                loading={_loading}
                options={_options}
                onOpen={()=>_setOpen(!(referer && _value)?true:false)}
                onClose={()=>_setOpen(false)}
                getOptionLabel={option=>option.name}
                onChange={(e,option)=>(inputs.voting_leader.value=option.cedula)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!!inputs.voting_leader.error}
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      readOnly:!!(referer && _value),
                      endAdornment: (
                        <React.Fragment>
                          {loading ? <CircularProgress color="inherit" size={20} /> : null}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
            </FormControl>
          </StepComponent>
          <StepComponent step={4}>
            <GoogleMaps onChange={event=>inputs('address.value', event.latLng.toJSON())} />
          </StepComponent>
          <StepComponent step={5}>
            <InputField FormControlProps={{fullWidth:true}} name="adults" label="¿Cuantos son mayores de edad?" />
            <InputField FormControlProps={{fullWidth:true}} name="partners" label="¿Cuantos te apoyan en esta meta?" />
          </StepComponent>
        </div>
        <div className={classes.actions}>
          <div className={`active-step-${step}`} children={([1,2,3,]).map(key=><FiberManualRecord key={key} />)} />
          <Button variant="contained" style={{margin:'0',color:'black'}} onClick={()=>prevStep()} children="Volver" />
          <Button variant='contained' color={step<5?'primary':'secondary'} disabled={loading}
            onClick={()=>wizard(useInput)}
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