import { Typography } from '@material-ui/core'
import React from 'react'
import svgEmpty from '../../../../dist/images/empty.svg'
export const NoNews = () => {
    return (
        <div style={{margin:'auto', display:'flex', flexDirection:'column', alignItems:'center', opacity:.9}}>
            <Typography children="No hay noticias" variant="h4" style={{opacity:.5}}/>
            <img src={svgEmpty} style={{maxWidth:'30%',minWidth:200}} alt='No hay noticias' />
        </div  >
    )
}
