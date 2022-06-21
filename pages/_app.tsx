import '../styles/globals.css'
import { useState } from "react";
import type { AppProps } from 'next/app';

import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';

import SiteHeader from '../components/siteHeader';
import SignIn from '../components/signIn';

Amplify.configure({ ...awsExports, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleShowSignIn = () => { setShowSignIn(true) };
  const handleCloseSignIn = () => { setShowSignIn(false) };

  return (
    <div>
      <SiteHeader handleShowSignIn={handleShowSignIn} />
      <div className="main-content">
        <Component {...pageProps} />
      </div>
      {showSignIn ? <SignIn handleExit={handleCloseSignIn} /> : null}
    </div>
  );
}
