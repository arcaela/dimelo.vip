import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LiderCard from '../components/LiderCard';

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function LiderTab({leaders}) {
  const grid = gridStyles();
  return (
    <div className={grid.root}>
        <Grid container spacing={3}>
        { leaders.map( leader => (
            <Grid key={ leader.uid } item xs={12} md={6}>
                <LiderCard leader={ leader } />
            </Grid>
        )) }
        </Grid>
    </div>
  );
}
