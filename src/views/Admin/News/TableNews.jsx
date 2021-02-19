import { CircularProgress, Box, Button, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useHistory } from 'react-router-dom';
import ActionsButton from './ActionsButton';
import FilterButton from './FilterButton';
import newsFireBase from './NewstFireBase';

const uStyle = makeStyles((theme)=>({
    button:{
        background: theme.palette.primary.dark,
        borderRadius: 4,
        padding: 8.5,
        color: '#fff',
        '&:hover':{
            background: theme.palette.primary.dark,
        }
    }
}))


const CustomProgress = () => {
  return (
    <Box textAlign='center'>
      <h1>Cargando las Noticias</h1>
      <CircularProgress />
    </Box>
  );
};

export default function TableNews() {

  const classes = uStyle();

  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [value, setValue] = useState('');

  const router = useHistory()

  const handleClear = () => {
    if (value) {
      setResetPaginationToggle(!resetPaginationToggle);
      setValue('');
    }
  };

  const columns = [
    {
      name: 'Titulo',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Tipo de Audiencia',
      selector: 'to',
      sortable: false,
    },
    {
      name: 'Tipo de personalidad',
      selector: 'perfil',
      sortable: false,
    },
    {
      name: 'Comuna',
      selector: 'comuna',
      sortable: false,
    },
    {
        cell: row  => <ActionsButton rows={row} />,
        button: true,
    },
  ];

  useEffect(() => {
    const getNews = async () => {
      try {
        const news = await newsFireBase.getNews();
        setRows(news);
        setPending(false);
      } catch (error) {
        console.log(error);
      }
    };
    getNews();
  }, []);

  const filterRow = rows.filter(
    (item) =>
      item.title && item.title.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <>
    <Box display="flex" justifyContent="space-between">
      <FilterButton
        buttonOnClick={ handleClear }
        valueInput={ value }
        onChangeInput={ (e) => setValue(e.target.value) }
      />
      <Button
      endIcon={<AddIcon />}
      onClick={ ()=> router.push('/admin/noticias/add') }
      className={ classes.button }>
        Agregar noticia
      </Button>
    </Box>
      <DataTable
        columns={ columns }
        data={ filterRow }
        progressPending={ pending }
        noDataComponent='No se encontraron noticias con ese titulo'
        progressComponent={ <CustomProgress /> }
        pagination
        paginationRowsPerPageOptions={[3, 15, 20, 25, 30]}
        paginationResetDefaultPage={resetPaginationToggle}
        persistTableHead
      />
    </>
  );
}
