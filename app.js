import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Intelyzer | AI Experience Design Consultancy</title>
        <meta name="description" content="Intelyzer is a premier AI experience design consultancy serving the GCC region, bridging human insight and machine intelligence." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
