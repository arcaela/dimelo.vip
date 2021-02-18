import React from 'react'
import Layout from '../layout'
import AdminPage from './Home'
import AddNews from './News/AddNews';
import Movimiento from './Movimiento'



export default function Admin({ params }) {

    console.log(params.slug);

    return (
        <Layout middleware={['auth']} >
            { params.slug === '' && <AdminPage /> }
            { params.slug === 'noticias/add' && <AddNews /> }
            { params.slug === 'movimiento' && <Movimiento /> }
        </Layout>
    )
}