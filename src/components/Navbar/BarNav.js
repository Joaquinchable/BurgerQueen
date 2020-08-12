import React from "react";
import Logo from "./../Logotipo/Logo";
import styled from "styled-components";
import { ContainerBox } from "./../../Layout/index";
import BarNavItems from "./BarNavItems";

const FixedWrapper = styled.header`
  position: fixed;
  background-color: var(--color-mainDark);
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  @media ${props => props.theme.mediaQueries.large} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const BarNav = ({ loggedIn }) => {
  return (
    <FixedWrapper>
      <ContainerBox>
        <Wrapper>
          <Logo />
          <BarNavItems loggedIn={loggedIn} />
        </Wrapper>
      </ContainerBox>
    </FixedWrapper>
  );
};

export default BarNav;
