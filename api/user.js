import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {getApp} from 'firebase/app';

export const createUser = async (fullName, email, password) => {
  try {
    const app = getApp();
    const auth = getAuth(app);
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user.user, {
      displayName: fullName,
    });
    console.log(user);
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'That email address is already in use!'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'That email address is invalid!'};
    } else {
      return {error: 'Something went wrong!'};
    }
  }
};

export const loginUser = async (email, password) => {
  try {
    const app = getApp();
    const auth = getAuth(app);
    const response = await signInWithEmailAndPassword(auth, email, password);
    const token = await response.user.getIdToken();

    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    console.log(error);
    if (error.code === 'auth/user-not-found') {
      return {
        error:
          'The email you entered does not exist. Pleease create a new account!',
      };
    } else if (error.code === 'auth/wrong-password') {
      return {error: 'Please enter the correct password!'};
    } else if (error.code === 'auth/invalid-credential') {
      return {
        error:
          'Invalid login credentials. Please check your email and password and try again',
      };
    } else {
      return {status: false, error: 'Something went wrong!'};
    }
  }
};
