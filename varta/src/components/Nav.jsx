import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./styles/Nav.module.css";

const Nav = () => {
  const username = useSelector((state) => state.user.username);
  return (
    <div className={style.nav}>
      <div className={style.logo}>Varta</div>
      <div className={style.links}>
        <Link to="/contact" className={style.link}>
          Contact
        </Link>
        {username ? (
          <Link to="/profile" className={`${style.usernme} ${style.link}`}>
            {username}
          </Link>
        ) : (
          <Link to="/login" className={style.link}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
