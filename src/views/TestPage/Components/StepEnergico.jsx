import React from 'react'
import Activo from '../../../assets/images/test/activo_energetico.svg'
import Inactivo from '../../../assets/images/test/inactivo.svg'
import { Button, Grid, Typography } from '@material-ui/core'

export default function StepEnergico({ card, nextStep, }) {
    /*  @props
        cards = @Object
        card = {
            yes:()=>setCard(key, true),
            no:()=>setCard(key, false),
            valid:[true, false].indexOf(!!card[key].value)>=0,
        };
        step = @stepValue
        nextStep = setStep(p=>p+1);
        prevStep = setStep(p=>p<1?0:p-1);
    */
    const actived = {
        border: 'solid 1px #62a21d',
        backgroundColor: '#62a21d3b',
        borderRadius:10,
    };
    return (
        <Grid container justify="center" style={{height:'100%',textAlign:'center'}}>
            <Grid item xs={12} style={card.value?actived:{}}>
                <img src={Activo} onClick={card.yes} alt="Activo"/>
            </Grid>
            <Grid item xs={12} style={card.value===false?actived:{}}>
                <img src={ Inactivo } onClick={card.no} alt="Inactivo"/>
            </Grid>
            <Grid item xs={12} style={{display:'flex',padding:'20px 0',}}>
                <Typography variant="h5" color="primary" style={{margin:'auto'}} children={ card.label } />
            </Grid>
            <Grid item xs={12}>
                <Button
                    fullWidth
                    color="secondary"
                    variant="contained"
                    disabled={ card.disabled }
                    onClick={()=>nextStep()}
                    disableElevation
                    style={{color:'#fff', fontWeight:'bold'}}>Continuar</Button>
            </Grid>
        </Grid>
    )
}
