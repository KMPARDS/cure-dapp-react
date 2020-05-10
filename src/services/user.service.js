
import Config from '../helpers/Config'
import axios from 'axios';

const login =  (signature , walletAddress , tokenId) =>{
    console.log('config value is :',Config);
    const data = {
        "signature"   : signature,
        "walletAddress" : walletAddress,
        "tokenId" : tokenId
    }

    return axios.post(Config.baseUrl + '/api/auth/verifyMessage',data,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => {
        console.log('resp of verify message :',resp.data);
      const  walletData = { "walletAddress"  : resp.data }
    return  axios.post(Config.baseUrl + '/api/auth//walletAddressLogin',walletData,{
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(resp => {
          console.log('resp of walletLogin :',resp);
          let loginData = resp.data
          localStorage.setItem('crdfnd', resp.data);
          return loginData;
        }).catch(error => {
          console.log('error of walletLogin :',error);
          return error;
        })
      }).catch(error => {
        console.log('error of verify message :',error);
      })
}

const logout = () => {
    localStorage.removeItem('crdfnd');
}

export const userService = {
    login,
    logout,
};
