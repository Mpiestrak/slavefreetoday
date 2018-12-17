import React, {Component} from 'react';
import styled from 'styled-components'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const options = [
    { key: 'United States', text: 'United States', value: 'US' },
    { key: 'United Kingdom', text: 'UK', value: 'UK' },
  ]

const Body = styled.body`
padding: 50px;
`
const Header = styled.h1`
    color: #0A2342;
`

class CreateAccount extends Component {
    render() {
        return (
            <Body>
                <Header>CREATE ACCOUNT</Header>
                <Form>
                    <Form.Field>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <input placeholder='City' />
    </Form.Field>
    <Form.Group widths='equal'>
    <Form.Select fluid label='' options={options} placeholder='Country' />
    </Form.Group>
    <Form.Field>
    <Form.Field>
      <input placeholder='Organization/Institution you currently work for' />
    </Form.Field>
    <Form.Select fluid label='' options={options} placeholder='Primary Occupation' />
    <Form.Select fluid label='' options={options} placeholder='Secondary Occupation' />
    </Form.Field>
    <Form.Field>
      <input placeholder='Email Address' />
    </Form.Field>
    <Form.Field>
    <input placeholder='Password' />
    </Form.Field>
    <Form.Field>
    <input placeholder='Re-Enter Password' />
    </Form.Field>
    <Checkbox label='I want my profile to be accessible to other memberson on this site 
      so that I can access the directory of scholars and practitioners on this site.' />
      <Checkbox label='I want to receive updates for events near me and when new resources
      are added to this site.' />
      <br></br>
    <Button color='olive' type='submit'>Next</Button>
  </Form>
            </Body>
        );
    }
}

export default CreateAccount;