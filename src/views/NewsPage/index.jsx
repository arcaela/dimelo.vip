import React from 'react';

import CardNews from './components/CardNews';
import Layout from '../layout';
import CreateNew from './components/CreateNew';
export default function NewsPage( { ...req } ) {

  const { match } = req;

  return (
    <Layout >
     {/* {([ {title:'Jesus'}]).map((element, key) => <CardNews key={key} {...element} />)} */}
     <CreateNew />
    </Layout>
  );
}
