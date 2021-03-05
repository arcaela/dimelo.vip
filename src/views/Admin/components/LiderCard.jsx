import React, { useEffect, useState } from 'react';

import { 
  makeStyles,
  IconButton,
  Avatar,
  Typography,
  CardActions,
  CardContent,
  CardHeader,
  Card,
  Grid
} from '@material-ui/core';


import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import LiderModal from './LiderModal';

import { scopes } from '~/ServerLess';
import usePatron from '~/hooks/usePatron';
import SocialIcon from '~/components/SocialIcon';

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
  count:{
    borderRadius: 10
  },
  bottonIcon:{
    display: 'flex',
    alignItems: 'flex-end'
  }
}));

export default function LiderCard({ leader }) {

  const patron = usePatron(leader?.patron);

  const classes = styles({ color: patron.color });

  const [open, setOpen] = useState(false);

  const [followers, setFollowers] = useState(null);

  const handlerOpen = () => {
    if (followers.length === 0) return;
    setOpen(!open);
  };

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
    uid = null,
    social = null
  } = leader;

  useEffect(() => {
    const getLeaders = async () => {
      if (!uid) return;
      try {
        const users = await scopes.users.where('leader', '==', uid).get();
        setFollowers(users.docs.map((e) => e.data()));
      } catch (e) {
        console.log(e);
      }
    };
    getLeaders();
  }, [uid]);

  return (
    <>
    <Card style={{
      display: 'flex',
      height: '100%'
    }}>
      <Grid container spacing={1}>
        <Grid className={classes.avatarContainer} item xs={2}>
          <Avatar
            className={classes.large}
            children={fullname ? fullname[0] : ''}
          />
        </Grid>
        <Grid item xs={10}>
          <CardHeader
            className={classes.header}
            title={fullname}
            action={
              leader.rol === 0 ?
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
          <Grid container direction="row" component={ CardContent } className={classes.content}>
            <Grid item xs={ 9 }>
              <Typography color='textSecondary'>
                Dirección: {string}
              </Typography>
              <Typography color='textSecondary'>Teléfono : {movil}</Typography>
              <Typography color='textSecondary'>Email: {email}</Typography>
              <Typography color='textSecondary'>
                Punto de votación: {point}
              </Typography>    
            </Grid>
            <Grid className={ classes.bottonIcon } item xs={ 3 }>
                <IconButton onClick={ ()=>handlerOpen() } color="secondary" className={ classes.count } >
                  <PeopleAltIcon />
                  +{ followers?.length }
                </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={ classes.footer } item xs={12}>
          <CardActions className={ classes.actions }>
            <span className={ classes.iconContainer }>
              { social && Object.entries(social).map( link =>(
                <SocialIcon key={link[0]} type={link[0]} link={link[1]} className={classes.iconButton} />
              ))}
            </span>
            <IconButton className={ classes.perfil }>
              { leader?.patron ? patron.label : '' }
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>

      {open && (
        <LiderModal
          leader={leader}
          followers={followers}
          open={open}
          setOpen={setOpen}
          patron={patron.label}
        />
      )}
    </>
  );
}
