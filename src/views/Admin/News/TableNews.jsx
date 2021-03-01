import { CircularProgress, Box, Button, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { createContext, useEffect, useState } from 'react';
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

export const TableContext = createContext();

const CustomProgress = () => {
  return (
    <Box textAlign='center'>
      <h1>Cargando las Noticias</h1>
      <CircularProgress />
    </Box>
  );
};

const Audiencia = ({row}) => {
  const texto = (tipo) => {
    if(tipo === 1){
      return 'Lider de primer nivel'
    }
    if(tipo === 2){
      return 'Lider de celula'
    }
    if(tipo === 3){
      return 'Usuario'
    }
  }
  return (<span>{texto(row.rol)}</span>)
}

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
      cell: row  => <Audiencia row={ row } />,
      button: true,
    },
    {
      name: 'Tipo de personalidad',
      selector: 'perfil',
      sortable: false,
    },
    // {
    //   name: 'Comuna',
    //   selector: 'localidad',
    //   cell: row => row.localidad,
    //   sortable: false,
    // },
    {
        cell: row  => <ActionsButton row={row.id} />,
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
    <TableContext.Provider
      value={{
        data: rows,
        setData:setRows
      }}
    >
      <Box display="flex" mb={ 3 } justifyContent="space-between">
        <FilterButton
          buttonOnClick={ handleClear }
          valueInput={ value }
          onChangeInput={ (e) => setValue(e.target.value) }
        />
        <Button
        style={{
          paddingRight: 15,
          paddingLeft: 15
        }}
        endIcon={<AddIcon />}
        onClick={ ()=> router.push('/admin/news/add') }
        className={ classes.button }>
          Agregar noticia
        </Button>
      </Box>
        <DataTable
          columns={ columns }
          data={ filterRow }
          progressPending={ pending }
          noDataComponent='No se encontraron noticias'
          progressComponent={ <CustomProgress /> }
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          persistTableHead
        />
    </TableContext.Provider>
    </>
  );
}
