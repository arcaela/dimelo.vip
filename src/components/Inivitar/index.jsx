import {
  Button,
  Modal,
  makeStyles,
  CardHeader,
  Card,
  CardContent,
  TextareaAutosize,
  CircularProgress,
  CardActions,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import api from '~/ServerLess/api';
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
    }
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
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState('');
  const user = useAuth()

  const handleClose = () => {
    setOpen(false);
  };

  const handlerSend = () => {
    setError(null);

    if (value.length === 0) {
      setError('Ingrese Algun Correo');
      return;
    }

    const emails = value.split(',');

    for (let i = 0; i < emails.length; i++) {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            emails[i].trim()
        )
      ) {
      } else {
        setError('Tiene un email invalido');
        return;
      }
    }
    
    setLoading(!loading);

    api('invitations/create', {user, emails}).then(e=>{
      setTimeout(() => {
          setSending(true)
          setLoading(false)
      }, 3000);
      setTimeout(() => {
          setOpen(false)
      }, 5000);
    }).catch(e=> alert(e.message))

  };

  const centerModal = getModalStyle();

  const modalStyle = useStyles();

  useEffect(() => {
    setSending(false)
    setValue('')
  }, [open])

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
              subheader={error ? error : 'Ingresa correos separados por coma'}
            />
            <CardContent>
              {( loading && !sending )&& (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <CircularProgress />
                  <span>Enviando</span>
                </div>
              )}
              {sending && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <h3>Enviado Con éxito</h3>
                </div>
              )}
              {(!loading && !sending) && (
                <TextareaAutosize
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  aria-label='minimum height'
                  rowsMin={1}
                  placeholder='Ejemplo: invitado@gmail.com, dimelo@gmail.com'
                />
              )}
            </CardContent>
            <CardActions style={{
              justifyContent: 'center'
            }}>
              <Button
                className={modalStyle.button}
                disabled={ loading ? true : false }
                onClick={() => handlerSend()}
                size='small'
                color='primary'
              >
                Enviar
              </Button>
            </CardActions>
          </Card>
        </div>
      </Modal>
    </span>
  );
}
