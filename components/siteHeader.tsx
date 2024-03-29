import { useContext, useState } from "react";
import { UserContext } from "../utils/userContextMethods";
import Link from 'next/link';
import SubHeader from '../components/subHeader';
import HeaderSearch from '../components/headerSearch';
import styles from '../styles/Home.module.css';

type SiteHeaderParams = {
  handleShowSignIn: Function
}

export default function SiteHeader({ handleShowSignIn }: SiteHeaderParams) {
  const user = useContext(UserContext);
  const authenticated = (user != null);
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

  const handleSignUpSignIn = (event: React.MouseEvent<HTMLDivElement>) => {
    const actionType: string | undefined = event.currentTarget.dataset.action;
    if (actionType) {
      handleShowSignIn(actionType);
    }
  }

  const getUserMenuLabel = (user: any) => {
    if (authenticated) {
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
          <HeaderSearch/>
        </div>
        <div className={styles.userMenuDiv}>
          <input className={`${styles.headerInput} ${styles.headerButton}`} type="submit" name="userMenu" value={getUserMenuLabel(user)} onClick={handleOpenCloseDropDown} onBlur={handleCloseDropDown} />
          {showDropDown ?
            <div className={styles.headerDropDownContainer}>
              {(authenticated) ? authenticatedUserMenu : unauthenticatedUserMenu}
            </div>
            : null}
        </div>
      </div>
      <SubHeader />
    </header>
  );
}