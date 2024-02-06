import api from "./api";

const login = (username, password) => {
  return api
    .post("/accounts/login/", { username, password })
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error);
    });
};

const logout = () => {
  return api.get("/accounts/logout").then((res) => {
    return res.data;
  });
};

const isAuthenticated = () => {
  return api
    .get("/accounts/validate_login")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response.status === 401) return false;
      else throw err;
    });
};

const AuthService = { login, logout, isAuthenticated };

export default AuthService;
