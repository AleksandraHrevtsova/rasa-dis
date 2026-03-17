import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { setToken, clearToken } from '../auth/tokenManager';
import api from '../api/client';

const endpoints = {
  login: '/api/auth/login',
  logout: '/api/auth/logout',
  me: '/api/auth/me'
}

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

export const login = async(email, password) => {
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const token = await cred.user.getIdToken();
    setToken(token);

    const { data } = await api.post(endpoints.login);
    return data;
  } catch (err) {
    console.error('Auth error:', err.code);
    return {
      user: null,
      error: mapAuthError(err),
    };
  }
};

export const logout = async () => {
  await api.post(endpoints.logout);
  await signOut(auth);
  clearToken();
  window.location.href = '/login';
};

export const getMe = async () => {
  const { data } = await api.get(endpoints.me);
  return data;
};