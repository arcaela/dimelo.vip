import React from 'react';

import CardNews from './components/CardNews';
import Layout from '../layout';

export default function NewsPage( { ...req } ) {

  const { match } = req;
  
  return (
    <Layout >
     {([{title:'Titulo'}, {title:'Titulo'}]).map((element, key) => <CardNews key={key} {...element} />)}
    </Layout>
  );
}
