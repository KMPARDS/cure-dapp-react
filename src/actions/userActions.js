import {history} from '../helpers/history'
import { userConstants } from '../constants';
import {userService} from '../services'
import { alertActions } from './alert.actions';

const login =  (signature , walletAddress , token) => {
    // console.log('login data is :');
    const request = (userWalletAddress)  => { return { type: userConstants.LOGIN_REQUEST, userWalletAddress } }
    const success = (loginData)  => { return { type: userConstants.LOGIN_SUCCESS, loginData } }
    const failure = (error) => { return { type: userConstants.LOGIN_FAILURE, error } }

    return dispatch => {
        dispatch(request({walletAddress}));
        userService.login(signature , walletAddress , token).then(
            loginData =>{
                console.log('loginData at userAction :',loginData);
             dispatch(success(loginData));
            },
            error =>{
            dispatch(failure(error));
            dispatch(alertActions.error(error));
            }
        )
    }
}

const logout = () => {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

export const userActions = {
    login,
    logout
}