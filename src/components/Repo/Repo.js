import styles from './repo.module.css';
import PropTypes from 'prop-types';

export const Repo = ({name, description, forks_count, language}) => {
  const onStyles = (lang) => {
    if (lang) {
      switch (lang.toLowerCase()) {
      case 'python':
        return styles.blue;
      case 'html':
        return styles.orange;
      case 'javascript':
        return styles.yellow;
      case 'css':
        return styles.green;
      default:
        return styles.pink;
      }
    }
  };


  return (
    <div className={styles.contain}>
      <div className={styles.header}>
        <h4 className={styles.repo}>{name}</h4>
        <div>
          <svg className={styles.bookmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
            <path d="M265,0H65c-8.284,0-15,6.716-15,15v300c0,5.766,3.305,11.022,8.502,13.52c5.197,2.498,11.365,1.796,15.868-1.807L165,254.21
	l90.63,72.503c2.712,2.17,6.027,3.287,9.372,3.287c2.208,0,4.43-0.487,6.496-1.48c5.197-2.497,8.502-7.753,8.502-13.52V15
	C280,6.716,273.284,0,265,0z M250,283.79l-75.63-60.503c-2.739-2.191-6.055-3.287-9.37-3.287s-6.631,1.096-9.37,3.287L80,283.79V30
	h170V283.79z"/>
          </svg>
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.footer}>
        {!!language && <div className={styles.language}>
          <div className={onStyles(language)}/>
          <p className={styles.languageText}>{language}</p>
        </div>}
        <div className={styles.forkWrap}>
          <div>
            <svg className={styles.fork} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="131 -131 512 512">
              <path id="XMLID_8_" d="M312.8,317c0-8.5-3.4-16.2-9.4-23s-13.7-9.4-23-9.4c-9.3,0-16.2,3.4-23,9.4c-6,6-9.4,13.7-9.4,23
		s3.4,16.2,9.4,23c6,6,13.7,9.4,23,9.4c9.3,0,16.2-3.4,23-9.4C310.2,334,312.8,325.5,312.8,317z M312.8-67c0-8.5-3.4-16.2-9.4-23
		c-6-6-13.7-9.4-23-9.4c-9.3,0-16.2,3.4-23,9.4c-6,6-9.4,13.7-9.4,23c0,8.5,3.4,16.2,9.4,23c6,6,13.7,9.4,23,9.4
		c9.3,0,16.2-3.4,23-9.4C310.2-49.9,312.8-58.5,312.8-67z M526.1-24.3c0-8.5-3.4-16.2-9.4-23s-13.7-9.4-23-9.4s-16.2,3.4-23,9.4
		s-9.4,13.7-9.4,23s3.4,16.2,9.4,23c6,6,13.7,9.4,23,9.4s16.2-3.4,23-9.4C522.7-8.1,526.1-15.8,526.1-24.3z M557.7-24.3
		c0,11.9-2.6,22.2-8.5,32.4s-13.7,17.9-23,23c-0.9,64-25.6,110.1-75.1,138.2c-15.4,8.5-37.5,17.1-67.4,27.3
		c-28.2,8.5-46.9,17.1-56.3,23.9c-9.4,6.8-13.7,17.9-13.7,33.3v8.5c9.4,6,17.9,13.7,23,23c5.1,9.4,8.5,20.5,8.5,32.4
		c0,17.9-6,33.3-18.8,45.2c-12.8,11.9-28.1,18.1-46.1,18.1s-33.3-6-45.2-18.8s-18.8-27.3-18.8-45.2c0-11.9,2.6-22.2,8.5-32.4
		c6-10.2,13.7-17.9,23-23V-11.5c-9.4-6-17.9-13.7-23-23s-8.5-20.6-8.5-32.5c0-17.9,6-33.3,18.8-45.2c12.8-11.9,27.3-18.8,45.2-18.8
		c17.9,0,33.3,6,45.2,18.8s18.8,27.3,18.8,45.2c0,11.9-2.6,22.2-8.5,32.4c-5.9,10.2-13.7,17.9-23,23V154c11.9-6,29-11.9,51.2-18.8
		c11.9-3.4,22.2-6.8,29-10.2c6.8-3.4,15.4-6,23.9-10.2s15.4-8.5,19.6-12.8s9.4-10.2,13.7-17.1s7.7-14.5,9.4-23
		c1.7-8.5,2.6-18.8,2.6-30.7c-9.4-6-17.9-13.7-23-23s-8.5-20.5-8.5-32.4c0-17.9,6-33.3,18.8-45.2c12.8-12.8,27.3-18.8,45.2-18.8
		s33.3,6,45.2,18.8C551.7-57.6,557.7-42.3,557.7-24.3z"/>
            </svg>
          </div>
          <p className={styles.languageText}>{forks_count}</p>
        </div>
      </div>
    </div>
  );
};

Repo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  forks_count: PropTypes.number,
  language: PropTypes.string
};