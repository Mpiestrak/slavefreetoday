import React, { Component } from 'react';
import styled from 'styled-components'

const Nav = styled.div` 
  background: #0A2342;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  height: 150px;
  width: 100vw;
  left: 0px;
  right: 0px;
  
  #slave-text {
    color: white;
    font-weight: 0px;
    left: 71px;
    top: 35px;
    font-weight: bolder;
    font-size: 36px;
    height: 50px;
    margin: 0 0 30px 0;
   }
  
  #green-text {
    color: #A6B21F;
  }

  #nav-links {
    display: flex;
    color: white;
    list-style: none;
    top: 110px;
    left: 71px;
   }

`

class NavBar extends Component {
  render() {
    return (
      <Nav id="nav-container" className="some-class">
          <h2 id="slave-text">Slave<span id="green-text">Free Today</span></h2>
        <ul id={"nav-links"}>
          <li>JOURNAL</li>
          <li>RESOURCES</li>
          <li>MULTIMEDIA</li>
          <li>CALENDAR</li>
          <li>ABOUT</li>
        </ul>

      </Nav>
    );
  }
}

export default NavBar;