import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  makeStyles,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    position: 'relative',
    curso: 'pointer'
  },
  perfil:{
    position: 'absolute',
    right: 0,
    lineHeight: 1.5,
    padding: 10,
    color: theme.palette.secondary.dark
  }
}));

export default function LiderCardModal() {

  const classes = useStyles();

  return (
    <ListItem alignItems='flex-start' className={classes.container}>
        <ListItemAvatar>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        </ListItemAvatar>
        <ListItemText
          primary='Pedro Perez'
          secondary={
            <>
              <Typography
                component='span'
                variant='body2'
                color='textSecondary'
              >
                Punto de votación: Escuela Bustamante
              </Typography>
            </>
          }
        />
        <div className={ classes.perfil }>
            Pensamiento extrovertido
        </div>
    </ListItem>
  );
}
