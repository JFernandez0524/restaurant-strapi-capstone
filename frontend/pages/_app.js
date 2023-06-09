/* _app.js */
import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
          integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
          crossOrigin='anonymous'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
