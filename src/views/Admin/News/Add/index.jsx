import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumbs,
  Grid,
  TextField,
  Typography,
  FormControl,
  FormHelperText,
  Box,
  Card,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Autocomplete from '@material-ui/lab/Autocomplete';

import TitlePage from '~/components/TitlePage';
import AlertToast from '~/components/AlertToast';
import useAuth from '~/ServerLess/hooks/useAuth';
import PersonImage from '~/images/admin/personas.svg'
import ButtonLoading from '~/components/ButtonLoading';
import LinearProgressWithLabel from '~/components/LinearProgressWithLabel';
import { api } from '~/ServerLess'

import useStyles from './styles';

export default function AddNews() {
  const classes = useStyles();
  const auth = useAuth();


  const [values, setValues] = useState({
    title: '',
    profiles: '',
    roles: '',
    media: '',
    content: '',
  });

  const [error, setError] = useState({
    title: '',
    perfil: '',
    rol: '',
    media: '',
    content: '',
  });

  const [progress, setProgress] = useState(0);

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false)

  const [message, setMessage] = useState('')

  const profilesOptions = [
    { title: 'Todos', value: 'all' },
    { title: 'Independiente Automotivado', value: 'dominancia' },
    { title: 'Analista Pensador', value: 'control' },
    { title: 'Promotor Amigable', value: 'influencia' },
    { title: 'Planificador Perseverante', value: 'estabilidad' },
  ];

  const usersTypes = [
    { title: 'Todos', value: 'all' },
    { title: 'Líderes de primer nivel', value: 1 },
    { title: 'Líderes de celula', value: 2 },
    { title: 'Usuario', value: 2 },
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
      profiles: '',
      roles: [],
      media: '',
      content: '',
    })
    setProgress(0)
  }

  const handlerSubmit = async (e) => {
    e.preventDefault();
    await setLoading(true);
   
    for (const value in values) {
      if ( values[value].length === 0 && value !== 'media') {
        setError((prev) => ({
          ...prev,
          [value]: 'Este Campo No Puede Estar Vacio',
        }));
      }
    }
    

    const isValid = verifyForm();
    const post = {
        autor:{
            uid: auth?.uid,
            fullname: auth?.fullname,
        },
        title: values.title,
        content: values.content,
        media: values.media,
        filters:{
            // Rangos específicos del GPS,
            gps_area: [],
            // Perfiles psicológicos
            perfiles: values.profiles.map(elem => elem.value),
            // Roles de usuario
            rol: values.roles.map(elem => elem.value),
        },
    }

    try {
      if (isValid) {
        await api('posts/put', post)
        .catch(e=>alert(e.message))
        setMessage('Publicada');
        setSuccess(!success);
        setLoading(false)
        reset();
        window.location.replace('/admin/news/')
      }
    } catch (e) {
      setLoading(false)
    }
  };

  const ChangeValues = React.useCallback((key, value)=>setValues(current=>({
    ...current,
    [key]:value,
  })), [ setValues ]);



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
        <Grid item xs={9}>
          <Card style={{ height: '100%' }}>
            <form onSubmit={(e) => handlerSubmit(e)} className={classes.form}>
              <Grid spacing={5} container justify='space-around'>
                {/* Title */}
                <Grid item xs={12} md={5}>
                  <TextField
                    value={values.title}
                    name='title'
                    label='Titulo de la noticia'
                    onChange={({ target:{name, value} }) => ChangeValues(name, value)}
                    fullWidth
                    error={error.title ? true : false}
                    helperText={error.title ? error.title : ''}
                  />
                </Grid>

                {/* Perfil */}
                <Grid item xs={12} md={5}>
                  <FormControl className={classes.formControl} error={error.perfil ? true : false}>
                    <Autocomplete
                      multiple
                      id="profiles"
                      options={profilesOptions}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          label="Tipo de personalidad"
                        />
                      )}
                      onChange={(e, newValue) => ChangeValues('profiles', newValue)}
                    />
                    {error.perfil && <FormHelperText>{error.perfil}</FormHelperText>}
                  </FormControl>
                </Grid>

                {/* Rol */}
                <Grid item  xs={12} md={5}>
                  <FormControl className={classes.formControl} error={error.rol ? true : false}>
                    <Autocomplete
                      multiple
                      id="roles"
                      options={usersTypes}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          label="Enviar a:"
                        />
                      )}
                      onChange={(event, newValue) => ChangeValues('roles', newValue) }
                    />
                    {error.rol && <FormHelperText>{error.rol}</FormHelperText>}
                  </FormControl>
                </Grid>

                {/* Image */}
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
                      <input type="file" multiple accept="images/*" onChange={({target:{ files }})=>setValues(prev=>({
                        ...prev,
                        media:files
                      }))} />
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

                {/* Content */}
                <Grid item xs={12} md={11}>
                  <TextField
                    value={values.content}
                    name='content'
                    onChange={({ target:{name, value} }) => ChangeValues(name, value)}
                    rows={5}
                    rowsMax={6}
                    multiline={true}
                    label='Contenido'
                    fullWidth
                    error={error.content ? true : false}
                    helperText={error.content ? error.content : ''}
                  />
                </Grid>

                {/* Button */}
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
        <Grid item xs={3} className={classes.rightCard}>
          <Card style={{ width: '100%', height: '70%' }}>
            <Grid container direction="column">

              <Grid item>
                <Typography color='primary' variant='subtitle1'>Alcance del público</Typography>
              </Grid>

              <Grid item>
                <Typography variant='subtitle2'>13.000 personas</Typography>
              </Grid>

              <Grid item display="flex">
                <Grid item xs={1} style={{ marginTop: '20px', marginLeft: '20px', color: '#4D4F5C' }}>
                  <InfoIcon fontSize="small" />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant='body1'>Tamaño estimado del público que coincide con las características puestas para ver tu noticia</Typography>
                </Grid>
              </Grid>

              <Grid item>
                  <img src={PersonImage} alt="PersonImage" style={{ width: '80%', height: '80%' }}/>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
