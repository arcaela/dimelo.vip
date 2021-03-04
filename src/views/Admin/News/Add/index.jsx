import React, { useState, useEffect } from 'react';
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

import TitlePage from '~/components/TitlePage';
import AlertToast from '~/components/AlertToast';
import ButtonLoading from '~/components/ButtonLoading';
import PersonImage from '~/images/admin/personas.svg'
import { scopes, api, useAuth } from '~/ServerLess'

import useStyles from './styles';

export default function EditNews({ id = null }) {
  const classes = useStyles();
  const auth = useAuth();
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
    media: '',
    content: '',
  });

  const [error, setError] = useState({
    autor: {
      uid: '',
      fullname: '',
    },
    title: '',
    profiles: '',
    roles: '',
    image: '',
    media: '',
    content: '',
  });

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState('');

  const [verify, setVerify] = useState(false);

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

  const getPostProfiles = (values) => {
    const postProfiles = values.length ? values.map((elem) => {
      switch (elem) {
        case 'all':
          return ({ title: 'Todos', value: 'all' });
        case 'dominancia':
          return ({ title: 'Independiente Automotivado', value: 'dominancia' });
        case 'control':
          return ({ title: 'Analista Pensador', value: 'control' });
        case 'influencia':
          return ({ title: 'Promotor Amigable', value: 'influencia' });
        case 'estabilidad':
          return ({ title: 'Planificador Perseverante', value: 'estabilidad' });
        default:
          return ({ title: 'Todos', value: 'all' });
      }
    }) : [];
    return postProfiles;
  }

  const getPostRoles = (values) => {
    const postRoles = values.length ? values.map((elem) => {
      switch (elem) {
        case 'all':
          return ({ title: 'Todos', value: 'all' });
        case 1:
          return ({ title: 'Líderes de primer nivel', value: 1 });
        case 2:
          return ({ title: 'Líderes de celula', value: 2 });
        case 3:
          return ({ title: 'Usuario', value: 3 });
        default:
          return ({ title: 'Todos', value: 'all' });
      }
    }) : [];
    return postRoles;
  }

  const getPostById = async () => {
      if (!id) return;
      try{
        const snap = await scopes.posts.doc(id).get();
        if(snap.data()){
          const postData = snap.data();
          setValues({
            autor: postData.autor,
            title: postData.title,
            profiles: getPostProfiles(postData.filters.perfiles),
            roles: getPostRoles(postData.filters.rol),
            image: postData.media,
            media: postData.media,
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
    setError({
      autor: {
        uid: '',
        fullname: '',
      },
      title: '',
      profiles: '',
      roles: '',
      image: '',
      media: '',
      content: '',
    })
    setVerify(false)

    for (const value in values) {
      if (values[value].length === 0 && value !== 'media') {
        setError((prev) => ({
            ...prev,
            [value]: 'Este Campo No Puede Estar Vacio',
          }));
      }else{
        setVerify(true)
      }
    }

    const post = {
        autor: {
          uid: values.autor.uid ? values.autor.uid : auth.uid,
          fullname: values.autor.fullname ? values.autor.fullname : auth.fullname,
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
          console.log('creando');
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

      <TitlePage title={!id ? 'Agregar noticia' : 'Editar noticia'} />

      {/* Breadcrumbs and Go back */}
      <Box display="flex" justifyContent="space-between" style={{ marginBottom: '20px' }}>
        <Breadcrumbs separator=">">
          <Typography>Noticias</Typography>
          <Typography color='textPrimary'>{!id ? 'Agregar noticia' : 'Editar noticia'}</Typography>
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
                        onChange={({target:{ files }})=> {
                          setValues(prev=>({
                            ...prev,
                            media: files
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
                      {values.media && (
                        <div style={{ padding: '.5rem', maxWidth: '50%', minWidth: '50%', height: 'auto', }}>
                          <img
                            style={{ maxWidth: '100%', height: 'auto', }}
                            alt='imagen'
                            src={values.media}
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
      </Grid>
    </>
  );
}
