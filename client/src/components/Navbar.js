import React, { Component } from 'react';

import styled from 'styled-components'

const Nav = styled.div`

  background: #0A2342;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  height: 150px;
  width: 1366px;
  left: 0px;
  right: 0px;
  
  
  a {
    text-decoration: none;
    padding-left: 10px;
    color: black;
    &:active {
      color: red;
    }
  }
  
  #slave-text {
    position: absolute;
    color: white;
    font-weight: 0px;
    left: 71px;
    top: 35px;
   }
  
  #green-text {
    color: #A6B21F;
  }

  #nav-links {
    position: absolute;
    display: flex;
    color: white;
    justify-content: space-evenly;
    list-style: none;
    border:solid;
    width:100vw;
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