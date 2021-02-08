import React from 'react';

import CardRed from '../../components/CardRed';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavBarRed from '../../components/NavBarRed';
import Layout from '../../components/Layout';

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function RedPage(  { ...req }  ) {

    const { match } = req;

    const grid = gridStyles();

    return (
    <Layout path={ match.path }>
          <NavBarRed />
          <div className={ grid.root }>
            <Grid container spacing={3} >
              <Grid key={1} item xs={12} sm={6}>
                <CardRed />
              </Grid>
              <Grid key={2} item xs={12} sm={6}>
                <CardRed />
              </Grid>
              <Grid key={3} item xs={12} sm={6}>
                <CardRed />
              </Grid>
              <Grid key={4} item xs={12} sm={6}>
                <CardRed />
              </Grid>
            </Grid>
          </div>
    </Layout>

    );

}
