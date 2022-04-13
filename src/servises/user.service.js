import authHeader from "./auth-header";
const axios = require("axios");

const API_URL = "https://sheltered-dusk-77313.herokuapp.com";
class userService {
  async getPublicContent() {
    const response = await axios.get(API_URL + "/users", {
      headers: authHeader()
    });
    console.log(response.data);
    return response.data;
  }

  async getUserBoard() {
    const response = await axios.get(API_URL + "/users/me", {
      headers: authHeader()
    });
    return response.data;
  }
}
export default new userService();
