import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import './MainHeader.css';
import Logo from "../../shared/ui/Logo/Logo";

const MainHeader = () => {
  return (
    <div className="header-container">
      <Navbar className="navbar">
        <NavbarBrand className="navbar-brand">
          <Logo />
          <div className="font-bold text-inherit brand-name">
            Music
          </div>
        </NavbarBrand>

        <NavbarContent className="flex-grow sm:flex gap-4" justify="end">
          <NavbarItem>
            <Link color="foreground" to={ '/' }>
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" to={ 'playlists' }>
              Playlists
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default MainHeader;
