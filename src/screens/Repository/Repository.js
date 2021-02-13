import PropTypes from 'prop-types';
import styles from './repository.module.css';
import Repo from '../../components/Repo';
import ProgressiveImage from 'react-progressive-graceful-image';
import React from 'react';

export const Repository = ({user, username, results}) => {
  return (
    <div className={styles.contain}>
      <div className={styles.user}>
        <ProgressiveImage
          data-test="listingImage"
          placeholder={user['avatar_url']}
          src={user['avatar_url']}>
          {(src) => <div className={styles.linkProfile} style={{backgroundImage: `url(${src})`}}/>}
        </ProgressiveImage>
        <div className={styles.userDetails}>
          <h1 className={styles.title}>{username} repositories</h1>
          <p className={styles.bio}>{user?.bio}</p>
        </div>
      </div>
      <div>
        <p className={styles.subtitle}>Total Repositories {results.length}</p>
      </div>
      <div className={styles.repoWrap}>
        {results.map(({id, description, name, forks_count, language}) =>
          <Repo
            key={id}
            name={name}
            forks_count={forks_count}
            description={description}
            language={language}
          />
        )}
      </div>
    </div>
  );
};

Repository.defaultProps = {
  results: []
};
Repository.propTypes = {
  username: PropTypes.string,
  results: PropTypes.array,
  user: PropTypes.object
};