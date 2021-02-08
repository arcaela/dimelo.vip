import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useTitleStyle = makeStyles()

export default function TitlePage({ title }) {



    return (
        <div>
            <h2 className={ classes.title }>Mi red</h2>
        </div>
    )
}
