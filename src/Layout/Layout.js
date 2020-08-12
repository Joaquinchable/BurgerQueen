import React from "react";
import styled from "styled-components";
import BarNav from "./../components/Navbar/BarNav";
import SideBar from "./../components/Navbar/SideBar/SideBar";
import { connect } from 'react-redux';

const MainWrapper = styled.main`
  width: 100%;
  margin-top: 6rem;
  padding-top:5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
 
`;

const Layout = ({ children , loggedIn}) => {
  return (
    <>
      <BarNav  loggedIn={loggedIn} />
      <SideBar  loggedIn={loggedIn}/>

      <MainWrapper>{children}</MainWrapper>
    </>
  );
};


const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth,
});

export default connect(mapStateToProps)(Layout);





