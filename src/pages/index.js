import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import FAQ from '../../content/faq.json';

const IndexPage = () => (
  <Layout>
    <SEO title="" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <ul>
      {Object.entries(FAQ).map(qa => {
        return (
          <li>
            {qa[0]} {qa[1]}
          </li>
        );
      })}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
