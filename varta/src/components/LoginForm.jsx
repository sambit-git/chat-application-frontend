import { useRef } from "react";
import { useSelector } from "react-redux";
import style from "./styles/LoginForm.module.css";
import AuthService from "../services/auth";

const LoginForm = () => {
  const username = useRef();
  const password = useRef();
  const user = useSelector((state) => state.user.username);
  const handleLogin = () => {
    AuthService.login(username.current.value, password.current.value);
  };
  return (
    <div className={style.container}>
      <p>Login & Happy Chatting</p>
      <input
        type="text"
        ref={username}
        name="username"
        id="username"
        placeholder="username"
      />
      <input
        ref={password}
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginForm;
