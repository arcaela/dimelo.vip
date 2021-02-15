import Layout from '~/views/layout'
import TitlePage from '~/components/TitlePage';

import firebase from '~/config/firebase';
import { makeStyles } from '@material-ui/core/styles';

import { useEffect, useState } from 'react';
import SelectSearch from '~/components/SelectSearch';
import Grid from '@material-ui/core/Grid';
import CardRed from '~/components/CardRed';
import useAuth from '~/ServerLess/Hooks/useAuth';
import Loading from '~/components/Loading';

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


export default function AdminPage() {

  const grid = gridStyles();

  const user = useAuth()

  const [currentUser, setCurrentUser] = useState(false)

  const [ select, setSelect ] = useState('name');

  const [ searchValue, setSearchValue ] = useState('');

  const [users, setUsers] = useState([]);

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
    if(user && !currentUser){
      setCurrentUser(user)
    }
  }, [user, currentUser])


  useEffect(() => {
    const getUsers = async () => {
      if( !currentUser ) return;
      try {
        const leaders = firebase.firestore();

        const users = await leaders
          .collection('users')
          .where('voting_leader', '==', currentUser.uid)
          .where('role', '==', 'user')
          .get();

          setUsers(users.docs.map((e) => e.data()));
      } catch (e) {
        console.log(e);
      }
    };
    getUsers();
  }, [currentUser]);



  return (
    <Layout>
      <TitlePage title='Mi Red' />
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
          { users.map( user => (
            <Grid key={ user.uid } item xs={12} md={6}>
              <CardRed users={ user } />
            </Grid>
          )) }
          { ( users.length === 0 ) && <Loading />}
        </Grid>
      </div>
    </Layout>
  );
}