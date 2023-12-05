import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '../styles/globals.css';

import { Amplify, Auth, AuthModeStrategyType } from 'aws-amplify';
import SignIn from '../components/signIn';
import SiteHeader from '../components/siteHeader';
import awsExports from '../src/aws-exports';
import { UserContext } from '../utils/userContextMethods';

Amplify.Logger.LOG_LEVEL = 'DEBUG';
Amplify.configure({
  ...awsExports,
  ssr: true,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }
});

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [authAction, setAuthAction] = useState('');

  const getUser = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleShowSignIn = (actionType: string) => {
    setAuthAction(actionType);
    setShowSignIn(true);
  }

  const handleCloseSignIn = () => { setShowSignIn(false); }
  const handleAuthSuccess = ({ currentUser, nextAction }: any) => {
    if (user != currentUser) {
      setUser(currentUser);
    }

    if (nextAction) {
      setAuthAction(nextAction);
    } else if (authAction != 'signOut') {
      setShowSignIn(false);
    }
  }

  return (
    <UserContext.Provider value={user}>
      <SiteHeader handleShowSignIn={handleShowSignIn} />
      <Component {...pageProps} />
      {showSignIn ? <SignIn handleExit={handleCloseSignIn} handleSuccess={handleAuthSuccess} authType={authAction} /> : null}
    </UserContext.Provider>
  );
}
