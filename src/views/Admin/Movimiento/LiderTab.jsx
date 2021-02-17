import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LiderCard from '../components/LiderCard';
import Loading from '~/components/Loading';

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
          { !leaders && <Loading /> }
          { ( leaders && leaders?.length > 0 ) && leaders.map( leader => (
              <Grid key={ leader.uid } item xs={12} md={6}>
                  <LiderCard leader={ leader } />
              </Grid>
          )) }
          { ( leaders?.length === 0 )  && (
              <Grid  item xs={12} >
                <h1 style={{
                  textAlign: 'center'
                }}>No hay Líderes Registrados</h1>
              </Grid>
          ) }
        </Grid>
    </div>
  );
}
