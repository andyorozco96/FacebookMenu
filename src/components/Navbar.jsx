import React from "react";
import style from "../sass/components/_navbar.module.scss";

function Navbar(props) {
  console.log(props);
  return (
    <nav className={style.navbar}>
      <ul className={style.navbarNav}>{props.children}</ul>
    </nav>
  );
}

export default Navbar;
