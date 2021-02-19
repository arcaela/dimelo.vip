import { Button, CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  button: {
    background: theme.palette.secondary.main,
    color: '#fff',
  },
  buttonProgress: {
    background: theme.palette.secondary.main,
    color: '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function ButtonLoading({
  loading,
  value,
  variant,
  color,
  type,
}) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Button
        type={type}
        variant={variant}
        color={color}
        className={classes.button}
      >
        {value}
      </Button>
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
}
