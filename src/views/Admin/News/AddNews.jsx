import React, { useState } from 'react';
import TitlePage from '~/components/TitlePage';
import FileUploader from 'react-firebase-file-uploader';

import {
  Breadcrumbs,
  Grid,
  TextField,
  Typography,
  makeStyles,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  LinearProgress,
  Box
} from '@material-ui/core';

import Autocomplete from '@material-ui/lab/Autocomplete';
import newsFireBase from './NewstFireBase';

const newsStyle = makeStyles((theme) => ({
  form: {
    marginBottom: 30,
    marginTop: 50,
  },
  formControl: {
    width: '100%',
  },
}));

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={ 1 }>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function AddNews() {
  const classes = newsStyle();

  const [values, setValues] = useState({
    titulo: '',
    perfil: '',
    comuna: [],
    to: [],
    image: '',
    content: '',
  });

  const [error, setError] = useState({
    titulo: '',
    perfil: '',
    comuna: '',
    to: '',
    image: '',
    content: '',
  });
  
  const [isValid, setIsValid] = useState(true);

  const [progress, setProgress] = useState(0);

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

  const handlerSubmit = async (e) => {
    e.preventDefault();

    for (const key in values) {
        if( values[key].length === 0 ){
          setError((prev) => ({
            ...prev,
            [key]: "Este Campo No Puede Estar Vacio",
          }));
          setIsValid(false);
        }
    }

    for (const key in values) {
      if( values[key].length > 0 ){
        setIsValid(true);
        setError((prev) => ({
          ...prev,
          [key]: "",
        }));
      }else{
        setIsValid(false);
      }
    }

    try {
      if(isValid){
        const news = await newsFireBase.addNews(values);
        console.log('llegue',news.id);
      }
    } catch (e) {
      console.log(e);
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
    setProgress(progress)
  }

  return (
    <>
      <TitlePage title='Agregar noticia' />
      <Breadcrumbs>
        <Typography>Noticias</Typography>
        <Typography color='textPrimary'>Agregar Noticia</Typography>
      </Breadcrumbs>
      <form onSubmit={(e) => handlerSubmit(e)} className={classes.form}>
        <Grid spacing={5} container justify='space-around'>
          <Grid item xs={12} md={5}>
            <TextField
              value={values.titulo}
              name='titulo'
              label='Titulo de Noticias'
              onChange={(e) => handlerOnChange(e)}
              fullWidth
              error={ error.titulo ? true : false }
              helperText={ error.titulo ? error.titulo : '' }
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <FormControl className={classes.formControl} 
            error={  error.perfil ? true : false  }>
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
              { error.perfil && <FormHelperText>{ error.perfil }</FormHelperText> }
            </FormControl>
          </Grid>
          <Grid item xs={12} md={5}>
          <FormControl 
          className={classes.formControl}
          error={  error.comuna ? true : false  }
          >
            <Autocomplete
              multiple
              options={ comunas }
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
            { error.comuna && <FormHelperText>{ error.comuna }</FormHelperText> }
          </FormControl>
          </Grid>
          <Grid item xs={12} md={5}>
          <FormControl 
          className={classes.formControl}
          error={  error.to ? true : false  }
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
            { error.to && <FormHelperText>{ error.to }</FormHelperText> }
            </FormControl>
          </Grid>
          <Grid item xs={12} md={11}>
            <FormControl
              className={classes.formControl}
              error={  error.image ? true : false  }
            >
              <FileUploader
                accept='image/*'
                name='imagenNews'
                randomizeFilename
                storageRef={newsFireBase.getImagenRef()}
                onUploadSuccess={handleUploadSuccess}
                onProgress={ handlerOnProgress }
              />
              { ( progress > 0 ) && <LinearProgressWithLabel color="secondary" value={ progress }  /> }
              { error.image && <FormHelperText>{ error.image }</FormHelperText> }
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
              error={ error.content ? true : false }
              helperText={ error.content ? error.content : '' }
            />
          </Grid>
          <Grid justify='center' container>
            <Button variant='contained' type='submit' color='secondary'>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
