import React from 'react';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Avatar,
  makeStyles,
  IconButton,
  Typography,
} from '@material-ui/core';

import usePatron from '~/hooks/usePatron';
import SocialIcon from '../SocialIcon';


const styles = makeStyles((theme) => ({
  header: {
    paddingBottom: 0,
    '& .MuiCardHeader-title': {
      fontSize: 18,
      color: theme.palette.primary.main,
    },
  },
  content: {
    paddingTop: 0,
  },
  large: {
    width: '70px',
    height: '70px',
  },
  avatarContainer: {
    paddingTop: '26px !important',
    paddingLeft: '26px !important',
    display: 'flex',
    justifyContent: 'center',
  },
  perfil: {
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: '10px 0 0 0',
    background: (props) =>
      props?.color ? props.color : theme.palette.secondary.dark,
    marginLeft: 'auto',
    color: '#fff',
    '&:hover': {
      background: (props) =>
        props?.color ? props.color : theme.palette.secondary.dark,
      color: '#fff',
    },
  },
  actions: {
    padding: 0,
    justifyContent: 'space-between'
  },
  footer: {
    borderTop: '1px solid #F1F1F3',
    paddingTop: '0 !important',
    minHeight: 46,
    maxHeight: 46,
    overflow: 'hidden'
  },
  iconContainer: {
    marginLeft: 20
  },
  iconButton: {
    padding: 8,
  },
}));

export default function NewCard({ users }) {
  const patron = usePatron(users?.patron);

  const classes = styles({ color: patron.color });

  const {
    email = '',
    movil = '',
    voting : {
      point = ''
    },
    address:{
      string = ''
    },
    fullname = '',
    social = null,
    photoURL = null
  } = users;

  return (
    <Card  style={{
      display: 'flex',
      height: '100%'
    }}>
      <Grid container spacing={1}>
        <Grid className={classes.avatarContainer} item xs={2}>
        { photoURL ?
            <Avatar
            className={classes.large}
            src={ photoURL }
            /> 
            : 
            <Avatar
              className={classes.large}
              children={fullname ? fullname[0] : ''}
              />
          }
        </Grid>
        <Grid item xs={10}>
          <CardHeader
            className={classes.header}
            title={fullname}
            action={
              users.rol === 0 ?
              <>
                <IconButton>
                  <img src='/images/edit.svg' alt='' />
                </IconButton>
                <IconButton>
                  <img src='/images/trash.svg' alt='' />
                </IconButton>
              </>
              : ''
            }
          />
          <CardContent className={classes.content}>
            <Typography color='textSecondary'>
              Dirección: {string}
            </Typography>
            <Typography color='textSecondary'>Teléfono : {movil}</Typography>
            <Typography color='textSecondary'>Email: {email}</Typography>
            <Typography color='textSecondary'>
              Punto de votación: { point }
            </Typography>
          </CardContent>
        </Grid>
        <Grid className={ classes.footer } item xs={12}>
          <CardActions className={ classes.actions }>
            <span className={ classes.iconContainer }>
            { social && Object.entries(social).map( link =>(
                <SocialIcon key={link[0]} type={link[0]} link={link[1]} className={classes.iconButton} />
              ))}
            </span>
            <IconButton className={ classes.perfil }>
              { users?.patron ? patron.label : '' }
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
