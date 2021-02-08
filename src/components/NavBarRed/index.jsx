import React, { useState } from 'react'


import Button from '@material-ui/core/Button';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';
import { BootstrapInput, useNavBarRed, BootstrapSelect } from './navBarRed.styles';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';




export default function NavBarRed() {

    const classes = useNavBarRed()

    const [filtro, setFiltro] = useState("nombre")

    return (
        <div className={ classes.container }>

            <div className={ classes.search }>

                <div className={  classes.mr  }>
                    <BootstrapInput
                    placeholder="Buscar"
                    />
                    <Select
                        input={ <BootstrapSelect /> }
                        value={ filtro }
                        onChange={ e => setFiltro( e.target.value ) }
                    >
                        <MenuItem value="nombre">Por Nombre</MenuItem>
                        <MenuItem value="direccion">Por Dirección</MenuItem>
                        <MenuItem value="personalidad">Por Tipo de Personalidad</MenuItem>
                        <MenuItem value="votacion">Por Punto de Votacion</MenuItem>
                    </Select>
                </div>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={ classes.noShadow }
                >
                    <SearchIcon />
                </Button>
            </div>

            <div>
                <Button
                variant="contained"
                color="primary"
                size="large"
                className={ classes.noShadow }
                endIcon={ <PersonAddIcon /> }
                >
                Agregar nuevo
                </Button>
            </div>

      </div>
    )
}
