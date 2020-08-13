import React from "react";
import BarNavItem from "./BarnNavItem";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  margin-top: ${props => (props.mobile ? "-6rem" : null)};
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${props => (props.mobile ? "column" : "row")};
  align-items: center;
  height: 100%;
`;

const BarNavItems = ({ mobile, clicked, loggedIn }) => {
  let links;

  if (loggedIn.uid) {
    links = (
      <Ul mobile={mobile}>
        <BarNavItem mobile={mobile} clicked={clicked} link="">
          Breakfast
        </BarNavItem>

        <BarNavItem mobile={mobile} clicked={clicked} link="/lunchdiner">
          Lunch & Diner
        </BarNavItem>
        <BarNavItem mobile={mobile} clicked={clicked} link="/logout">
          Logout
        </BarNavItem>
      </Ul>
    );
  } else {
    links = (
      <Ul mobile={mobile}>
        <BarNavItem mobile={mobile} clicked={clicked} link="/login">
          LogIn
        </BarNavItem>
        <BarNavItem mobile={mobile} clicked={clicked} link="/signup">
          SignUp
        </BarNavItem>
      </Ul>
    );
  }

  return <Nav mobile={mobile}>{links}</Nav>;
};

export default BarNavItems;
