import Search from '../../components/Search';
import Image from 'next/image';
import styles from './landing.module.css';


export const Landing = () => {
  return (
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
  );
};