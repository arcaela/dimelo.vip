import React from 'react';

import CardNews from '../../components/CardNews';
import Layout from '../../components/Layout';

export default function NewsPage( { ...req } ) {

  const { match } = req;
  
  return (
    <Layout path={ match.path } >
      <CardNews />
    </Layout>
  );
}
