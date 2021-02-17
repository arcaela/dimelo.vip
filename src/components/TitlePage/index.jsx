import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useTitleStyle = makeStyles((theme)=>({
    title:{
        fontSize: 28,
        color: theme.palette.primary.main
    }
}))

export default function TitlePage({ title }) {

    const classes = useTitleStyle();

    return (
        <div>
            <h2 className={ classes.title }>{ title }</h2>
        </div>
    )
}
