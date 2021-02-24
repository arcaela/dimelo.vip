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

// import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import FacebookIcon from '@material-ui/icons/Facebook';
//import MessageIcon from '@material-ui/icons/Message';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import LiderModal from './LiderModal';

import firebase from '../../../config/firebase.js';
import usePatron from '~/hooks/usePatron';

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
    marginLeft: 50
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
    direccion = '',
    email = '',
    movil = '',
    voting_point = '',
    name = '',
    lastname = '',
    uid = null,
  } = leader;

  useEffect(() => {
    const getLeaders = async () => {
      if (!uid) return;
      try {
        const leaders = firebase.firestore();

        const users = await leaders
          .collection('users')
          .where('voting_leader', '==', uid)
          .get();

        setFollowers(users.docs.map((e) => e.data()));
      } catch (e) {
        console.log(e);
      }
    };
    getLeaders();
  }, [uid]);

  return (
    <>
    <Card>
      <Grid container spacing={1}>
        <Grid className={classes.avatarContainer} item xs={2}>
          <Avatar
            className={classes.large}
            children={name ? name[0] : lastname[0]}
          />
        </Grid>
        <Grid item xs={10}>
          <CardHeader
            className={classes.header}
            title={` ${name} ${lastname} `}
            action={
              leader.role === 'admin' ?
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
                Dirección: {direccion}
              </Typography>
              <Typography color='textSecondary'>Teléfono : {movil}</Typography>
              <Typography color='textSecondary'>Email: {email}</Typography>
              <Typography color='textSecondary'>
                Punto de votación: {voting_point}
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
            <span className={ classes.iconContainer }></span>
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
