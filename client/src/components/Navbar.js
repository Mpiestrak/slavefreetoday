import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  position: relative;
  background: #0a2342;
  box-shadow: 0px 3px 5px 0px #000;
  height: 20vh;
  width: 100%;
  left: 0px;
  right: 0px;
`;

const Slavetext = styled.div`
  position: relative;
  color: white;
  margin-left: 45px;
  top: 35px;
  font-size: 37px;
  height: 50px;
  width: 274px;
`;

const Greentext = styled.span`
  color: #a6b21f;
  font-weight: bold;
`;

const Navlinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 16px;
`;
const NavA = styled.a`
  text-decoration: none;
  padding: 0px;
  color: white;
  margin-top: 60px;
  font-size: 24px;
`;
const NavSearch = styled.input`
  width: 315px;
  height: 32px;
  top: 108px;
`;
const SignInButton = styled.button`
  width: 146.84px;
  height: 45px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 24px;
  color: white;
  background-color: #0a2342;
  border-radius: 6px;
  margin-bottom: 10px;
  margin-right: 10px;
  text-decoration: none;
`;

const DonateButton = styled.button`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 24px;
  color: #ffffff;
  background-color: #a6b21f;
  border-radius: 6px;
  border: none;
  width: 161.34px;
  height: 45px;
  left: 1163.66px;
  top: 52.85px;
`;

class NavBar extends Component {
  render() {
    return (
      <Nav>
        <Slavetext className="slavetext">
          Slave<Greentext>Free Today</Greentext>
        </Slavetext>
        <Navlinks>
          <NavA to="/articles">ARTICLES</NavA>
          <NavA to="#">RESOURCES</NavA>
          <NavA to="#">MULTIMEDIA</NavA>
          <NavA to="#">CALENDAR</NavA>
          <NavA to="#">ABOUT</NavA>
          <div>
            <Link to="/createaccount">
              <SignInButton style={{ textDecoration: "none" }}>
                SIGN IN
              </SignInButton>
            </Link>
            <Link to="/donations">
              <DonateButton>DONATE</DonateButton>
            </Link>
            <br />
            <NavSearch type="text" />
          </div>
        </Navlinks>
      </Nav>
    );
  }
}

export default NavBar;
