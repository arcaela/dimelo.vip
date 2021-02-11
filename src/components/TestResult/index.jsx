import React from 'react'
import Img from '../../images/test/Independiente - Automotivado.svg'
import { useResultPage } from './testResult.styles'

export default function TestResult() {
    
    const classes = useResultPage()

    return (
        <div className={ classes.container }>

            <h3 className={ classes.title }>Resultados</h3>

            <p className={ classes.p }>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>

            <h4 className={ classes.subtitle }>Tu patrón actitudinal es</h4>

            <span className={ `${ classes.patron } ${ classes.dominancia }` }>Dominancia</span>

            <h4 className={ classes.perfil } >Tu perfil es</h4>

            <h5 className={ classes.h5 }>Independiente - Automotivado</h5>

            <img src={ Img } alt="Independiente - Automotivado"/>

            <p className={ classes.p }>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
            
        </div>
    )
}
