import TitlePage from '../../components/TitlePage';
import Layout from '../layout';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LiderCard from './components/LiderCard';

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function AdminPage() {
  const grid = gridStyles();

  return (
    <Layout>
      <TitlePage title='Lideres de primer nivel' />
      <div className={grid.root}>
        <Grid container spacing={3}>
          <Grid key={1} item xs={12} md={6}>
            <LiderCard />
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
