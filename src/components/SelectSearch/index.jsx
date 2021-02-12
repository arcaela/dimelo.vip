import React from 'react'
import { CustomImput, CustomSelectImput, useContainer } from './select.style'
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';

export default function SelectSearch({ 
    valueSelect,
    onChangeSelect,
    values=[],
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
                <Select
                name="filter"
                value={ valueSelect }
                onChange={e => onChangeSelect(e)}
                className={ classes.select }
                input={<CustomSelectImput />}
                >
                    {values.map(value=><MenuItem key={value.value} value={value.value}>{value.label}</MenuItem>)}
                </Select>
            </div>
            <div className={ classes.buttonContainer }>
                <IconButton onClick={ ()=> buttonOnClick() } className={ classes.button }>
                    <SearchIcon />
                </IconButton>
            </div>
        </div>
    )
}
