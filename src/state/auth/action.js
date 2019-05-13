import jwtDecode from 'jwt-decode';
import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, SIGN_IN_SUCCESS, SIGN_IN_ERROR, LOADING
} from './actionTypes';
import axios from '../../lib/axios';
import { decodeToken, setLocalStorage } from '../../lib/auth';

export const request = () => ({
  type: REGISTER_REQUEST,
});

export const success = user => ({
  type: REGISTER_SUCCESS,
  user,
});

export const failure = error => ({
  type: REGISTER_FAILURE,
  error,
});

export const register = newUser => async dispatch => {
  try {
    dispatch(request());
    const registeredUser = await axios.post('/signup', newUser);
    const { token } = registeredUser.data.data;
    const decodedToken = decodeToken(token);
    dispatch(success(decodedToken));
    setLocalStorage('token', token);
  } catch (error) {
    dispatch(failure(error));
  }
};

export const signInSuccess = signin => ({
  type: SIGN_IN_SUCCESS,
  payload: signin
});

export const signInError = signinError => ({
  type: SIGN_IN_ERROR,
  payload: signinError
});

export const loading = loadingState => ({
  type: LOADING,
  payload: { loadingState }
});

export const loginAction = formData => async dispatch => {
  try {
    dispatch(loading(true));
    const login = await axios.post('/login', formData);
    const decoded = decodeToken(login.data.data.token);
    setLocalStorage(login.data.data.token);
    dispatch(signInSuccess(decoded));
  } catch (error) {
    dispatch(signInError(error.response.data));
  }
};
