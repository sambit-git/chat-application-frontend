import Illustration from "../components/Illutration";
import LoginForm from "../components/LoginForm";
import style from "./styles/Login.module.css";

const Login = () => {
  return (
    <div className={style.content}>
      <div className={style.left}>
        <Illustration />
      </div>
      <div className={style.right}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
