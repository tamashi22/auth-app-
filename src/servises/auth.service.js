import authHeader from "./auth-header";

const axios = require("axios");
const API_URL = " https://sheltered-dusk-77313.herokuapp.com/";
const register = async (email, password, name, age) => {
  const response = await axios.post(API_URL + "auth/signup", {
    email,
    password,
    name,
    age
  });
  return response.data;
};
const login = async (email, password) => {
  const response = await axios.post(API_URL + "auth/signin", {
    email,
    password
  });
  if (response.data.token) {
    localStorage.setItem("user-token", JSON.stringify(response.data));
    const profile = await axios.get(API_URL + "users/me", {
      headers: authHeader()
    });
    localStorage.setItem(
      "user",
      JSON.stringify({ ...profile.data, token: response.data.token })
    );
  }

  return response.data;
};
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  register,
  logout
};
export default authService;
