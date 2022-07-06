import "../styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";

// import { Amplify, Auth, AuthModeStrategyType } from "aws-amplify";
import { Amplify, Auth } from "aws-amplify";
import awsExports from "../src/aws-exports";

import { UserContext } from "../utilities/userContextMethods";
import SiteHeader from "../components/siteHeader";
import SignIn from "../components/signIn";

// import styles from "../styles/Home.module.css";

Amplify.configure({
  ...awsExports,
  // Possible TODO:
  // DataStore: {
  //   authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  // },
  ssr: true,
});

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [authAction, setAuthAction] = useState("");

  const getUser = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      console.log("currentUser", currentUser);
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
  };

  const handleCloseSignIn = () => {
    setShowSignIn(false);
  };
  const handleAuthSuccess = ({ currentUser, nextAction }: any) => {
    if (user != currentUser) {
      setUser(currentUser);
    }

    if (nextAction) {
      setAuthAction(nextAction);
    } else if (authAction != "signOut") {
      setShowSignIn(false);
    }
  };

  return (
    <UserContext.Provider value={user}>
      <SiteHeader handleShowSignIn={handleShowSignIn} />
      <Component {...pageProps} />
      {showSignIn ? (
        <SignIn
          handleExit={handleCloseSignIn}
          handleSuccess={handleAuthSuccess}
          authType={authAction}
        />
      ) : null}
    </UserContext.Provider>
  );
}
