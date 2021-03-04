import {
  Grid,
  makeStyles,
  InputAdornment,
  IconButton,
  Input,
  FormControl,
  InputLabel,
  Box,
  Button,
  FormHelperText,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';

import { api } from '~/ServerLess';

const uStyle = makeStyles((theme) => ({
  formControl: {
    marginTop: 20,
    padding: '.45rem',
  },
  w100: {
    '@media(max-width:599px)': {
      minWidth: '100%',
    },
  },
}));

export default function PassWord() {
  const classes = uStyle();

  const [loading, setLoading] = useState(false);

  const [shows, setShows] = useState({
    showOldPassword: false,
    showPassword: false,
    showRepeatPassword: false,
  });

  const [values, setValues] = useState({
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
  });

  const [error, setError] = useState({
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
  });

  const handleClickShowPassword = (field) => {
    setShows({ ...shows, [field]: !shows[field] });
  };

  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({ currentPassword: '', newPassword: '', repeatPassword: '' });

    for (const value in values) {
      const field = values[value].trim();
      if (field.length === 0) {
        setError((prev) => ({
          ...prev,
          [value]: 'Este Campo No Puede Estar Vacio',
        }));
      }
    }

    if (values.newPassword.trim() !== values.repeatPassword.trim()) {
      setError((prev) => ({
        ...prev,
        newPassword: 'Las Contrase#as deben coincidir',
        repeatPassword: 'Las Contrase#as deben coincidir',
      }));
    }

    let count = 0;

    for (const e in error) {
      if (error[e].trim().length > 0) {
        count += 1;
      }
    }

    const verify = count === 0 ? true : false;

    try {
      if (verify) {
        await api('auth/update', { password: values.onClicknewPassword });
        console.log('actualizado');
        setLoading(false);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <h2>Cambiar Contraseña</h2>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <FormControl
            className={classes.w100}
            error={error.currentPassword ? true : false}
          >
            <InputLabel htmlFor='contrasena'>Contraseña Actual</InputLabel>
            <Input
              type={shows.showOldPassword ? 'text' : 'password'}
              className={classes.formControl}
              fullWidth
              id='contrasena'
              name='currentPassword'
              value={values.currentPassword}
              onChange={(e) => handleOnChange(e)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => handleClickShowPassword('showOldPassword')}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {shows.showOldPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {error.currentPassword && (
              <FormHelperText>{error.currentPassword}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
          <FormControl
            className={classes.w100}
            error={error.newPassword ? true : false}
          >
            <InputLabel htmlFor='nueva-contrasena'>Contraseña Nueva</InputLabel>
            <Input
              type={shows.showPassword ? 'text' : 'password'}
              id='nueva-contrasena'
              className={classes.formControl}
              fullWidth
              label='Nueva contraseña'
              name='newPassword'
              value={values.newPassword}
              onChange={(e) => handleOnChange(e)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => handleClickShowPassword('showPassword')}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {shows.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {error.newPassword && (
              <FormHelperText>{error.newPassword}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl
            className={classes.w100}
            error={error.repeatPassword ? true : false}
          >
            <InputLabel htmlFor='repetir-contrasena'>
              Repetir Contraseña
            </InputLabel>
            <Input
              type={shows.showRepeatPassword ? 'text' : 'password'}
              id='repetir-contrasena'
              className={classes.formControl}
              fullWidth
              label='Repetir contraseña'
              name='repeatPassword'
              value={values.repeatPassword}
              onChange={(e) => handleOnChange(e)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() =>
                      handleClickShowPassword('showRepeatPassword')
                    }
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {shows.showRepeatPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {error.repeatPassword && (
              <FormHelperText>{error.repeatPassword}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Box
          style={{
            width: '100%',
            marginTop: 40,
          }}
          display='flex'
          justifyContent='flex-end'
        >
          <Button
            type='submit'
            disabled={loading}
            variant='contained'
            color='primary'
          >
            {loading ? 'Actualizando' : 'Guardar'}
          </Button>
        </Box>
      </Grid>
    </form>
  );
}
