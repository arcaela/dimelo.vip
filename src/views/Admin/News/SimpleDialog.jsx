import React from 'react';
import {
  Dialog,
  DialogTitle,
} from '@material-ui/core';

export default function SimpleDialog(props) {
  const { onClose, open, title, children } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={open}
    >
      <DialogTitle id='simple-dialog-title' onClose={handleClose}>
        {title}
      </DialogTitle>
      <div>
        {children}
      </div>
    </Dialog>
  );
}
