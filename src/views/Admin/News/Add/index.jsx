import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import {
  Breadcrumbs,
  Grid,
  TextField,
  Typography,
  FormControl,
  FormHelperText,
  Button,
  Box,
  Card,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Autocomplete from '@material-ui/lab/Autocomplete';

import SimpleDialog from '../SimpleDialog';
import NewsBox from "../../../Posts/NewsBox";
import TitlePage from '~/components/TitlePage';
import AlertToast from '~/components/AlertToast';
import ButtonLoading from '~/components/ButtonLoading';
import PersonImage from '~/images/admin/personas.svg'
import { api, useAuth } from '~/ServerLess'

import useStyles from './styles';

export default function AddNews() {
  const classes = useStyles();
  const auth = useAuth();
  const router = useHistory();

  const [values, setValues] = useState({
    autor: {
      uid: '',
      fullname: '',
      photoURL: '',
    },
    title: '',
    profiles: '',
    roles: '',
    media: '',
    content: '',
  });

  const [preview, setPreview] = useState({});

  const [error, setError] = useState({
    title: '',
    profiles: '',
    roles: '',
    content: '',
  });

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  const [openPreview, setOpenPreview] = useState(false);

  const [message, setMessage] = useState('');

  const [imagePreview, setImagePreview] = useState(null);

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

  const handleChangeImage = ({ target : { files }}) => {
    if(!files.length) return;

    const read = new FileReader();
    read.onload = () => {
      setImagePreview(read.result);
    }
    read.readAsDataURL(files[0]);

    setValues(prev=>({
       ...prev,
       media: files
     }))
  }

  const verifyValues = () => {
    for (const value in values) {
      if (values[value].length === 0 && value !== 'media' && value !== 'autor') {
        setError((prev) => ({
          ...prev,
          [value]: 'Este Campo No Puede Estar Vacio',
        }));
        setLoading(false);
        return (false);
      }
    }
    return (true);
  }

  const handlerSubmit = async () => {
    setLoading(true);
    setError({
      title: '',
      profiles: '',
      roles: '',
      content: '',
    })
    const verify = verifyValues();

    const post = {
        user: {
          uid: values.autor.uid || auth.uid,
          fullname: values.autor.fullname || auth.fullname,
          photoURL: values.autor.photoURL || auth.photoURL,
        },
        title: values.title,
        content: values.content,
        media: values.media,
        filters:{
            // Rangos específicos del GPS,
            gps_area: [],
            // Perfiles psicológicos
            perfiles: values.profiles.length ? values.profiles.map(elem => elem.value) : [],
            // Roles de usuario
            rol: values.roles.length ? values.roles.map(elem => elem.value) : [],
        },
    }

    try {
      if (verify) {
        await api('posts/put', post)
        .then(()=>{
          setLoading(false);
          setMessage('Publicada');
          setSuccess(!success);
        })
        .catch(e=>alert(e.message))
        .finally(()=>{
          setLoading(false);
        });
      }
    } catch (e) {
      setLoading(false);
    }
  };

  const changeValues = React.useCallback((key, value) => setValues(current => ({
    ...current,
    [key]: value,
  })), [ setValues ]);

  return (
    <>
      {success && (
        <AlertToast
          open={success}
          handleClose={() => {
            setSuccess(!success)
            router.push('/admin/news/');
          }}
          hideDuration={5000}
          severity='success'
          message={message}
        />
      )}

      <TitlePage title='Agregar noticia' />

      {/* Breadcrumbs and Go back */}
      <Box display="flex" justifyContent="space-between" style={{ marginBottom: '20px' }}>
        <Breadcrumbs separator=">">
          <Typography>Noticias</Typography>
          <Typography color='textPrimary'>Agregar noticia</Typography>
        </Breadcrumbs>
        <Typography color='textPrimary' className={classes.goBack}> <Link to="/admin/news/">Volver</Link> </Typography>
      </Box>

      <Grid container direction="row" display="flex" spacing={1}>
        {/* Left Card */}
        <Grid item xs={9}>
          <Card style={{ height: '100%' }}>
            <Grid spacing={5} container justify='space-around' className={classes.form}>
              {/* Title */}
              <Grid item xs={10} md={5}>
                <TextField
                  value={values.title}
                  name='title'
                  label='Titulo de la noticia'
                  onChange={({ target:{name, value} }) => changeValues(name, value)}
                  fullWidth
                  error={error.title ? true : false}
                  helperText={error.title ? error.title : ''}
                />
              </Grid>

              {/* Perfil */}
              <Grid item xs={10} md={5}>
                <FormControl className={classes.formControl} error={error.profiles ? true : false}>
                  <Autocomplete
                    multiple
                    id="profiles"
                    options={profilesOptions}
                    className={classes.chips}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="Tipo de personalidad"
                      />
                    )}
                    onChange={(e, newValue) => changeValues('profiles', newValue)}
                  />
                  {error.profiles && <FormHelperText>{error.profiles}</FormHelperText>}
                </FormControl>
              </Grid>


              <Grid item xs={10} md={5}></Grid>

              {/* Rol */}
              <Grid item  xs={10} md={5}>
                <FormControl className={classes.formControl} error={error.roles ? true : false}>
                  <Autocomplete
                    multiple
                    id="roles"
                    className={classes.chips}
                    options={usersTypes}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="Enviar a:"
                      />
                    )}
                    onChange={(event, newValue) => changeValues('roles', newValue) }
                  />
                  {error.roles && <FormHelperText>{error.roles}</FormHelperText>}
                </FormControl>
              </Grid>

              {/* Image */}
              <Grid item xs={10}>
                <FormControl className={classes.formControl} error={error.media ? true : false}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={handleChangeImage}
                    />
                    <label htmlFor="contained-button-file">
                      <Button variant="contained" color="primary" component="span">
                        Elija el archivo
                      </Button>
                    </label>
                  </div>


                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {imagePreview && (
                      <div style={{ padding: '.5rem', maxWidth: '50%', minWidth: '50%', height: 'auto', }}>
                          <img
                            style={{ maxWidth: '100%', height: 'auto', }}
                            alt='imagen'
                            src={imagePreview}
                          />
                      </div>
                    )}
                  </div>

                  {error.media && <FormHelperText>{error.media}</FormHelperText>}
                </FormControl>
              </Grid>

              {/* Content */}
              <Grid item xs={10}>
                <TextField
                  value={values.content}
                  name='content'
                  onChange={({ target:{name, value} }) => changeValues(name, value)}
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
                  loading={loading}
                  variant='contained'
                  value="Publicar"
                  color='secondary'
                  onClick={() => handlerSubmit()}
                />
                <ButtonLoading
                  variant="contained"
                  color="primary"
                  value="Preview"
                  onClick={()=> {
                  setPreview({
                    autor: {
                      fullname: auth.fullname,
                      photoURL: auth.photoURL,
                    },
                    title: values.title,
                    content: values.content,
                    media: [],
                  })
                  setOpenPreview(!openPreview)
                }} />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* Rigth Card */}
        <Grid item xs={3} className={classes.rightCard}>
          <Card style={{ width: '100%', height: '60%' }}>
            <Grid container direction="column">

              <Box>
                <Typography color='primary' variant='subtitle1'>Alcance del público</Typography>
              </Box>

              <Box>
                <Typography variant='subtitle2'>13.000 personas</Typography>
              </Box>

              <Box display="flex" flexDirection="row">
                  <Box display="flex" flexWrap="nowrap" pl={2}>
                  <InfoIcon fontSize="small" style={{ marginTop: '20px', color: '#4D4F5C' }}/>
                  </Box>
                  <Box flexGrow={1} pl={2}>
                  <Typography variant='body1'>Tamaño estimado del público que coincide con las características puestas para ver tu noticia</Typography>
                  </Box>
              </Box>

              <Box justifyContent="center">
                <img src={PersonImage} alt="PersonImage" style={{ width: '90%', height: '80%', paddingLeft: '24px' }}/>
              </Box>

            </Grid>
          </Card>
        </Grid>

        <SimpleDialog
          open={openPreview}
          onClose={() => setOpenPreview(!openPreview)}
          children={(<>
            <NewsBox post={{...preview, media: imagePreview ? [imagePreview] : [] }} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonLoading
              loading={loading}
              variant='contained'
              value="Publicar"
              color='secondary'
              onClick={() => handlerSubmit()}
            />
            </div>
          </>)}
        />
      </Grid>
    </>
  );
}
