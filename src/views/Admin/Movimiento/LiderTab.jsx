import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LiderCard from '../components/LiderCard';

const gridStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));
export default function LiderTab({users=[]}) {
  const grid = gridStyles();
  return (<div className={grid.root}>
    <Grid container spacing={3}>
      {!users.length?(<Grid  item xs={12} >
        <h1 style={{textAlign: 'center'}}>No hay líderes registrados.</h1>
      </Grid>):users.map(user=>(
        <Grid key={ user.uid } item xs={12} md={6}>
          <LiderCard leader={ user } />
        </Grid>
      ))}
    </Grid>
  </div>);
}
