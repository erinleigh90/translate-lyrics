import { useState } from "react";
import styles from '../styles/Home.module.css';

export default function SiteHeader({ handleShowSignIn }: any) {

  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <div className={styles.headerTitle}>
          <h3>TranslateLyrics</h3>
        </div>
        <div className={styles.userMenuDiv}>
          <input className={styles.headerButton} type="submit" name="auth" value="Sign In/Sign Up" onClick={handleShowSignIn} />
        </div>
      </div>
    </header>
  );
}