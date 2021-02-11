import React from 'react'
import { withStyles } from '@material-ui/core'
import Dimelo from '../../../images/test/dimelo.svg'
export default withStyles(()=>({
    root:{
        height:300,
        display:'flex',
        backgroundImage:`url(${Dimelo})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'200px',
        opacity:0,
        animation:`$pulse 2s infinite`,
    },
    "@keyframes pulse":{
        "0%":{opacity:.5},
        "50%":{opacity:1},
        "100%":{opacity:.5},
    },
}))(({classes})=><div className={classes.root} />);