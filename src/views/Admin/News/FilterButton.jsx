import React from 'react'
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import { CustomImput, useContainer } from '~/components/SelectSearch/select.style';

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
                <IconButton
                onClick={ ()=> buttonOnClick() } 
                className={ classes.button }>
                    { valueInput.length === 0 ? <SearchIcon /> : <CloseIcon /> }
                </IconButton>
            </div>
        </div>
    )
}
