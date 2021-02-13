import '../styles/globals.css';
import '../styles/tailwind.css';
import PropTypes from 'prop-types';
import Layout from '../src/components/Layout';


function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}


MyApp.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]),
};

export default MyApp;
