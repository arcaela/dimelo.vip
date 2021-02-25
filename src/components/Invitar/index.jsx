import {
  Button,
  Modal,
  makeStyles,
  CardHeader,
  Card,
  CardContent,
  CardActions,
  TextField,
  IconButton
} from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import React, { useEffect, useState, useRef } from 'react';

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

export default function Invitar({ auth }) {
  const [open, setOpen] = useState(false);
  const [copy, setCopy] = useState(false)
  const [value, setValue] = useState('')
  const inputRef = useRef()

  const handleClose = () => {
    setOpen(false);
  };

  const centerModal = getModalStyle();

  const modalStyle = useStyles();

  useEffect(() => {
    if(value.length <= 0 && auth.auth){
      setValue('https://dimelo.vip/signup/'  + window.btoa(auth.auth.dni))
    }
  }, [auth])

  const enviarInvitacion = ()=>{
    window.open('https://api.whatsapp.com/send?text=Invitacion%20a%20dimelo.vip ' + value, '_blank')
  }

  const copiarEnlace = ()=>{
    inputRef.current.querySelector('input').select()
    document.execCommand("copy")
    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 2000);
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
            ref={inputRef}
            fullWidth
            label="Enlace de invitacion"
            id="margin-none"
            value={value}
            defaultValue="https://dimelo.vip/signup/"
            helperText="Copie su enlace de invitacion"
            readonly
            />  
            </CardContent>
            <CardActions style={{
              justifyContent: 'center'
            }}>
              <Button
                className={modalStyle.button}
                onClick={()=>copiarEnlace()}
                size='small'
                color='primary'
                endIcon={<FileCopyIcon />}
              >
                {copy ? 'Copiado' : 'Copiar'}
              </Button>
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
