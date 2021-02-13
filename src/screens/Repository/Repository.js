import PropTypes from 'prop-types';
import styles from './repository.module.css';
import Repo from '../../components/Repo';
import ProgressiveImage from 'react-progressive-graceful-image';
import React, {Fragment, useMemo} from 'react';
import Head from 'next/head';

export const Repository = ({user, username, bookmarks, onBookmark, results}) => {

  const onRepository = useMemo(() => {
    return (
      <div className={styles.repoWrap}>
        {results.map(({id, description, name, forks_count, language}) => {
          return <Repo
            onBookmark={onBookmark}
            key={id}
            bookmarks={bookmarks.includes(String(id))}
            id={id}
            name={name}
            forks_count={forks_count}
            description={description}
            language={language}
          />;
        }
        )}
      </div>
    );
  }, [bookmarks]);

  return (
    <Fragment>
      <Head>
        <title>{username} repositories</title>
      </Head>
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
        {onRepository}
      </div>
    </Fragment>
  );
};

Repository.defaultProps = {
  results: []
};
Repository.propTypes = {
  username: PropTypes.string,
  onBookmark: PropTypes.func,
  results: PropTypes.array,
  bookmarks: PropTypes.array,
  user: PropTypes.object
};