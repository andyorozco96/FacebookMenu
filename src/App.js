import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import DropdownMenu from "./components/DropdownMenu";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";

function App() {
  return (
    <Navbar>
      <NavItem icon={<BellIcon />}></NavItem>
      <NavItem icon={<PlusIcon />}></NavItem>
      <NavItem icon={<MessengerIcon />}></NavItem>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

export default App;
