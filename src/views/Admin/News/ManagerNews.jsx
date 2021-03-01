import React from 'react'
import TitlePage from '~/components/TitlePage'
import TableNews from './TableNews'

export default function ManagerNews() {
    return (
        <>
            <TitlePage title="Noticias" />
            <TableNews />
        </>
    )
}
