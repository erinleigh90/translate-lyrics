import { useState } from "react";
import styles from '../styles/Home.module.css';
import SignIn from '../components/signIn';

export default function SiteHeader() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setShowSignIn(true);
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerDiv}>
          <div className={styles.headerTitle}>
            <h3>TranslateLyrics</h3>
          </div>
          <div className={styles.userMenuDiv}>
            <input className={styles.headerButton} type="submit" name="auth" value="Sign In/Sign Up" onClick={handleSubmit} />
          </div>
        </div>
      </header>
      {showSignIn ? <SignIn /> : null}
    </div>
  );
}