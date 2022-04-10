const axios = require('axios');
const API_URL = " https://sheltered-dusk-77313.herokuapp.com/";
const register = ( email, password,name,age) => {
  return axios.post(API_URL + "auth/signup", {
    email,
    password,
    name,
    age,
  });
};
const login = async (email, password) => {
  const response = await axios
        .post(API_URL + "auth/signin", {
            email,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};
const logout = () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  login,
  logout,
};
export default authService;