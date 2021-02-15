import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Loading from '~/components/Loading';
import NewCard from '~/components/NewCard';

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function UserTab({users}) {
    const grid = gridStyles();
    return (
      <div className={grid.root}>
          <Grid container spacing={3}>
          { ( users.length === 0 ) && <Loading />}
          { users.map( user => (
              <Grid key={ user.uid } item xs={12} md={6}>
                  <NewCard users={ user } />
              </Grid>
          )) }
          </Grid>
      </div>
    );
}
