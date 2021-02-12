import TitlePage from '../../components/TitlePage';

import firebase from '../../config/firebase';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LiderCard from './components/LiderCard';
import { useEffect, useState } from 'react';
import SelectSearch from '~/components/SelectSearch';
import Layout from '../layout';

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


export default function AdminPage() {

  const grid = gridStyles();

  const [ leaders, setLeaders ] = useState([]);

  const [ select, setSelect ] = useState('name');

  const [ searchValue, setSearchValue ] = useState('');

  const search = async () => {
    const users = firebase.firestore();

    const arraySearch = searchValue.split(' ').map( e=> e.toLocaleUpperCase() );

    console.log({ select, arraySearch, searc: searchValue.toLocaleUpperCase() })
      
    const result= await users.collection('users')
                              .where(select, 'in', arraySearch )
                              .get()
  
    console.log(  result.docs.map( e => e.data() ) )

  }


  const handlerChange = (e) => {
    setSelect(e.target.value)
  }

  const handlerInputChange = (e)=>{
    setSearchValue(e.target.value)
  }
  
  const filters = [
    {
      value: 'name',
      label: 'Por nombre'
    },
    {
      value: 'direccion',
      label: 'Por Dirección'
    },
    {
      value: 'patron',
      label: 'Por tipo de personalidad'
    },
    {
      value: 'voting_point',
      label: 'Por punto de votación'
    }
  ]

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
    <Layout middleware={['auth']}>
      <TitlePage title='Lideres de primer nivel' />
      <div style={{
        marginTop: 30,
        marginBottom: 60
      }}>
        <SelectSearch
        valueInput={ searchValue }
        onChangeInput={ handlerInputChange }

        valueSelect={ select }
        onChangeSelect={ handlerChange }

        buttonOnClick={ search }
        
        values={ filters } 
        />
      </div>
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
