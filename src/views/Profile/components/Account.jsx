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
import React, { useState, useEffect } from 'react';
import { omit } from 'lodash';
import { scopes, useAuth } from '~/ServerLess';

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
    social:{
      facebook: '',
      instagram: '',
      twitter: '',
    }
  });

  useEffect(() => {
    if (account) {
      const data = omit(account, ['birthday','cedula','family','followers','fullname','leader','locked','rol','uid','voting'])
      setValues( { ...values, ...data } );
    }
  }, [values, account]);

  const handleSocilLink = (e)=>{
    setValues({
      ...values,
      social:{
        ...values.social,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleChange = (e)=>{
    setValues({
      ...values,
        [e.target.name]: e.target.value
    })
  }

  const handleAddress = ( e )=>{
    setValues({
      ...values,
      [e.target.name]:{ ...values.address, string : e.target.value }
    })
  }

  const handleSubmit = async ( e ) => {
    e.preventDefault()

    try {
      await scopes.users.doc(account.uid).update(values)
      console.log('Me actualice')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid style={{
          marginBottom: 40,
          display: 'none'
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
            name="email"
            fullWidth
            label='Correo electrónico'
            readOnly={ true }
            disabled={ true }
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
            name="address"
            onChange={ e=> handleAddress(e) }
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
            onChange={ e=> handleChange(e) }
            name="movil"
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
            className={ classes.formControl }
            fullWidth
            value={ values.social.facebook }
            onChange={ e=> handleSocilLink(e) }
            name="facebook"
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
            value={values.social.instagram}
            name="instagram"
            onChange={ e=> handleSocilLink(e) }
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
            value={values.social.twitter}
            name="twitter"
            onChange={ e=> handleSocilLink(e) }
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
          <Button type="submit" variant='contained' color='primary'>
            Guardar
          </Button>
        </Box>
      </Grid>
    </form>
  );
}
