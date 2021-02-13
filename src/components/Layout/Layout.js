import styles from './styles.module.css';
import PropTypes from 'prop-types';


export const Layout = ({children}) => {
  return (
    <div className={styles.contain}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]),
};