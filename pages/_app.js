import { IconContext } from 'react-icons';
import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IconContext.Provider>
  );
}

export default MyApp;
