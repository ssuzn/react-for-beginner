import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <NavBar>
        <NavbarMenu to={'/'}>Main</NavbarMenu>
      </NavBar>
    </div>
  );
}

const NavBar = styled.div`
  width: 100%;
  background-color: black;
  padding: 15px 0px;
  text-align: center;
`;

const NavbarMenu = styled(Link)`
  color: white;
  margin: 8px;
  text-decoration: none;
`;

export default Nav;