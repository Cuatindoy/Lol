import React, {useState} from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  IconLogo,
  Menu,
  MenuItem,
  MenuItemLink,
  IconLogoMobile,
} from "./Navbar.elements";
import {  FaBars, FaTimes } from "react-icons/fa";
import Imagen from "./Imagen";
import { NavLink } from "react-router-dom";
import "./Nav.css"


const Navbaraapp = () => {
  const [click, setClick] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
  }
return (
<>
  <NavbarContainer>
    <NavbarWrapper>
   
      <IconLogo>
       <Imagen/>
      </IconLogo>

      <IconLogoMobile onClick = { () => ChangeClick ()}>
         {
           click ? <FaTimes /> : <FaBars />
         }
       </IconLogoMobile>

      <Menu click={click}>
        <MenuItem onClick = { () => ChangeClick ()}>
          <NavLink exact to="/Login" className="link"><MenuItemLink> Iniciar sesión </MenuItemLink>  </NavLink>
        </MenuItem>

        <MenuItem onClick = { () => ChangeClick ()}>
          <NavLink exact to="/Contactenos" className="link" > <MenuItemLink> Contáctanos  </MenuItemLink> </NavLink>
        </MenuItem>
        <MenuItem onClick = { () => ChangeClick ()}>
          <NavLink exact to="/Productos" className="link" > <MenuItemLink>  Productos </MenuItemLink>  </NavLink>

        </MenuItem>
        <MenuItem onClick = { () => ChangeClick ()}>
          <NavLink exact to="/Marcas" className="link" > <MenuItemLink> Servicios  </MenuItemLink></NavLink>
        </MenuItem>
      </Menu>
    </NavbarWrapper>
  </NavbarContainer>
</>
);
};

export default Navbaraapp;
