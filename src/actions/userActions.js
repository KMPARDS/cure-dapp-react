import {history} from '../helpers/history'
import { userConstants } from '../constants';
import {userService} from '../services'

const login = (signature , walletAddress , token) => {
    console.log('login data is :');

    const request = (user)  => { return { type: userConstants.LOGIN_REQUEST, user } }
    const success = (user)  => { return { type: userConstants.LOGIN_SUCCESS, user } }
    const failure = (error) => { return { type: userConstants.LOGIN_FAILURE, error } }

    return dispatch => {
        dispatch(request({walletAddress}));
        userService.login(signature , walletAddress , token).then(
            user =>{
                // dispatch(success(user));
            },
            error =>{
                // dispatch(failure(error));
            }
        )
    }
    
    // function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    // function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    // function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

const logout = () => {
    return { type: userConstants.LOGOUT };
}

export const userActions = {
    login,
    logout
}