import { getCurrentUser } from '../utilities/authMethods';
import { useState, useEffect } from 'react';

export default function AuthWrapper({ children }: any) {
  const userShell: any = {};
  const [user, setUser] = useState(userShell);
  useEffect(() => {
    const getUser = async () => {
      const user = await getCurrentUser();
      setUser(user);
    };
    getUser();
  }, []);

  if (user === {}) {
    return <div>'Spinner'</div>;
  } else {
    if (user === null) {
      return <div>'Unauthenticated'</div>;
    } else {
      return <div>{children}</div>;
    }
  }
}
