import { Grid, InputAdornment, makeStyles, TextField, Box, Button } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';

const uStyle = makeStyles((theme) => ({
  formControl: {
    marginBottom: 45,
    padding: '.45rem',
  },
}));

export default function Account() {
  const classes = uStyle();

  return (
    <form>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TextField
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
        <Box >
            <Button variant="contained" color="primary">
                Guardar
            </Button>
        </Box>
      </Grid>
    </form>
  );
}
