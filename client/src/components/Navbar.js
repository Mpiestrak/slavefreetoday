import React, { Component } from 'react';
import styled from 'styled-components'

const Nav = styled.div`
  position: absolute; 
  background: #0A2342;
  boxShadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  height: 150px;
  width: 1366px;
  left: 0px;
  right: 0px;
`
  
  // a {
  //   text-decoration: none;
  //   padding-left: 10px;
  //   color: black;
  //   &:active {
  //     color: red;
  //   }
  // }
  
  const Slavetext = styled.div`
    position: absolute;
    color: white;
    left: 71px;
    top: 35px;
    font-size: 36px;
    height: 50px;
  `;
  
  const Greentext = styled.span`
    color: #A6B21F;
    font-weight: bold;
  `

  const Navlinks = styled.li `
    position: absolute;
    display: flex;
    justify-content: space-between;
    color: white;
    list-style: none;
    text-decoration: none;
    top: 110px;
    left: 71px;
`
const NavSearch = styled.form`
    position: absolute;
    width: 325px;
    height: 32px;
    left: 999px;
    top: 108px;
  `
const SignInButton = styled.button`
    position: absolute;
    width: 146.84px;
    height: 45px;
    left: 999px;
    top: 52.85px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
    color: #FFFFFF;
    background-color: #0A2342;
    border-radius: 5px;
`

const DonateButton = styled.button`
    position: absolute;
    // width: 99.64px;
    // height: 34.62px;
    // left: 1027.08px;
    // top: 58.61px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
    color: #FFFFFF;
    background-color: #A6B21F;
    border-radius: 5px;
    
width: 161.34px;
height: 45px;
left: 1163.66px;
top: 52.85px;
`

class NavBar extends Component {
  render() {
    return (
      <Nav id="nav-container" className="some-class">
          <Slavetext className="slavetext">Slave<Greentext>Free Today</Greentext></Slavetext>
        <Navlinks>
          <li><a href='#'>JOURNAL</a></li>
          <li><a href='#'>RESOURCES</a></li>
          <li><a href='#'>MULTIMEDIA</a></li>
          <li><a href='#'>CALENDAR</a></li>
          <li><a href='#'>ABOUT</a></li>
        </Navlinks>
        <SignInButton>SIGN IN</SignInButton>
        <DonateButton>DONATE</DonateButton>
        <NavSearch><input type="text"></input></NavSearch>
      </Nav>
    );
  }
}

export default NavBar;