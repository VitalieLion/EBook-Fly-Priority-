import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navBar">
      <div className={style.navBar__inner}>
        <NavLink to="/Directory">Directory</NavLink>
        <NavLink to="/Learning">Learning</NavLink>
        <NavLink to="/Instruction">Instruction</NavLink>
        <NavLink to="/Interesting">Interesting</NavLink>
        <NavLink to="/Notes">Notes</NavLink>
        <NavLink to="/Comments">Your Comments</NavLink>
        <NavLink to="/Records">Records</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
