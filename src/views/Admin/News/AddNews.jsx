import React, { useState } from 'react';
import TitlePage from '~/components/TitlePage';
import FileUploader from 'react-firebase-file-uploader';

import {
  Breadcrumbs,
  Grid,
  TextField,
  Typography,
  makeStyles,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';

import Autocomplete from '@material-ui/lab/Autocomplete';
import newsFireBase from './NewstFireBase';
import LinearProgressWithLabel from '~/components/LinearProgressWithLabel';
import AlertToast from '~/components/AlertToast';
import ButtonLoading from '~/components/ButtonLoading';
import { useHistory } from 'react-router-dom';

const newsStyle = makeStyles((theme) => ({
  form: {
    marginBottom: 30,
    marginTop: 50,
  },
  formControl: {
    width: '100%',
  },
}));

export default function AddNews() {
  const classes = newsStyle();

  const router = useHistory()

  const [values, setValues] = useState({
    title: '',
    perfil: '',
    comuna: [],
    to: [],
    image: '',
    content: '',
  });

  const [error, setError] = useState({
    title: '',
    perfil: '',
    comuna: '',
    to: '',
    image: '',
    content: '',
  });

  const [progress, setProgress] = useState(0);

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false)

  const [message, setMessage] = useState('')

  const comunas = [
    { title: 'medellin', value: 'medellin' },
    { title: 'antioquia', value: 'antioquia' },
  ];

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
      comuna: [],
      to: [],
      image: '',
      content: '',
    })
    setProgress(0)
  }

  const handlerSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)

    for (const value in values) {
      if (values[value].length === 0) {
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
        router.push('/admin/noticias/')
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

  const handlerOnAutoComplete = (field, value) => {
    setValues((prev) => ({
      ...prev,
      [field]: [...value.map((value) => value.value)],
    }));
  };

  const handleUploadSuccess = async (filename) => {
    const storageRef = newsFireBase.getImagenRef();

    const name = await filename;

    storageRef
      .child(name)
      .getDownloadURL()
      .then(function (url) {
        setValues({
          ...values,
          image: url,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handlerOnProgress = (progress) => {
    setProgress(progress);
  };

  return (
    <>
      {success && (<AlertToast
        open={success}
        handleClose={() => setSuccess(!success)}
        hideDuration={5000}
        severity='success'
        message={ message }
      />)}
      <TitlePage title='Agregar noticia' />
      <Breadcrumbs>
        <Typography>Noticias</Typography>
        <Typography color='textPrimary'>Agregar Noticia</Typography>
      </Breadcrumbs>
      <form onSubmit={(e) => handlerSubmit(e)} className={classes.form}>
        <Grid spacing={5} container justify='space-around'>
          <Grid item xs={12} md={5}>
            <TextField
              value={values.title}
              name='title'
              label='Titulo de Noticias'
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
              error={error.comuna ? true : false}
            >
              <Autocomplete
                multiple
                options={comunas}
                inputValue=''
                name='comuna'
                onChange={(event, newValue) => {
                  handlerOnAutoComplete('comuna', newValue);
                }}
                getOptionSelected={(option, value) => {
                  return option.value === value.value;
                }}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField {...params} label='Comuna' placeholder='Comuna' />
                )}
              />
              {error.comuna && <FormHelperText>{error.comuna}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} md={5}>
            <FormControl
              className={classes.formControl}
              error={error.to ? true : false}
            >
              <Autocomplete
                multiple
                options={usersTypes}
                getOptionLabel={(option) => option.title}
                inputValue=''
                name='to'
                onChange={(event, newValue) => {
                  handlerOnAutoComplete('to', newValue);
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
              />
              {error.to && <FormHelperText>{error.to}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} md={11}>
            <FormControl
              className={classes.formControl}
              error={error.image ? true : false}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <label style={{
                  backgroundColor: '#82D827', 
                  color: 'white',
                  borderRadius: 4,
                  width: '50%',
                  padding: '.5rem',
                  cursor: 'pointer'}}>
                    Subir Imagen
                  <FileUploader
                    hidden
                    accept='image/*'
                    name='imagenNews'
                    randomizeFilename
                    storageRef={newsFireBase.getImagenRef()}
                    onUploadSuccess={handleUploadSuccess}
                    onProgress={handlerOnProgress}
                  />
                </label>

                {values.image && (
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
                    src={values.image} />
                  </div>
                )}
              </div>


              {progress > 0 && (
                <LinearProgressWithLabel color='secondary' value={progress} />
              )}
              {error.image && <FormHelperText>{error.image}</FormHelperText>}
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
    </>
  );
}
