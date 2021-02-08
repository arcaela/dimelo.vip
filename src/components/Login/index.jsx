import React from 'react'
import FormControl from '@material-ui/core/FormControl'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { loginStyles } from './login.styles';

export default function Login() {

    const loginStyle = loginStyles()

    const handlerSubmit = (e) => {
        e.preventDefault()

        console.log('hola')

    }

    return (
        <div className={  loginStyle.container }>
            <h2 className={ loginStyle.title }>Iniciar sesión</h2>
            <form onSubmit={ e => handlerSubmit(e) }>

                <FormControl 
                    className={loginStyle.formControl}
                >
                    <TextField 
                    id="user"
                    name="user"
                    variant="outlined"
                    label="Usuario" />
                </FormControl>

                <FormControl
                    className={loginStyle.formControl}
                >
                    <TextField 
                    id="password"
                    name="password"
                    variant="outlined"
                    type="password"
                    label="Contraseña" />
                </FormControl>

                <FormControl
                    className={ `${ loginStyle.formControl } ${ loginStyle.ps }` }
                >
                    <FormControlLabel
                    control={<Checkbox />}
                    label="Recordarme"
                    />
                    <span className={ loginStyle.p }>
                        Olvide mi contraseña
                    </span>
                </FormControl>
                <FormControl className={ loginStyle.formControl }>
                    <Button 
                    className={ loginStyle.button } 
                    type="submit">Ingresar</Button>
                </FormControl>
            </form>
        </div>
    )
}
