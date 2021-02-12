import React from 'react';
import { makeStyles } from '@material-ui/core';

const useLoading = makeStyles((theme) => ({
  container:{
      width: '100%',
      height: '100%'
  },
  loading: {
    width: 300,
    height: 300,
    margin: 'auto',
    background: 'url(/images/brand.svg) no-repeat center /200px',
    animation: '$pulsate 2s infinite',
    '& *': { display: 'none' },
  },
  '@keyframes pulsate': {
    '0%': { opacity: 0.4 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0.4 },
  },
}));

export default function Loading() {
  const classes = useLoading();
  return <div className={ classes.container }><div className={classes.loading}></div></div> ;
}
