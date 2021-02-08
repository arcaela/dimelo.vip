import React from 'react'

import { logoStyles } from './logo.styles';

import src from '../../dist/images/brand.svg';

export default function Logo() {

    const styles = logoStyles()

    return (
        <div className={ styles.main }>
            <img className={ styles.img } src={ src } alt="Dimelo"/>
        </div>
    )
}
