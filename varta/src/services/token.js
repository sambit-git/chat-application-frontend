const KEY = "user";

const getAuthDetails = () => {
  return JSON.parse(localStorage.getItem(KEY)) || {};
};

const getAccessToken = () => {
  return getAuthDetails().token;
};

const setAccessToken = (token) => {
  let authDetails = getAuthDetails();
  authDetails.token = token;
  localStorage.setItem(KEY, JSON.stringify(authDetails));
};

const getUser = () => {
  return getAuthDetails().username;
};

const setUser = (username) => {
  let authDetails = getAuthDetails();
  authDetails.username = username;
  localStorage.setItem(KEY, JSON.stringify(authDetails));
};

const removeUser = () => {
  localStorage.removeItem(KEY);
};

const TokenService = {
  getUser,
  setUser,
  removeUser,
  getAccessToken,
  setAccessToken,
};

export default TokenService;
