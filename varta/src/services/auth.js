import api from "./api";
import { useDispatch } from "react-redux";
import userActions from "../redux-store/userSlice";
import TokenService from "./token";

const login = (username, password) => {
  return api.post("/accounts/login/", { username, password }).then((res) => {
    TokenService.setUser(username);
    TokenService.setAccessToken(res.data.token);
    const dispatch = useDispatch();
    dispatch(userActions.updateUser(username));
    return res.data;
  });
};

const AuthService = { login };

export default AuthService;
