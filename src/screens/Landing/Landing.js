import Search from '../../components/Search';
import Image from 'next/image';
import styles from './landing.module.css';
import Head from 'next/head';
import React,{Fragment} from 'react';


export const Landing = () => {
  return (
    <Fragment>
      <Head>
        <title>Welcome Ghub Clone - safe space to find coders</title>
      </Head>
      <div className={styles.contain}>
        <div className={styles.column}>
          <h1 className={styles.title}>Where the world builds software</h1>
          <h4 className={styles.subtitle}>Millions of developers and companies build, ship, and maintain their software on
            GitHub—the largest and most
            advanced development platform in the world.</h4>
          <Search/>
        </div>
        <div className={styles.column}>
          <Image
            src="/images/global.png"
            alt="global image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </Fragment>
  );
};