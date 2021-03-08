import React from 'react';
import {
  Dialog
} from '@material-ui/core';

export default function SimpleDialog(props) {
  const { onClose, open, children } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={open}
      fullWidth
      maxWidth='sm'
    >
      {children}
    </Dialog>
  );
}
