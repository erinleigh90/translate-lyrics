import { Auth } from 'aws-amplify';

export async function signUp(username: string, password: string, email: string) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email
      }
    });
    console.log(user);
  } catch (error: any) {
    console.log('error signing up:', error);
    if (error.toString().indexOf('InvalidPasswordException: Password did not conform with policy: Password not long enough') >= 0) {
      throw 'Oops! That password isn\'t long enough.';
    } else if (error.toString().indexOf('UsernameExistsException') >= 0) {
      throw 'Oh no! That username already exists. Is there anything else we can call you?';
    } else {
      throw 'Oops! Something went wrong, try a different username/password combination?';
    }
  }
}

export async function confirmEmail(username: string, code: string) {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log('error confirming sign up', error);
    throw 'That wasn\'t right. Please check your email and try again.';
  }
}

export async function signIn(username: string, password: string) {
  try {
    const user = await Auth.signIn(username, password);
  } catch (error) {
    console.log('error signing in', error);
    throw 'Hmmmm, that didn\'t work. Try a different username or password.';
  }
}