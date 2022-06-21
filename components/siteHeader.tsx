import { useState } from "react";
import styles from '../styles/Home.module.css';

export default function SiteHeader({ handleShowSignIn }: any) {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleOpenCloseDropDown = () => {
    if (showDropDown) {
      setShowDropDown(false);
    } else {
      setShowDropDown(true);
    }
  }

  const handleCloseDropDown = () => {
    setShowDropDown(false);
  }

  const handleSignUpSignIn = (event: any) => {
    const actionType: string = event.target.dataset.action;
    handleShowSignIn(actionType);
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <div className={styles.headerTitle}>
          <h3>TranslateLyrics</h3>
        </div>
        <div className={styles.userMenuDiv}>
          <input className={styles.headerButton} type="submit" name="auth" value="Log In/Sign Up" onClick={handleOpenCloseDropDown} onBlur={handleCloseDropDown} />
          {showDropDown ?
            <div className={styles.headerDropDown}>
              <div onMouseDown={handleSignUpSignIn} data-action="signIn">Log In</div>
              <div onMouseDown={handleSignUpSignIn} data-action="signUp">Sign Up</div>
            </div>
            : null}
        </div>
      </div>
    </header>
  );
}