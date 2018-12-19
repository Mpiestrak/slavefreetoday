import React, {Component} from 'react';
import styled from "styled-components";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

const Body = styled.body`
  padding: 50px;
`
const Header = styled.h1`
  color: #0a2342;
`
const Img = styled.img`
    background-image: url()
`
class Tier2 extends Component {
    render() {
        return (
            <Body>
        <Header>CREATE ACCOUNT</Header>
        <Form>
        <Form.Field>
        <input
              placeholder="Brief description of yourself and your work as it relates to modern slavery"
              type="text"
              style={{ width: "800px", height: "250px" }}
            />
            <Form.Field>
        <input
              placeholder="Brief description of yourself and your work as it relates to modern slavery"
              type="text"
              style={{ width: "800px" }}
            />
          </Form.Field>
          </Form.Field>
        </Form>
            </Body>
        );
    }
}

export default Tier2;