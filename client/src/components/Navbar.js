import React, { Component } from 'react';
import styled from 'styled-components'

const Nav = styled.div`
// position: absolute; 
  background: #0A2342;
  boxShadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  height: 20vh;
  width: 100%;
  left: 0px;
  right: 0px;
`

  const Slavetext = styled.div`
    // display: flex;
    // justify-content: center;
    position: relative;
    color: white;
    margin-left: 45px;
    top: 35px;
    font-size: 37px;
    height: 50px;
  `
  
  const Greentext = styled.span`
    color: #A6B21F;
    font-weight: bold;
  `

  const Navlinks = styled.ul `
    display: flex;
    justify-content: space around;
    position: absolute;
    padding: 15px;
    // color: white;
    // list-style: none;
    // text-decoration: none;
    // top: 110px;
    left: 71px;
`
const NavA = styled.a`
    text-decoration: none;
    padding: 0px;
    color: white;
    // margin-right: 50px;
    margin-top: 40px;
    font-size: 24px;
    
`
const NavSearch = styled.input`
    position: absolute;
    // padding: 0px 0px 0px 0px;
    width: 304px;
    height: 32px;
    left: 999px;
    top: 108px;
  `
const SignInButton = styled.button`
    position: relative;
    width: 146.84px;
    height: 45px;
    padding: 0px 0px 0px 0px;
    margin-left: 999px;
    margin-top: 2px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
    color: #FFFFFF;
    background-color: #0A2342;
    border-radius: 6px;
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
    border-radius: 6px;
    border: none;
    width: 161.34px;
    height: 45px;
    left: 1163.66px;
    top: 52.85px;
`


class NavBar extends Component {
  render() {
    return (
      <Nav>
          <Slavetext className="slavetext">Slave<Greentext>Free Today</Greentext></Slavetext>
        <Navlinks>
          <NavA href='#'>JOURNAL</NavA>
          <NavA href='#'>RESOURCES</NavA>
          <NavA href='#'>MULTIMEDIA</NavA>
          <NavA href='#'>CALENDAR</NavA>
          <NavA href='#'>ABOUT</NavA>
        </Navlinks>
        <div>
        <SignInButton>SIGN IN</SignInButton>
        <DonateButton>DONATE</DonateButton>
        </div>
        <NavSearch type="text"></NavSearch>
        
      </Nav>
    );
  }
}

export default NavBar;