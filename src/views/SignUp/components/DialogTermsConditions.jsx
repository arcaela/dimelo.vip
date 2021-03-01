import React from 'react'

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
    Typography,
  } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
  });

export default React.memo(function DialogTermsConditions({ open, setOpen, ...props }) {
  const handleClose = () => setOpen(false);
  return (
    <Dialog open={open} {...props} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-labelledby='alert-dialog-slide-title' aria-describedby='alert-dialog-slide-description' >
      <DialogTitle id='alert-dialog-slide-title' style={{ textAlign: 'center' }} >
        <Typography component='span' variant='h5'>
          AVÍSO DE PRIVACIDAD
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-slide-description' component='div' >
          Dando cumplimiento a la{' '}
          <span style={{ fontWeight: 'bold', color: 'black' }}>
            Ley 1581 de 2012
          </span>{' '}
          y decretos reglamentarios, les informa a todos los titulares de
          datos personales insertos en el presente documento, que el uso ha
          sido realizado con previa autorización, preservando la protección de
          sus datos personales en la recolección, circulación y tratamiento
          para la(s) finalidad(es) que han sido autorizadas de acuerdo con la
          política de tratamiento y protección de datos personales que se
          encuentra a disposición, y/o solicitarla al correo electrónico{' '}
          <a href='mailto:info@dimelo.vip' rel='noreferrer'>
            info@dimelo.vip
          </a>
          <br />
          <br />
          <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
            ¿Nos autorizas el tratamiento de sus datos personales?
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary' variant='contained'>
          acepto
        </Button>
      </DialogActions>
    </Dialog>
  );
})