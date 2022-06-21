import '../styles/globals.css'
import { useState, useEffect, createContext } from 'react';
import type { AppProps } from 'next/app';

import { Amplify, Auth } from 'aws-amplify';
import awsExports from '../src/aws-exports';

import SiteHeader from '../components/siteHeader';
import SignIn from '../components/signIn';

Amplify.configure({ ...awsExports, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  const UserContext = createContext(null);
  const [user, setUser] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [authAction, setAuthAction] = useState('');

  const getUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (error: any) {
      console.log(error);
      setUser(null);
    }
  };

  useEffect(() => {
    getUser();
  });

  const handleShowSignIn = (actionType: string) => {
    setAuthAction(actionType);
    setShowSignIn(true);
  }
  const handleCloseSignIn = () => { setShowSignIn(false); }
  const handleSignInSuccess = () => {
    if (authAction == 'signUp') {
      setAuthAction('confirm');
    } else {
      setShowSignIn(false);
    }
  }

  return (
    <UserContext.Provider value={user}>
      <SiteHeader handleShowSignIn={handleShowSignIn} />
      <Component {...pageProps} />
      {showSignIn ? <SignIn handleExit={handleCloseSignIn} handleSuccess={handleSignInSuccess} authType={authAction} /> : null}
    </UserContext.Provider>
  );
}
