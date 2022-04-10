import authHeader from './auth-header'
const axios = require('axios');

const API_URL = 'https://sheltered-dusk-77313.herokuapp.com';
class userService {
  getPublicContent() {
    return axios.get(API_URL + '/users');
  }
  getUserBoard() {
    return axios.get(API_URL + '/users/me', { headers: authHeader() });
  }
}
  export default new userService();