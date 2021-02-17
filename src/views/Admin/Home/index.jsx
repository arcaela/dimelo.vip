
import TitlePage from '../../../components/TitlePage';
import firebase from '../../../config/firebase';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LiderCard from '../components/LiderCard';
import React, { useEffect, useState } from 'react';
import SelectSearch from '~/components/SelectSearch';
import Loading from '~/components/Loading';

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


export default function AdminPage() {

  const grid = gridStyles();

  const [ leaders, setLeaders ] = useState(null);

  const [ select, setSelect ] = useState('name');

  const [ searchValue, setSearchValue ] = useState('');

  const search = async () => {
    const users = firebase.firestore();

    const arraySearch = searchValue.split(' ').map( e=> e.toLocaleUpperCase() );
 
    await users.collection('users')
               .where(select, 'in', arraySearch )
               .get()
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
    <>
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
    </>
  );
}
