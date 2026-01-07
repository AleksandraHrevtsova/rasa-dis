import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function mapAuthError(error) {
  const code = error?.code;

  switch (code) {
    case 'auth/invalid-credential':
      return {
        field: 'input',
        message: 'invalid_credentials',
      };

    case 'auth/too-many-requests':
      return {
        field: 'form',
        message: 'too_many_requests',
      };

    case 'auth/network-request-failed':
      return {
        field: 'form',
        message: 'network_error',
      };

    default:
      return {
        field: 'form',
        message: 'authorization_error',
      };
  }
};


export async function login(email, password) {
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    return { user: cred.user, error: null };
  } catch (err) {
    console.error('Auth error:', err.code);
    return {
      user: null,
      error: mapAuthError(err),
    };
  }
}