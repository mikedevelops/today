import axios from 'axios';
import { saveUser } from './userActions';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

/**
 * Start login request
 * @return {{type: string}}
 */
export const loginStart = () => ({
  type: LOGIN_START,
});

/**
 * Successful login
 * @return {{type: string, user: *}}
 */
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

/**
 * Error with login
 * @param error
 * @return {{type: string, error: *}}
 */
export const loginError = error => ({
  type: LOGIN_ERROR,
  error,
});

/**
 * Login request
 * @return {Function}
 * @param loginData
 */
export const login = loginData => (dispatch) => {
  dispatch(loginStart());

  axios.post('http://localhost:8080/login', loginData)
    .then(({ data }) => {
      dispatch(saveUser(data));
      dispatch(loginSuccess());
    }).catch((error) => {
      dispatch(loginError(error));
    });
};
