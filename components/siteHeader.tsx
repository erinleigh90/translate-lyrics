import { Auth } from 'aws-amplify';

import styles from '../styles/Home.module.css';

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <div className={styles.headerTitle}><h3>TranslateLyrics</h3></div>
        <div className={styles.userMenuDiv}>
          <input className={styles.button} type="submit" name="auth" value="Sign In/Sign Up" />
        </div>
      </div>
    </header>
  );
}