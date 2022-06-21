import { Auth } from 'aws-amplify';
import styles from '../styles/Home.module.css';

export default function SignIn({ handleExit, authType }: any) {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault();

    const form: FormData = new FormData(event.target);
    if (form.get('username') && form.get('password')) {
      const username: string = form.get('username') as string;
      const password: string = form.get('password') as string;

      if (authType == 'signUp') {

        try {
          const { user } = await Auth.signUp({
            username,
            password
          });
          console.log(user);
        } catch (error) {
          console.log('error signing up:', error);
        }
      } else if (authType == 'signIn') {
        try {
          const user = await Auth.signIn(username, password);
        } catch (error) {
          console.log('error signing in', error);
        }
      }
    } else {

    }
  };

  return (
    <div>
      <div className={styles.modalBackdrop} onClick={handleExit}></div>
      <div className={styles.modal} role="dialog">
        <div className={styles.modalExit}>
          <button aria-label="Close" type="button" onClick={handleExit}>
            <span>
              <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                <path d="m6 6 20 20"></path>
                <path d="m26 6-20 20"></path>
              </svg>
            </span>
          </button>
        </div>
        <header className={styles.modalHeader}>
          <div>
            <h3>{(authType == 'signIn') ? 'Log In' : 'Sign Up'}</h3>
          </div>
        </header>
        <div className={styles.modalBody}>
          {(authType == 'signIn') ? <h2>Welcome back </h2> : <p>Nice to meet you. Sign Up to start adding your favorite song lyrics!</p>}
          <form className={styles.signInForm} onSubmit={handleSubmit}>
            <div className={styles.inputFields}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                required />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required />
            </div>
            <input className={styles.signInSubmit} type="submit" name="Sign In" />
          </form>
        </div>
      </div>
    </div>
  );

}
