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
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';

const uStyle = makeStyles((theme) => ({
  formControl: {
    marginBottom: 45,
    padding: '.45rem',
  },
}));

export default function PassWord() {

  const classes = uStyle();

  const [shows, setShows] = useState({
    showOldPassword: false,
    showPassword: false,
    showRepeatPassword: false,
  });

  const handleClickShowPassword = (field) => {
    setShows({ ...shows, [field]: !shows[field] });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <h2>Cambiar Contraseña</h2>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <InputLabel htmlFor='contrasena'>Contraseña anterior</InputLabel>
            <Input
              type={shows.showOldPassword ? 'text' : 'password'}
              className={classes.formControl}
              fullWidth
              id='contrasena'
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => handleClickShowPassword('showOldPassword')}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    { shows.showOldPassword ? <Visibility /> : <VisibilityOff /> }
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <InputLabel htmlFor='nueva-contrasena'>
              Contraseña anterior
            </InputLabel>
            <Input
              type={shows.showPassword ? 'text' : 'password'}
              id='nueva-contrasena'
              className={classes.formControl}
              fullWidth
              label='Nueva contraseña'
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => handleClickShowPassword('showPassword')}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    { shows.showPassword ? <Visibility /> : <VisibilityOff /> }
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <InputLabel htmlFor='repetir-contrasena'>
              Contraseña anterior
            </InputLabel>
            <Input
              type={shows.showRepeatPassword ? 'text' : 'password'}
              id='repetir-contrasena'
              className={classes.formControl}
              fullWidth
              label='Repetir contraseña'
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
          </FormControl>
        </Grid>
        <Box style={{
          width: '100%'
        }} display="flex" justifyContent="flex-end" >
            <Button variant="contained" color="primary">
                Guardar
            </Button>
        </Box>
      </Grid>
    </form>
  );
}
