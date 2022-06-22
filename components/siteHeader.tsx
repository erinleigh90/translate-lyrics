import { useContext, useState } from "react";
import { UserContext } from "../utilities/userContextMethods";
import Link from 'next/link';
import SubHeader from '../components/subHeader';
import styles from '../styles/Home.module.css';

export default function SiteHeader({ handleShowSignIn }: any) {
  const user = useContext(UserContext);
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

  const getUserMenuLabel = (user: any) => {
    if (user != null) {
      return `Hi ${user.username}!`;
    }
    return 'Log In / Sign Up';
  };
  const authenticatedUserMenu = (
    <div className={styles.headerDropDown}>
      <div onMouseDown={handleSignUpSignIn} data-action="signOut">Sign Out</div>
    </div>
  );

  const unauthenticatedUserMenu = (
    <div className={styles.headerDropDown}>
      <div onMouseDown={handleSignUpSignIn} data-action="signUp">Sign Up</div>
      <div onMouseDown={handleSignUpSignIn} data-action="signIn">Log In</div>
    </div>
  );

  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <div className={styles.headerTitle}>
          <Link href="/">
            <h3>Translate<span className={styles.brandColor_Primary}>Lyrics</span></h3>
          </Link>
        </div>
        <div>
          <div className={`${styles.headerInput} ${styles.headerSearchBox}`}>
            <input type="text" name="song" placeholder="Song Title" />
            <input type="text" name="artist" placeholder="Artist" />
            <input type="text" name="album" placeholder="Album" />
            <div className={styles.searchButton}>
              <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                <g fill="none">
                  <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.userMenuDiv}>
          <input className={`${styles.headerInput} ${styles.headerButton}`} type="submit" name="userMenu" value={getUserMenuLabel(user)} onClick={handleOpenCloseDropDown} onBlur={handleCloseDropDown} />
          {showDropDown ?
            <div className={styles.headerDropDownContainer}>
              {(user != null) ? authenticatedUserMenu : unauthenticatedUserMenu}
            </div>
            : null}
        </div>
      </div>
      <SubHeader />
    </header>
  );
}