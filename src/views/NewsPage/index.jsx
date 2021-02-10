import React from 'react';
import api from '../../ServerLess/api'
import Layout from '../layout';
import { CircularProgress } from '@material-ui/core';
import { NoNews } from './components/NoNews';
// import CreateNew from './components/CreateNew';

export default function NewsPage({ ...req }) {
  const [posts, ] = React.useState([{ autor: { name: 'Boris' }, title: 'El presidente dicto cuarentena hasta nuevo aviso', description: 'Por lo general, las aplicaciones de React nuevas tienen un único componente App en lo más alto. Sin embargo, si se integra React en una aplicación existente, se podría empezar de abajo hacia arriba con un pequeño componente como Button y poco a poco trabajar el camino a la cima de la jerarquía de la vista.', date: 5432904400, likes: 3, like: true },
  { autor: { name: 'Luis' }, title: 'Mañana juega la seleccion nacional', description: 'Por lo general, las aplicaciones de React nuevas tienen un único componente App en lo más alto. Sin embargo, si se integra React en una aplicación existente, se podría empezar de abajo hacia arriba con un pequeño componente como Button y poco a poco trabajar el camino a la cima de la jerarquía de la vista.', date: 4422904428, likes: 3, like: true },
  { autor: { name: 'Manuel' }, title: 'Despiden al vice presidente de la asamblea nacional', description: 'e la jerarquía de la vista.', date: 2312904410, likes: 3, like: true }]);
  const [loading, setLoading] = React.useState(false)
  const [emptyMessage, setEmptyMessage] = React.useState(false)
  const scroll = () => {
    const content = document.querySelector('.news-content');
    if (!loading && content && content.getBoundingClientRect().bottom <= 400) {
      console.log('Scroll bottom')
      setLoading(true)
      api('news/recent')
        .then(result => {
          if (result) {
            // setPosts()
          }
          console.log(posts)
        })
        .catch()
        .finally(() => setLoading(false))
    }
  }
  const getNews = () => {
    // api('news/recent')
    //       .then(result => {
    //         if(result){
    //         setPosts()
    //         }else{
    // setEmptyMessage(true)

    //         console.log(posts)
    //       })
    //       .catch()
  }
  React.useEffect(() => {
    console.log('NewsPage renderizado')
    getNews()
    setEmptyMessage(true)
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }

  }, [])

  return (
    <Layout >
      <div className="news-content" style={{display:'flex',height:'100%'}}>
        {emptyMessage && <NoNews />}
        {/* {posts.map((post, key) => <CardNews {...post} key={key} />)} */}
        {/* <CreateNew /> */}
      </div>
      {loading && <div style={{ textAlign: 'center', padding: '10px 0' }} children={<CircularProgress size={20} />} />}
    </Layout>
    // <ShareNew />

  );
}
