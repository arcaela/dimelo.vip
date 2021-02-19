import { Box, makeStyles } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import React from 'react'

const uStyle = makeStyles(theme=>({
    buttons:{
        padding: '.3rem',
        cursor: 'pointer'
    }
}))

export default function ActionsButton({row}) {

    const classes = uStyle()

    return (
      <Box display="flex">
          <div className={ classes.buttons }>
              <VisibilityIcon />
          </div>
         <div className={ classes.buttons }>
             <img src="/images/edit.svg" alt="editar"/>
         </div>
         <div className={ classes.buttons }>
             <img src="/images/trash.svg" alt="borrar"/>
         </div>
      </Box>
    )
}
