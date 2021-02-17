import React from 'react'
import TitlePage from '~/components/TitlePage'
import { 
    Breadcrumbs, 
    Grid, 
    TextField, 
    Typography,
    makeStyles
} from '@material-ui/core';

import Autocomplete from '@material-ui/lab/Autocomplete';

const newsStyle = makeStyles((theme)=>({
    form:{
        marginBottom: 30,
        marginTop: 50
    }
}))

export default function AddNews() {

    const classes = newsStyle();

    const comuna = [
        {title: 'medellin', value: 'medellin'}
    ]

    const usersTypes = [
        {title: 'Líderes de primer nivel', value: 'leader'},
        {title: 'Líderes de celula', value: 'leader'},
        {title: 'Usuario', value: 'user'},
    ]


    return (
    <>
            <TitlePage title="Agregar noticia" />
            <Breadcrumbs>
                <Typography>Noticias</Typography>
                <Typography color="textPrimary">Agregar Noticia</Typography>
            </Breadcrumbs>
            <form className={ classes.form }>
                <Grid spacing={5} container justify="space-around">
                    <Grid item xs={ 12 } md={ 5 }>
                        <TextField label="Titulo de Noticias" fullWidth />
                    </Grid>
                    <Grid item xs={ 12 } md={ 5 }>
                        <TextField label="Tipo de Personalidad" fullWidth />
                    </Grid>
                    <Grid item xs={ 12 } md={ 5 }>
                        <Autocomplete
                            multiple
                            options={comuna}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                            <TextField {...params} label="Comuna" placeholder="Comuna" />
                            )}
                        />
                    </Grid>
                    <Grid item xs={ 12 } md={ 5 }>
                        <Autocomplete
                            multiple
                            options={usersTypes}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                            <TextField {...params} label="Enviar a" placeholder="Enviar a" />
                            )}
                        />
                    </Grid>
                </Grid>
            </form>
    </>
    )
}
