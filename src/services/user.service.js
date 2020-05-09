
import Config from '../helpers/Config'
import axios from 'axios';


const login = (signature , walletAddress , tokenId) =>{
    console.log('config value is :',Config);
    const data = {
        "signature"   : signature,
        "walletAddress" : walletAddress,
        "tokenId" : tokenId
    }

    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ signature  : signature , walletAddress : walletAddress , tokenId : tokenId })
    // };

    axios.post(Config.baseUrl + '/api/auth/verifyMessage',data,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
    //   return fetch(`${Config.baseUrl}/api/auth/verifyMessage`, requestOptions)
      .then(resp => {
        console.log('resp of verify message :',resp);
      }).catch(error => {
        console.log('error of verify message :',error);
      })

    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));

    //         return user;
    //     });
}

const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}


export const userService = {
    login,
    logout,
};
