import React, { useContext, useState } from 'react';
import {
  Box,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import newsFireBase from './NewstFireBase';
import { TableContext } from './TableNews';
import { useHistory } from 'react-router-dom';

const uStyle = makeStyles((theme) => ({
  buttons: {
    padding: '.3rem',
    cursor: 'pointer',
  },
}));

function SimpleDialog(props) {
  const { onClose, open, id } = props;
  const [borrando, setBorrando] = useState(false);

  const { data, setData } = useContext(TableContext);

  const handleClose = () => {
    if (borrando) return;
    onClose();
  };

  const handlerDelete = async (id) => {
    setBorrando(true);
    try {
      await newsFireBase.deleteNews(id);
      setBorrando(false);
      handleClose();
      const newData = data.filter((data) => data.id !== id);
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={open}
    >
      <DialogTitle id='simple-dialog-title'>
        Esta acción es irreversible
      </DialogTitle>
      <List>
        <ListItem
          autoFocus
          button
          key={borrando ? 'borrando...' : 'borrar'}
          onClick={() => {
            handlerDelete(id);
          }}
        >
          <ListItemText color='danger' primary='Borrar' />
        </ListItem>
        <ListItem autoFocus button key='cancelar' onClick={() => handleClose()}>
          <ListItemText primary='Cancelar' />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function ActionsButton({ row }) {
  const classes = uStyle();

  const [open, setOpen] = useState(false);

  const router = useHistory();

  return (
    <>
      {open && (
        <SimpleDialog id={row} open={open} onClose={() => setOpen(!open)} />
      )}
      <Box display='flex'>
        <div className={classes.buttons}>
          <VisibilityIcon />
        </div>
        <div
          onClick={() => router.push('/admin/news/edit/' + row)}
          className={classes.buttons}
        >
          <img src='/images/edit.svg' alt='editar' />
        </div>
        <div onClick={() => setOpen(!open)} className={classes.buttons}>
          <img src='/images/trash.svg' alt='borrar' />
        </div>
      </Box>
    </>
  );
}
