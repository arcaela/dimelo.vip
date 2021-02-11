import React from 'react'
import {
    Grid,
    Hidden,
    Typography,
} from '@material-ui/core';


// Formularios
import SignUp from './SignUp/SignUp';
import SignUpMore from './SignUp/SignUpMore';
import useInput from '../../ServerLess/Hooks/useInput';
import { useStylesIndex } from './styles/index.styles';



export default function Auth( { ...req } ){

    const classes = useStylesIndex();

    req.useInput = useInput();

    const { step } = req.useInput;
    
    return step > 2
        ? <SignUpMore {...req} />
        :( 
        <Grid container className={classes.root}>
            <Hidden smDown>
                <Grid item xs={12} md={6} className={classes.gridLeft}>
                    <Typography variant="h3">Bienvenido</Typography>
                    <Typography variant="subtitle2">
                        ¡Bienvenido! Por favor, {req.path==='/sigin' ? 'ingrese a su cuenta.' : 'completa el registro.'}
                    </Typography>
                </Grid>
            </Hidden>
            <Grid item xs={12} md={6} className={classes.gridRight}>
                <SignUp {...req} />
            </Grid>
        </Grid>
        );
}