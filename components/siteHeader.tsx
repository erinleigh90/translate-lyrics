import { useContext, useState } from "react";
import { UserContext } from "../utilities/userContextMethods";
import styles from '../styles/Home.module.css';

export default function SiteHeader({ handleShowSignIn }: any) {
  const user = useContext(UserContext);
  console.log('header user', user);
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
          <h3>Translate<span className={styles.brandColor_Primary}>Lyrics</span></h3>
        </div>
        <div className={styles.userMenuDiv}>
          <input className={styles.headerButton} type="submit" name="userMenu" value={getUserMenuLabel(user)} onClick={handleOpenCloseDropDown} onBlur={handleCloseDropDown} />
          {showDropDown ?
            <div className={styles.headerDropDownContainer}>
              {(user != null) ? authenticatedUserMenu : unauthenticatedUserMenu}
            </div>
            : null}
        </div>
      </div>
    </header>
  );
}