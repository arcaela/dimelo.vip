import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
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
  Button,
  Box,
  Card,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import TitlePage from '~/components/TitlePage';
import LinearProgressWithLabel from '~/components/LinearProgressWithLabel';
import AlertToast from '~/components/AlertToast';
import ButtonLoading from '~/components/ButtonLoading';
import PersonImage from '~/images/admin/personas.svg'
import newsFireBase from './NewstFireBase.jsx';
import useAuth from '~/ServerLess/hooks/useAuth';
import { api } from '~/ServerLess'
 import Posts from '~/ServerLess/collections/Posts'

const useStyle = makeStyles(theme => ({
  form: {
    marginBottom: 30,
    marginTop: 50,
  },
  formControl: {
    width: '100%',
  },
  goBack: {
    '& a':{ textDecoration:'none'}
  },
  button: {
    background: theme.palette.primary.dark,
    borderRadius: 4,
    padding: 8.5,
    color: '#fff',
    '&:hover':{
        background: theme.palette.primary.dark,
    }
  },
  input: {
   display: 'none',
  },
  rightCard: {
    '& .MuiTypography-root':{ cursor:'default' },
    '& .MuiTypography-subtitle1':{
      fontSize:'1.1rem',
      font: 'normal normal bold 20px/20px Source Sans Pro',
      letterSpacing: '0.4px',
      color: '#4D4F5C',
      opacity: 1,
      fontWeight:600,
      margin: '20px',
    },
    '& .MuiTypography-subtitle2':{
      fontSize:'1.2rem',
      font: 'normal normal 900 20px/25px Source Sans Pro',
      color: '#1C4F75',
      opacity: 1,
      fontWeight:600,
      marginLeft: '20px',
    },
    '& .MuiTypography-body1': {
      fontSize:'0.9rem',
      font: 'normal normal 300 18px/23px Source Sans Pro',
      color:'#4D4F5C',
      opacity: '0.6',
      margin:'20px 20px 20px 0px'
    },
  }
}));

export default function EditNews({ id }) {
  const classes = useStyle();

  const router = useHistory();

  const [values, setValues] = useState({
    autor: {
      uid: '',
      fullname: '',
    },
    title: '',
    profiles: '',
    roles: '',
    image: '',
    content: '',
  });

  console.log('values: ', values);

  const [error, setError] = useState({
    autor: {
      uid: '',
      fullname: '',
    },
    title: '',
    perfil: '',
    localidad: '',
    rol: '',
    image: '',
    content: '',
  });

  const [progress, setProgress] = useState(0);

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState('');

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

    if (isValid !== 0) {
      setLoading(false);
      return false;
    }

    if (isValid === 0) {
      return true;
    }
  };

  const reset = () => {
    setValues({
      title: '',
      profiles: '',
      roles: [],
      image: '',
      content: '',
    });
    setProgress(0);
  };

  const getPostProfiles = (values) => {
    const postProfiles = values.length ? values.map((elem) => {
      switch (elem) {
        case 'all':
          return ({ title: 'Todos', value: 'all' });
          break;
        case 'dominancia':
          return ({ title: 'Independiente Automotivado', value: 'dominancia' });
          break;
        case 'control':
          return ({ title: 'Analista Pensador', value: 'control' });
          break;
        case 'influencia':
          return ({ title: 'Promotor Amigable', value: 'influencia' });
          break;
        case 'estabilidad':
          return ({ title: 'Planificador Perseverante', value: 'estabilidad' });
          break;
        default:
          return ({ title: 'Todos', value: 'all' });
          break;
      }
    }) : [];
    return postProfiles;
  }

  const getPostRoles = (values) => {
    const postRoles = values.length ? values.map((elem) => {
      switch (elem) {
        case 'all':
          return ({ title: 'Todos', value: 'all' });
          break;
        case 1:
          return ({ title: 'Líderes de primer nivel', value: 1 });
          break;
        case 2:
          return ({ title: 'Líderes de celula', value: 2 });
          break;
        case 3:
          return ({ title: 'Usuario', value: 3 });
          break;
        default:
          return ({ title: 'Todos', value: 'all' });
          break;
      }
    }) : [];
    return postRoles;
  }

  const getPostById = async () => {
      if (!id) return;
      try{
        const snap = await Posts.doc(id).get();
        console.log('snap: ', snap.data());
        if(snap.data()){
          const postData = snap.data();
          setValues({
            autor: postData.autor,
            title: postData.title,
            profiles: getPostProfiles(postData.filters.perfiles),
            roles: getPostRoles(postData.filters.rol),
            image: postData.media,
            content: postData.content,
          })
        }
      }catch (error){
        console.log(error);
      }
    }

  useEffect(() => {
    if(!values.autor.uid){
      getPostById()
    }
  })

  const handlerSubmit = async (e) => {
    e.preventDefault();

    await setLoading(true);

    for (const value in values) {
      if (values[value].length === 0 && value !== 'image') {
        setError((prev) => ({
          ...prev,
          [value]: 'Este Campo No Puede Estar Vacio',
        }));
      }
    }

    const isValid = verifyForm();
    const post = {
        autor: values.autor,
        title: values.title,
        content: values.content,
        media: {
            pictures: values.media,
            videos: [],
        },
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
        await newsFireBase.updateNews(id, post);
        /*await api('posts/update', post)
          .then( $post => {
            console.log('post updated: ', post);
          })
          .catch(e=>alert(e))*/
        setMessage('Publicada');
        setSuccess(!success);
        setLoading(false);
        reset();
        router.push('/admin/news/');
      }
    } catch (e) {
      setLoading(false);
    }
  };

  const handleUploadSuccess = async (filename) => {
     const storageRef = newsFireBase.getImagenRef();
     console.log('getImagenRef: ', storageRef);

     const name = await filename;
     console.log('fliename: ', filename);

     storageRef
       .child(name)
       .getDownloadURL()
       .then(function (url) {
         console.log('url: ', url);
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
          message={message}
        />
      )}

      <TitlePage title='Editar noticia' />

      {/* Breadcrumbs and Go back */}
      <Box display="flex" justifyContent="space-between" style={{ marginBottom: '20px' }}>
        <Breadcrumbs separator=">">
          <Typography>Noticias</Typography>
          <Typography color='textPrimary'>Editar Noticia</Typography>
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
                <Grid item xs={10} md={5}>
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
                <Grid item xs={10} md={5}>
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


                <Grid item xs={10} md={5}></Grid>

                {/* Rol */}
                <Grid item  xs={10} md={5}>
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
                <Grid item xs={10}>
                  <FormControl className={classes.formControl} error={error.image ? true : false}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={({target:{ files }})=> {
                          console.log('image files: ', files);
                          setValues(prev=>({
                            ...prev,
                            image: files
                          }))
                        }}
                      />
                      <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                          Elija el archivo
                        </Button>
                      </label>
                    </div>


                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      {values.image && (
                        <div style={{ padding: '.5rem', maxWidth: '50%', minWidth: '50%', height: 'auto', }}>
                          <img
                            style={{ maxWidth: '100%', height: 'auto', }}
                            alt='imagen'
                            src={values.image}
                          />
                        </div>
                      )}
                    </div>

                    {progress > 0 && (<LinearProgressWithLabel color='secondary' value={progress} />)}

                    {error.image && <FormHelperText>{error.image}</FormHelperText>}
                  </FormControl>
                </Grid>

                {/* Content */}
                <Grid item xs={10}>
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
  );
}
