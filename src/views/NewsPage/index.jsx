import React from 'react';

import CardNews from './components/CardNews';
import Layout from '../layout';

export default function NewsPage( { ...req } ) {

  const { match } = req;

  return (
    <Layout >
     {([{title:'Boris'}, {title:'Jesus'}]).map((element, key) => <CardNews key={key} {...element} />)}
    </Layout>
  );
}
