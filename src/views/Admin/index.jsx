import React from 'react'
import Layout from '../layout'
import AdminPage from './Home'
import AddNews from './News/Add'
import Movimiento from './Movimiento'
import EditNews from './News/EditNews'
import ManagerNews from './News/ManagerNews'
import { useRouteMatch } from 'react-router-dom'

export default function Admin({ params}) {

    const edit = useRouteMatch( { path:'/admin/news/edit/:id' } )

    return (
        <Layout middleware={['auth']} >
            { (params.slug === '' || params.slug === '/') && <AdminPage /> }
            { (params.slug === 'news/add' || params.slug === 'news/add/' ) && <AddNews /> }
            { (params.slug === 'news/' || params.slug === 'news') && <ManagerNews /> }
            { (params.slug === 'movimiento' || params.slug === 'movimiento/') && <Movimiento /> }
            { edit?.isExact && edit?.params?.id && <EditNews id={edit?.params?.id} /> }
        </Layout>
    )
}
