import {
  Button,
  Modal,
  makeStyles,
  CardHeader,
  Card,
  CardContent,
  CardActions,
  TextField,
} from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import React, { useEffect, useState } from 'react';
import useAuth from '~/ServerLess/Hooks/useAuth';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    maxWidth: 450,
    minHeight: 200,
    width: '100%',
    borderRadius: 10,
    backgroundColor: theme.palette.background.paper,
    '&:focus': {
      outline: 'none !important',
    },
    '& textarea': {
      width: '100%',
    },
    textAlign: 'center'
  },
  list: {
    maxHeight: 216,
    position: 'relative',
    overflow: 'auto',
  },
  button:{
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover':{
      backgroundColor: theme.palette.secondary.dark,
      color: '#fff',
    },
    paddingLeft: 10,
    paddingRight: 10
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

export default function Invitar() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('https://dimelo.vip/signup/')

  const handleClose = () => {
    setOpen(false);
  };

  //const user = useAuth()

  //console.log(user);

  const centerModal = getModalStyle();

  const modalStyle = useStyles();

  const enviarInvitacion = ()=>{
    window.open('https://api.whatsapp.com/send?text=Invitacion%20a%20dimelo.vip ' + value, '_blank')
  }

  return (
    <span>
      <Button
        onClick={() => setOpen(!open)}
        variant='outlined'
        color='secondary'
      >
        Invitacion
      </Button>
      <Modal onClose={handleClose} open={open}>
        <div style={centerModal} className={modalStyle.paper}>
          <Card>
            <CardHeader
              title='Invita a nuevos integrantes a tu red'
            />
            <CardContent>
            <TextField
            fullWidth
            label="Enlace de invitacion"
            id="margin-none"
            value={value}
            defaultValue="https://dimelo.vip/signup/"
            helperText="Copie su enlace de invitacion"
            />  
            </CardContent>
            <CardActions style={{
              justifyContent: 'center'
            }}>
              <Button
                className={modalStyle.button}
                onClick={()=>enviarInvitacion()}
                size='small'
                color='primary'
                endIcon={<WhatsAppIcon />}
              >
                Compartir
              </Button>
            </CardActions>
          </Card>
        </div>
      </Modal>
    </span>
  );
}
