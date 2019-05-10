import jwtDecode from 'jwt-decode';

export const redirectSocialAuth = type => {
  window.location.href = `https://author-haven-stage.herokuapp.com/api/v1/auth/${type}`;
};

export const decodeToken = token => jwtDecode(token);

export const setLocalStorage = (item, value) => localStorage.setItem(item, value);

export const getLocalStorage = (item, value) => localStorage.getItem(item, value);
