import { userConstants } from '../constants';

let loginData = localStorage.getItem('crdfnd');
const initialState = loginData ? { loggedIn: true, loginData } : {};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        userWalletAddress : action.userWalletAddress
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn  : true,
        loginData : action.loginData
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}