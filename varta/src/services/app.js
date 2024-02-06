import AuthService from "./auth";
import TokenService from "./token";
import store from "../redux-store/store";
import userActions from "../redux-store/userSlice";

const login = async (username, password) => {
  try {
    // api call through service
    let res = await AuthService.login(username, password);

    // Update Token
    TokenService.setUser(username);
    TokenService.setAccessToken(res.token);

    // Update Store
    store.dispatch(userActions.updateUser(username));
    return { status: true };
  } catch (error) {
    return { status: false, error: error };
  }
};

const logout = async () => {
  try {
    // Remove Auth Token
    TokenService.removeUser();

    // api call through service
    let res = await AuthService.logout();

    // Update Store
    store.dispatch(userActions.deleteUser());
  } catch (error) {
    console.log("error", error);
  }
};

const isAuthenticated = async () => {
  try {
    if (TokenService.getAccessToken())
      return await AuthService.isAuthenticated();
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const AppServices = { login, logout, isAuthenticated };

export default AppServices;
