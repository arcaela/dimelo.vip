import TitlePage from '../../components/TitlePage';
import Layout from '../layout';

import firebase from '../../config/firebase';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LiderCard from './components/LiderCard';
import { useEffect, useState } from 'react';

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


export default function AdminPage() {
  const grid = gridStyles();

  const [ leaders, setLeaders ] = useState([])

  useEffect(() => {
    const getLeaders = async () => {
      try {
        const leaders = firebase.firestore();

        const users = await leaders.collection('users').where('role', '==', 'leader').get();

        setLeaders( users.docs.map( e =>e.data() ) )

      } catch (e) {
        console.log(e)
      }
    }
    getLeaders();
  }, [])


  return (
    <Layout>
      <TitlePage title='Lideres de primer nivel' />
      <div className={grid.root}>
        <Grid container spacing={3}>
          { leaders.map( leader => (
            <Grid key={ leader.uid } item xs={12} md={6}>
              <LiderCard leader={ leader } />
            </Grid>
          )) }
        </Grid>
      </div>
    </Layout>
  );
}
