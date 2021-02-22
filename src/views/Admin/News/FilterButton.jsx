import React from 'react'
import { CustomImput, useContainer } from '~/components/SelectSearch/select.style'
import { CloseSharp } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

export default function FilterButton({
    valueInput,
    onChangeInput,
    buttonOnClick
    }) {

    const classes = useContainer()
    
    return (
        <div className={ classes.root }>
            <div className={ classes.container }>
                <CustomImput
                value={ valueInput }
                onChange={ e => onChangeInput( e ) }
                />
            </div>
            <div style={{
                marginLeft: -1
            }} className={ classes.buttonContainer }>
                <IconButton onClick={ ()=> buttonOnClick() } className={ classes.button }>
                    <CloseSharp />
                </IconButton>
            </div>
        </div>
    )
}
