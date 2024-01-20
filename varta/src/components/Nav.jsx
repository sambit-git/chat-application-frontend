import { Link } from "react-router-dom";

import style from "./styles/Nav.module.css";

const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.logo}>Varta</div>
      <div className={style.links}>
        <Link to="/contact" className={style.link}>
          Contact
        </Link>
        <Link to="/login" className={style.link}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Nav;
