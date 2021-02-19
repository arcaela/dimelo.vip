import React from 'react'
import Layout from '../layout'
import AdminPage from './Home'
import AddNews from './News/AddNews';
import Movimiento from './Movimiento'
import ManagerNews from './News/ManagerNews';

export default function Admin({ params }) {
    console.log( params.slug )
    return (        
        <Layout middleware={['auth']} >
            { params.slug === '' && <AdminPage /> }
            { params.slug === 'noticias/add' && <AddNews /> }
            { params.slug === 'noticias/' && <ManagerNews /> }
            { params.slug === 'movimiento' && <Movimiento /> }
        </Layout>
    )
}