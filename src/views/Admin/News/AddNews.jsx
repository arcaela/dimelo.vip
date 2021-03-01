import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumbs,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  Box,
  Card,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

import Autocomplete from '@material-ui/lab/Autocomplete';
import newsFireBase from './NewstFireBase';
import LinearProgressWithLabel from '~/components/LinearProgressWithLabel';
import AlertToast from '~/components/AlertToast';
import ButtonLoading from '~/components/ButtonLoading';
import TitlePage from '~/components/TitlePage';
import regions from '~/views/SignUp/components/regions';
import useAuth from '~/ServerLess/hooks/useAuth';
import PersonImage from '~/images/admin/personas.svg'
import useStyles from './AddNews';



export default function AddNews() {
  const classes = useStyles();

  const user = useAuth()

  const [values, setValues] = useState({
    //autor{name, uid}
    title: '',
    perfil: '',
    localidad: 'MEDELLIN',
    rol: '',
    media: '',
    content: '',
  });

  const [error, setError] = useState({
    title: '',
    perfil: '',
    localidad: 'MEDELLIN',
    rol: '',
    media: '',
    content: '',
  });

  const [progress, setProgress] = useState(0);

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false)

  const [message, setMessage] = useState('')

  const [comunas, setComunas] = useState('')

  const perfiles = [
    { title: 'Todos', value: 'all' },
    { title: 'Independiente Automotivado', value: 'dominancia' },
    { title: 'Analista Pensador', value: 'control' },
    { title: 'Promotor Amigable', value: 'influencia' },
    { title: 'Planificador Perseverante', value: 'estabilidad' },
  ];

  const usersTypes = [
    { title: 'Líderes de primer nivel', value: 1 },
    { title: 'Líderes de celula', value: 2 },
    { title: 'Usuario', value: 3 },
  ];

  const verifyForm = () => {
    let isValid = 0;

    for (const value in values) {
      if (values[value].length === 0) {
        isValid = isValid + 1;
      }
    }

    if ( isValid !== 0 ) {
      setLoading(false);
      return false;
    }

    if( isValid === 0 ){
      return true;
    }
  };

  const reset = () => {
    setValues({
      title: '',
      perfil: '',
      localidad: [],
      rol: [],
      media: '',
      content: '',
    })
    setProgress(0)
  }

  const handlerSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)

    for (const value in values) {
      if ( values[value].length === 0 && value !== 'media') {
        setError((prev) => ({
          ...prev,
          [value]: 'Este Campo No Puede Estar Vacio',
        }));
      }
    }

    const isValid = verifyForm();

    try {

      if (isValid) {
        await newsFireBase.addNews(values);
        setMessage('Publicada');
        setSuccess(!success);
        setLoading(false)
        reset()
        window.location.replace('/admin/news/')
      }
    } catch (e) {
      setLoading(false)
    }
  };

  const handlerOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if(comunas.length === 0){
      const data = regions.all;
      setComunas(data)
    }
  }, [comunas])

  useEffect(() => {
    if(user){
      setValues({
        ...values,
        autor:{
          name: user.name,
          uid: user.uid
        }
      })
    }
  }, [ user, values ])

  return (
    <>
      {success && (
        <AlertToast
          open={success}
          handleClose={() => setSuccess(!success)}
          hideDuration={5000}
          severity='success'
          message={ message }
        />
      )}

      <TitlePage title='Agregar noticia' />

      {/* Breadcrumbs and Go back */}
      <Box display="flex" justifyContent="space-between" style={{ marginBottom: '20px' }}>
        <Breadcrumbs separator=">">
          <Typography>Noticias</Typography>
          <Typography color='textPrimary'>Agregar Noticia</Typography>
        </Breadcrumbs>
        <Typography color='textPrimary' className={classes.goBack}> <Link to="/admin/news/">Volver</Link> </Typography>
      </Box>
      <Grid container direction="row" display="flex" spacing={1}>
        {/* Left Card */}
        <Grid container item xs={9}>
          <Card style={{ height: '100%' }}>
            <form onSubmit={(e) => handlerSubmit(e)} className={classes.form}>
              <Grid spacing={5} container justify='space-around'>

                <Grid item xs={12} md={5}>
                  <TextField
                    value={values.title}
                    name='title'
                    label='Titulo de la noticia'
                    onChange={(e) => handlerOnChange(e)}
                    fullWidth
                    error={error.title ? true : false}
                    helperText={error.title ? error.title : ''}
                  />
                </Grid>

                <Grid item xs={12} md={5}>
                  <FormControl
                    className={classes.formControl}
                    error={error.perfil ? true : false}
                  >
                    <InputLabel id='perfil'>Tipo de personalidad</InputLabel>
                    <Select
                      fullWidth
                      name='perfil'
                      value={values.perfil}
                      labelId='perfil'
                      onChange={(e) => handlerOnChange(e)}
                    >
                      {perfiles.map((perfil) => (
                        <MenuItem key={perfil.value} value={perfil.value}>
                          {perfil.title}
                        </MenuItem>
                      ))}
                    </Select>
                    {error.perfil && <FormHelperText>{error.perfil}</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={5}>
                  <FormControl
                    className={classes.formControl}
                    error={error.localidad ? true : false}
                  >
                    <Autocomplete
                      options={comunas}
                      value={values.localidad}
                      name='localidad'
                      onChange={(event, newValue) => {
                        setValues({
                          ...values,
                          localidad: newValue
                        })
                      }}
                      getOptionSelected={(option, value) => {
                        return option === value;
                      }}
                      getOptionLabel={ (option) => option }
                      renderInput={(params) => (
                        <TextField {...params} label='Comuna' placeholder='Comuna' />
                      )}
                    />
                    {error.localidad && <FormHelperText>{error.localidad}</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={5}>
                  <FormControl
                    className={classes.formControl}
                    error={error.rol ? true : false}
                  >
                    <InputLabel id='rol'>Enviar a:</InputLabel>
                    <Select
                      fullWidth
                      name='rol'
                      value={values.rol}
                      labelId='rol'
                      onChange={(e) => handlerOnChange(e)}
                    >
                      {usersTypes.map((rol) => (
                        <MenuItem key={rol.value} value={rol.value}>
                          {rol.title}
                        </MenuItem>
                      ))}
                    </Select>
                    {/* <Autocomplete
                      multiple
                      options={usersTypes}
                      getOptionLabel={(option) => option.title}
                      inputValue=''
                      name='rol'
                      onChange={(event, newValue) => {
                        handlerOnAutoComplete('rol', newValue);
                      }}
                      getOptionSelected={(option, value) => {
                        return option.value === value.value;
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label='Enviar a'
                          placeholder='Enviar a'
                        />
                      )}
                    /> */}
                    {error.rol && <FormHelperText>{error.rol}</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={11}>
                  <FormControl
                    className={classes.formControl}
                    error={error.media ? true : false}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                      <input type="file" multiple accept="images/*" onChange={()=>{}} />
                      {values.media && (
                        <div style={{
                          padding: '.5rem',
                          maxWidth: '50%',
                          minWidth: '50%',
                          height: 'auto'
                        }}>
                          <img
                          style={{
                            maxWidth: '100%',
                            height: 'auto',
                          }}
                          alt="imagen"
                          src={values.media} />
                        </div>
                      )}
                    </div>


                    {progress > 0 && (
                      <LinearProgressWithLabel color='secondary' value={progress} />
                    )}
                    {error.media && <FormHelperText>{error.media}</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={11}>
                  <TextField
                    value={values.content}
                    name='content'
                    onChange={(e) => handlerOnChange(e)}
                    rows={5}
                    rowsMax={6}
                    multiline={true}
                    label='Contenido'
                    fullWidth
                    error={error.content ? true : false}
                    helperText={error.content ? error.content : ''}
                  />
                </Grid>

                <Grid justify='center' container>
                  <ButtonLoading
                    loading={ loading }
                    variant='contained'
                    type='submit'
                    value="Publicar"
                    color='secondary'>
                      Enviar
                  </ButtonLoading>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>

        {/* Rigth Card */}
        <Grid container item xs={3} className={classes.rightCard}>
          <Card style={{ width: '100%', height: '70%' }}>
            <Grid xs={12} container direction="column">

              <Grid container item justify='flex-start'>
                <Typography color='primary' variant='subtitle1'>Alcance del público</Typography>
              </Grid>

              <Grid container item justify='flex-start'>
                <Typography variant='subtitle2'>13.000 personas</Typography>
              </Grid>

              <Grid container item direction="row" display="flex">
                <Grid container item xs={1} style={{ marginTop: '20px', marginLeft: '20px', color: '#4D4F5C' }}>
                  <InfoIcon fontSize="small" />
                </Grid>
                <Grid container item xs={10}>
                  <Typography variant='body1'>Tamaño estimado del público que coincide con las características puestas para ver tu noticia</Typography>
                </Grid>
              </Grid>

              <Grid container item justify='center'>
                  <img src={PersonImage} alt="PersonImage" style={{ width: '80%', height: '80%' }}/>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>

    </>
  );
}