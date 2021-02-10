import React from 'react';
import api from '../../ServerLess/api'
import CardNews from './components/CardNews';
import Layout from '../layout';
import { CircularProgress } from '@material-ui/core';
import { NoNews } from './components/NoNews';
export default function NewsPage({ ...req }) {
  const [posts, setPosts ] = React.useState([]);
  const [loading, setLoading] = React.useState(false)
  const [emptyMessage, setEmptyMessage] = React.useState(false)
  const scroll = () => {
    const content = document.querySelector('.news-content');
    if (!loading && content && content.getBoundingClientRect().bottom <= 400) {
      setLoading(true)
      api('news/recent')
        .then(result => {
          if (result) {
            // setPosts()
          }
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
    //       })
    //       .catch()
  }
  React.useEffect(() => {
    getNews()
    setEmptyMessage(true)
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [scroll])

  return (
    <Layout >
      <div className="news-content" style={{display:'flex',height:'100%', flexDirection: 'column'}}>
        {emptyMessage && <NoNews />}
        {posts.map((post, key) => <CardNews {...post} key={key} />)}
      </div>
      {loading && <div style={{ textAlign: 'center', padding: '10px 0' }} children={<CircularProgress size={20} />} />}
    </Layout>
  );
}
