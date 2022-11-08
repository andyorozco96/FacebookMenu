import React, { useState } from "react";
import style from "../sass/components/_navItem.module.scss";

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className={style.navItem}>
      <a href="#" className={style.iconButton} onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default NavItem;
