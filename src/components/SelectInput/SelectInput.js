import React from 'react';
import PropTypes from 'prop-types';
import styles from './selectinput.module.css';
import Loader from '../Loader';
import {errorStyles} from '../../helper';
import ProgressiveImage from 'react-progressive-graceful-image';
import Link from 'next/link';

export const SelectInput = (
  {
    name,
    id,
    list,
    onFocus,
    label,
    optional,
    placeholder,
    value,
    onChangeText,
    sideText,
    disabled,
    loading,
    isOpen,
    error,
  }) => {

  return (
    <div className={disabled ? styles.disabledContain : styles.contain} style={errorStyles(error)}>
      <p className={styles.label} style={errorStyles(error)}>{label} {optional && optional}</p>
      <div className={styles.input}>
        <span className={styles.sideText} style={errorStyles(error)}>{sideText}</span>
        <input
          onFocus={onFocus}
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChangeText}
          className={styles.inputField}/>
      </div>
      {isOpen &&
      <div className={`${styles.dropDown}`}>
        {list.map((data, index) =>
          <Link key={index.toString()} as={`/repository/${data[id]}`} href={'/repository/[username]'}>
            <div className={styles.list} >
              <ProgressiveImage
                data-test="listingImage"
                placeholder={data['avatar_url']}
                src={data['avatar_url']}>
                {(src) => <div className={styles.linkProfile} style={{backgroundImage: `url(${src})`}}/>}
              </ProgressiveImage>
              <p className={styles.text}>{data[id]}</p>
            </div>
          </Link>
        )}
      </div>
      }
      {
        loading && <Loader/>
      }
    </div>
  );
};

SelectInput.defaultProps = {
  onFocus: () => null,
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  sideText: PropTypes.string,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  optional: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  isOpen: PropTypes.bool,
  list: PropTypes.array,
  id: PropTypes.string,
};