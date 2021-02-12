import React from 'react';
import Modal from '@material-ui/core/Modal';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';

import { makeStyles } from '@material-ui/core/styles';
import { useCardLider } from './lider.styles';

import Delete from '../../../images/trash.svg';

import LiderCardModal from './LiderCardModal';



const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    maxWidth: 450,
    width: '100%',
    borderRadius: 10,
    backgroundColor: theme.palette.background.paper,
    '&:focus': {
      outline: 'none !important',
    },
  },
  list: {
    maxHeight: 216,
    position: 'relative',
    overflow: 'auto'
  }
}));

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    padding: '1rem',
  };
}

export default function LiderModal({ open, setOpen, followers, leader, patron }) {
  const classes = useCardLider();

  const centerModal = getModalStyle();

  const modalStyle = useStyles();

  const {
    direccion = '',
    email = '',
    movil = '',
    voting_point = '',
    name = '',
    lastname = '',
  } = leader;


  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Modal onClose={handleClose} open={open}>
      <div style={centerModal} className={modalStyle.paper}>
        <Card className={classes.container}>
          <div style={{
            display: 'flex'
          }}>
            <div className={classes.avatarContainer}>
              <Avatar className={classes.large} children={ name ? name[0] : lastname[0] } />
            </div>
            <div className={classes.cardContainer}>
              <div  className={classes.pRelative}>
                <CardHeader title={ `${name} ${lastname}` } />
                <div className={classes.actionsHeader}>
                  <IconButton>
                    <img src={Delete} alt='eliminar' />
                  </IconButton>
                  <IconButton onClick={() => setOpen(!open)}>
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
              <CardContent style={{
                paddingTop: 0 
              }} className={classes.pr}>
                <Typography color='textSecondary'>
                  Dirección: { direccion }
                </Typography>
                <Typography color='textSecondary'>
                  Teléfono : { movil }
                </Typography>
                <Typography color='textSecondary'>
                  Email: { email }
                </Typography>
                <Typography color='textSecondary'>
                  Punto de votación: { voting_point }
                </Typography>
                <Typography color='secondary'>
                  { patron && patron }
                </Typography>
              </CardContent>
            </div>
          </div>
          <CardContent
            style={{
              paddingTop: 0,
            }}
            className={ classes.pRelative }
          >
            <Typography
              className={classes.textModal}
              color='textPrimary'
              variant='h4'
              component='h4'
            >
              Red - { followers.length } miembros
            </Typography>
            <List className={ modalStyle.list } >
              { followers && followers.map(follower =>(
                <LiderCardModal key={ follower.uid } user={ follower } />
              ))}
              
            </List>
          </CardContent>
        </Card>
      </div>
    </Modal>
  );
}
