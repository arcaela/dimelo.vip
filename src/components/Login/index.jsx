import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { loginStyles } from './login.styles';
import CircularProgress from '@material-ui/core/CircularProgress'; 

import api from '../../ServerLess/api';

export default function Login() {

    const loginStyle = loginStyles()

    const [values, setValues] = useState({
        email: '',
        password: '',
        remenber: false,
    })

    const [sending, setSending] = useState(false)
    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState(false)

    const checkValues = () =>{

        if ( values.email === '' ) {
            setEmail(true)
        }
        
        if ( values.password.length === 0 ) {
            setPassword(true)
        }

        return;

    }

    const handlerChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handlerRemember = ()=>{
        setValues({
            ...values,
            'remenber': !values.remenber
        })
    }


    const handlerSubmit = async (e) => {
        e.preventDefault()

        setEmail(false)
        setPassword(false)


        checkValues()

        setSending(true)

        if(email || password){
            setSending(false)
            return;
        }

        try {
            const data = await api('auth/signin', values);

            console.log('hola',data)

            setSending(false)
            
        } catch (e) {
            console.log(e)
            setSending(false)
        }
    }

    return (
        <div className={  loginStyle.container }>
            <h2 className={ loginStyle.title }>Iniciar sesión</h2>
            <form onSubmit={ e => handlerSubmit(e) }>

                <FormControl 
                    className={loginStyle.formControl}
                >
                    <TextField
                    value={ values.email }
                    onChange={ e => handlerChange(e) }
                    id="email"
                    name="email"
                    variant="outlined"
                    type="email"
                    error={email}
                    helperText={email ? "Campo Obligatorio" : ''}
                    label="Correo" />
                </FormControl>

                <FormControl
                    className={loginStyle.formControl}
                >
                    <TextField
                    value={ values.password }
                    onChange={ e => handlerChange(e) }
                    id="password"
                    name="password"
                    variant="outlined"
                    type="password"
                    error={ password }
                    helperText={ password ? "Campo Obligatorio" : '' }
                    label="Contraseña" />
                </FormControl>

                <FormControl
                    className={ `${ loginStyle.formControl } ${ loginStyle.ps }` }
                >
                    <FormControlLabel 
                    control={<Checkbox onClick={ e => handlerRemember( e ) } name="remenber" value={ values.remenber } />}
                    label="Recordarme"
                    />
                    <span className={ loginStyle.p }>
                        Olvide mi contraseña
                    </span>
                </FormControl>
                <FormControl className={ loginStyle.formControl }>
                    <Button 
                    className={ loginStyle.button } 
                    type="submit">
                        { sending ? <CircularProgress color="secondary" /> : 'Ingresar' }
                    </Button>
                </FormControl>
            </form>
        </div>
    )
}
