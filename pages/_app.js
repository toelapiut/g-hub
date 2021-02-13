import '../styles/globals.css';
import '../styles/tailwind.css';
import PropTypes from 'prop-types';


function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />;
}


MyApp.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]),
};

export default MyApp;
