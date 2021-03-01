import {
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
  Box,
  Button
} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import React, { useEffect, useState } from 'react';
import useAuth from '~/ServerLess/Hooks/useAuth';

const uStyle = makeStyles((theme) => ({
  formControl: {
    marginBottom: 45,
    padding: '.45rem',
  },
}));

export default function Account() {
  const classes = uStyle();
  const account = useAuth();

  const [values, setValues] = useState({
    email: '',
    address: {
      string: '',
    },
    movil: '',
    facebook: '',
    instagram: '',
    twitter: '',
  });

  useEffect(() => {
    if (account) {
      setValues((v) => {
        const data = Object.assign(v, account);
        console.log('data', data);
        return data;
      });
    }
  }, [account]);

  return (
    <form>
      <Grid container>
        <Grid style={{
          marginBottom: 40
        }} container>
          <Grid item xs={12} sm={3}>

          </Grid>
          <Grid item xs={12} sm={3}>
              <Button color="primary" variant="contained" >
                Subir foto
              </Button>
          </Grid>
          <Grid item xs={12} sm={3}>
              <Button style={{
                color: 'red',
                borderColor: 'red'
              }} variant="outlined">
                Remover
              </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={values.email}
            className={classes.formControl}
            fullWidth
            label='Correo electrónico'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={values.address.string}
            className={classes.formControl}
            fullWidth
            label='Dirección'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PlaceIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={values.movil}
            className={classes.formControl}
            fullWidth
            label='Teléfono'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PhoneAndroidIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.formControl}
            fullWidth
            value={values.facebook}
            label='Facebook'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <FacebookIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.formControl}
            fullWidth
            value={values.instagram}
            label='Instagram'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <InstagramIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.formControl}
            fullWidth
            value={values.twitter}
            label='Twitter'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <TwitterIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Box
          style={{
            width: '100%',
          }}
          display='flex'
          justifyContent='flex-end'
        >
          <Button variant='contained' color='primary'>
            Guardar
          </Button>
        </Box>
      </Grid>
    </form>
  );
}
