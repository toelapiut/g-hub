import '../styles/globals.css';
import '../styles/tailwind.css';
import PropTypes from 'prop-types';
import Layout from '../src/components/Layout';
import {configureStore} from '../src/stores/configureStore';
import {Provider} from 'react-redux';

const {store} = configureStore();

function MyApp({Component, pageProps}) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
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
