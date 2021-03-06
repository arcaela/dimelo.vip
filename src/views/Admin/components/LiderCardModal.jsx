import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import usePatron from '~/hooks/usePatron';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    position: 'relative',
    cursor: 'pointer'
  },
  perfil:{
    lineHeight: 1.5,
    color: theme.palette.secondary.dark
  }
}));

export default function LiderCardModal({ user }) {

  const patron = usePatron( user?.patron )

  const classes = useStyles();

  const{
    fullname = '',
    voting : {
      point = ''
    },
  } = user;

  return (
    <ListItem alignItems='flex-start' className={classes.container}>
        <ListItemAvatar>
          <Avatar alt='Remy Sharp' children={ fullname ? fullname[0] : '' } />
        </ListItemAvatar>
        <div className="">
          <ListItemText
            primary={ fullname }
          />
          {user?.patron && <div className={ classes.perfil } >
              {patron.label}
          </div>}
          <Typography
            component='span'
            variant='body2'
            color='textSecondary'
          >
              Punto de votación: { point }
          </Typography>
        </div>
    </ListItem>
  );
}
