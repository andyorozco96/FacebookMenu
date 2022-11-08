import React, { useState } from "react";
import style from "../sass/components/_dropdownMenu.module.scss";
import transitions from "../sass/components/_transitions.module.scss";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
    console.log(height);
  }

  function DropdownItem(props) {
    return (
      <a
        className={style.menuItem}
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className={style.iconButton}>{props.leftIcon}</span>
        {props.children}
        {props.rightIcon && (
          <span className={style.iconRight}>{props.rightIcon}</span>
        )}
      </a>
    );
  }

  return (
    <div className={style.dropdown} style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
        classNames={{
          //appear: transitions.menu,
          appearActive: transitions.menu,
          enter: transitions.menuPrimaryEnter,
          enterActive: transitions.menuPrimaryEnterActive,
          exit: transitions.menuSecondaryExit,
          exitActive: transitions.menuPrimaryExitActive,
        }}
      >
        <div className={style.menu}>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
        classNames={{
          //appear: transitions.menu,
          enter: transitions.menuSecondaryEnter,
          enterActive: transitions.menuSecondaryEnterActive,
          exit: transitions.menuSecondaryExit,
          exitActive: transitions.menuSecondaryExitActive,
        }}
      >
        <div className={style.menu}>
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main"></DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
