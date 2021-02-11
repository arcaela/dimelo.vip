import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'

import Formal from '../../../assets/images/test/formal.svg'
import Informal from '../../../assets/images/test/informal.svg'

export default function StepFormal({ card, nextStep, }) {
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
    return (<Grid container justify="space-between" alignItems="flex-end" style={{height:'100%',textAlign:'center'}}>
        <Grid item xs={6}>
            <img src={ Informal } onClick={card.no} alt="Informal" style={{
                padding:23,
                ...(card.value===false && actived)
            }}/>
        </Grid>
        <Grid item xs={6}>
            <img src={ Formal } onClick={card.yes} alt="Formal" style={card.value?actived:{}}/>
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
    </Grid>)
}
