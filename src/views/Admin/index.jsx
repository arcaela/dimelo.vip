import React from 'react'
import Layout from '~/views/layout'
import AdminPage from './Home'
import AddNews from './News/Add'
import Movimiento from './Movimiento'
import ManagerNews from './News/ManagerNews'

export default function Admin({ params}) {
    return (
        <Layout middleware={['auth']} >
            { (params.slug === '' || params.slug === '/') && <AdminPage /> }
            { (params.slug === 'news/add' || params.slug === 'news/add/' ) && <AddNews /> }
            { (params.slug === 'news/' || params.slug === 'news') && <ManagerNews /> }
            { (params.slug === 'movimiento' || params.slug === 'movimiento/') && <Movimiento /> }
        </Layout>
    )
}
