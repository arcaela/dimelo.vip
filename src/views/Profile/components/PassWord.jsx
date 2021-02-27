import { Grid, makeStyles, InputAdornment, IconButton, Input, FormControl, InputLabel } from '@material-ui/core';
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

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
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
            <InputLabel htmlFor="contrasena">Contraseña anterior</InputLabel>
          <Input
            type={values.showPassword ? 'text' : 'password'}
            className={classes.formControl}
            fullWidth
            labelWidth={70}
            id="contrasena"
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
          <Input
            type='password'
            className={classes.formControl}
            fullWidth
            label='Nueva contraseña'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            type='password'
            className={classes.formControl}
            fullWidth
            label='Repetir contraseña'
          />
        </Grid>
      </Grid>
    </form>
  );
}
