import React from 'react';
import Translate from "@docusaurus/Translate";
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 style={{margin: 20}}>
        <Translate description="The homepage main heading">
          Welcome to my Docusaurus translated site!
        </Translate>
      </h1>
      <main style={{margin: 20}}>
        <a href="https://github.com/slorber/docusaurus-crowdin-example">Github repository</a>
      </main>
    </Layout>
  );
}

