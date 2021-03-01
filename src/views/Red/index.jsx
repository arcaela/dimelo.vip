import Layout from '~/views/layout';
import TitlePage from '~/components/TitlePage';

import firebase from '~/config/firebase';
import { makeStyles } from '@material-ui/core/styles';

import { useEffect, useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import SelectSearch from '~/components/SelectSearch';
import useAuth from '~/ServerLess/Hooks/useAuth';
import Loading from '~/components/Loading';
import NewCard from '~/components/NewCard';
import Users from '~/ServerLess/Collections/Users';

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function AdminPage() {
  const grid = gridStyles();

  const user = useAuth();

  const [currentUser, setCurrentUser] = useState(false);

  const [select, setSelect] = useState('name');

  const [searchValue, setSearchValue] = useState('');

  const [users, setUsers] = useState(null);

  const isMountedRef = useRef(null);

  const search = async () => {
    const users = firebase.firestore();

    const arraySearch = searchValue
      .split(' ')
      .map((e) => e.toLocaleUpperCase());

    await users.collection('users').where(select, 'in', arraySearch).get();
  };

  const handlerChange = (e) => {
    setSelect(e.target.value);
  };

  const handlerInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filters = [
    {
      value: 'name',
      label: 'Por nombre',
    },
    {
      value: 'direccion',
      label: 'Por Dirección',
    },
    {
      value: 'patron',
      label: 'Por tipo de personalidad',
    },
    {
      value: 'voting_point',
      label: 'Por punto de votación',
    },
  ];

  useEffect(() => {
    if (user && !currentUser) {
      setCurrentUser(user);
    }
  }, [user, currentUser]);

  useEffect(() => {
    isMountedRef.current = true;
    const getUsers = async () => {
      if (!currentUser) return;
      try {
        if (isMountedRef.current) {
          const users = await Users.where(
            'leader',
            '==',
            currentUser.uid
          ).get();
          setUsers(users.docs.map((e) => e.data()));
        }
      } catch (e) {
        if (isMountedRef.current) {
          console.log(e);
        }
      }
    };
    getUsers();
    return () => (isMountedRef.current = false);
  }, [currentUser]);
  return (
    <Layout>
      <TitlePage title='Mi Red' />
      <div
        style={{
          marginTop: 30,
          marginBottom: 60,
        }}
      >
        <SelectSearch
          valueInput={searchValue}
          onChangeInput={handlerInputChange}
          valueSelect={select}
          onChangeSelect={handlerChange}
          buttonOnClick={search}
          values={filters}
        />
      </div>
      <div className={grid.root}>
        <Grid container spacing={3}>
          {users &&
            users?.length > 0 &&
            users.map((user) => (
              <Grid key={user.uid} item xs={12} md={6}>
                <NewCard users={user} />
              </Grid>
            ))}

          {!users && <Loading />}

          {users?.length === 0 && (
            <Grid item xs={12}>
              <h1
                style={{
                  textAlign: 'center',
                }}
              >
                No hay usuarios en su Red en este momento
              </h1>
            </Grid>
          )}
        </Grid>
      </div>
    </Layout>
  );
}
