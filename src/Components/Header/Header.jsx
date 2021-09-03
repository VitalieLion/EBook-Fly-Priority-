import style from "./Header.module.css";
import logo from "../../logo.png";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <NavLink to="/Main">
          <img src={logo} width="200px" alt="" />
        </NavLink>
      </div>
      <div className={style.searchBar}>
        <input type="text" placeholder="Search..." width="300px" />
        <button className={style.searchBtn}>Search...</button>
      </div>
      <div className={style.login}>
        <button href="#">Login</button>
      </div>
    </div>
  );
};

export default Header;
