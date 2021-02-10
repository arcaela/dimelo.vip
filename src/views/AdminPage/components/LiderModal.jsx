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

import Delete from '../../../assets/images/trash.svg';

import AvatarImg from '../../../assets/images/avatar.jpg';
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
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function LiderModal({ open, setOpen }) {

  const classes = useCardLider();

  const centerModal = getModalStyle();

  const modalStyle = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal onClose={handleClose} open={open}>
      <div style={centerModal} className={modalStyle.paper}>
        <Card className={classes.container}>
          <div className={classes.avatarContainer}>
            <Avatar className={classes.large} src={AvatarImg} />
          </div>
          <div className={classes.cardContainer}>
            <div className={classes.pRelative}>
              <CardHeader title='Maria Perez' />
              <div className={classes.actionsHeader}>
                <IconButton>
                  <img src={Delete} alt='eliminar' />
                </IconButton>
                <IconButton onClick={() => setOpen(!open)}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
            <CardContent className={classes.pr}>
              <Typography color='textSecondary'>
                Dirección: Los Colores - Medellín
              </Typography>
              <Typography color='textSecondary'>
                Teléfono : +578715674877
              </Typography>
              <Typography color='textSecondary'>
                Email: maria125d@gmail.com
              </Typography>
              <Typography color='textSecondary'>
                Punto de votación: Escuela Bustamante
              </Typography>
              <Typography color='secondary'>
                Pensamiento introvertido
              </Typography>
            </CardContent>
          </div>
          <CardContent
            style={{
              paddingTop: 0,
            }}
            className={classes.pRelative}
          >
            <Typography
              className={classes.textModal}
              color='textPrimary'
              variant='h4'
              component='h4'
            >
              Red - 56 miembros
            </Typography>
            <List>
              <LiderCardModal key={1} />
              <LiderCardModal key={2} />
              <LiderCardModal key={3} />
            </List>
          </CardContent>
        </Card>
      </div>
    </Modal>
  );
}
