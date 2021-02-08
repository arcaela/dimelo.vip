import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import Picture from '../../../dist/images/test/popular.svg'

export default function StepPopular({ card, nextStep, }) {
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
    return (
        <Grid container justify="space-between" alignItems="center" style={{height:'100%',textAlign:'center'}}>
            <Grid item xs={12}>
                <img src={ Picture } alt={card.key} />
            </Grid>
            <Grid item xs={12} style={{display:'flex',padding:'20px 0',}}>
                <Typography variant="h5" color="primary" style={{margin:'auto'}} children={ card.label } />
            </Grid>
            <Grid item xs={5}>
                <Button
                    fullWidth
                    color="secondary"
                    variant="contained"
                    onClick={()=>card.yes(nextStep())}
                    disableElevation
                    style={{color:'#fff', fontWeight:'bold'}}>Si</Button>
            </Grid>
            <Grid item xs={5}>
                <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    onClick={()=>card.no(nextStep())}
                    disableElevation
                    style={{color:'#fff', fontWeight:'bold'}}>No</Button>
            </Grid>
        </Grid>
    )
}
