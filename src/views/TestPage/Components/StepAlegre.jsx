import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'

import Alegre from '../../../assets/images/test/alegre.svg'
import Triste from '../../../assets/images/test/triste-1.svg'

export default function StepAlegre({ card, nextStep, }) {
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
        <Grid container justify="space-between" alignItems="center" style={{height:'100%',textAlign:'center'}}>
            <Grid item xs={12}>
                <img src={ Alegre } onClick={card.no} alt="Alegre" style={card.value===false?actived:{}}/>
            </Grid>
            <Grid item xs={12}>
                <img src={ Triste } onClick={card.yes} alt="Triste" style={card.value?actived:{}}/>
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
