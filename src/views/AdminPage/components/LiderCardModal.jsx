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
    cursor: 'pointer'
  },
  perfil:{
    position: 'absolute',
    right: 0,
    lineHeight: 1.5,
    padding: 10,
    color: theme.palette.secondary.dark
  }
}));

export default function LiderCardModal({ user }) {

  const classes = useStyles();

  const{
    name = '',
    lastname = '',
    voting_point = ''
  } = user;

  return (
    <ListItem alignItems='flex-start' className={classes.container}>
        <ListItemAvatar>
          <Avatar alt='Remy Sharp' children={ name ? name[0] : lastname[0] } />
        </ListItemAvatar>
        <ListItemText
          primary={ `${name} ${lastname}` }
          secondary={
            <>
              <Typography
                component='span'
                variant='body2'
                color='textSecondary'
              >
                Punto de votación: { voting_point }
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
