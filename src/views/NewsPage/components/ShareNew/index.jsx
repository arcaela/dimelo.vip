import React from 'react'
import CardNews from '../CardNews';
import { useCardStyles } from '../CardNews/cardNews.styles';
export const ShareNew = (req) => {
    const classes = useCardStyles()
    const [post, setPost] = React.useState( { autor: { name: 'Manuel' }, title: 'Despiden al vice presidente de la asamblea nacional', description: 'Por lo general, las aplicaciones de React nuevas tienen un único componente App en lo más alto. Sin embargo, si se integra React en una aplicación existente, se podría empezar de abajo hacia arriba con un pequeño componente como Button y poco a poco trabajar el camino a la cima de la jerarquía de la vista.', date: 2312904410, likes: 3, like: true })
    return (
        <>
           <CardNews className={classes.card} {...post} /> 
        </>
    )
}
export default ShareNew;