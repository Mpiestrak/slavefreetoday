import React, {Component} from "react";
import styled from "styled-components";
import {Button, Checkbox, Form} from "semantic-ui-react";
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const options = [
    {key: "United States", text: "United States", value: "US"},
    {key: "United Kingdom", text: "UK", value: "UK"}
];

const Body = styled.body`
  padding: 50px;
`;
const Header = styled.h1`
  color: #0a2342;
`;

class CreateAccount extends Component {
    state = {
        user: [],
        newUser: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            organization: "",
            description: "",
            img: ""
        }

    };
    handleChange = e => {
        const createdUser = {...this.state.newUser};

        createdUser[e.target.name] = e.target.value;
        this.setState({
            newUser: createdUser

        });
        console.log('value', e.target.value)
    };

    handleSubmit = e => {
        e.preventDefault();
        const user = this.state.newUser
        console.log(user)
        axios.post(`/api/authors/`, user)
            .then(res => {
                console.log(res.data);
                this.props.history.push(`/`);
                console.log(res);
                console.log(res.data);
            });
    };

    componentDidMount() {
    }

    render() {
        return (
            <Body>
            <Header>CREATE ACCOUNT</Header>
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <input
                        placeholder="First Name"
                        type="text"
                        onChange={this.handleChange}
                        name="first_name"
                        style={{width: "400px"}}
                        value={this.state.newUser.first_name}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        placeholder="Last Name"
                        type="text"
                        onChange={this.handleChange}
                        name="last_name"
                        style={{width: "400px"}}
                        value={this.state.newUser.last_name}

                    />
                </Form.Field>

                <Form.Field>
                    <Form.Field>
                        <input
                            type="text"
                            name="organization"
                            placeholder="Organization/Institution you currently work for"
                            value={this.state.newUser.organization}
                            onChange={this.handleChange}
                        />
                    </Form.Field>

                    <input
                        placeholder="Description"
                        type="text"
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.newUser.description}

                    />{" "}
                </Form.Field>
                <Form.Field>
                    <input
                        placeholder="Email Address"
                        type="text"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.newUser.email}

                    />
                </Form.Field>
                <Form.Field>
                    <input
                        placeholder="Password"
                        type="text"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.newUser.password}

                    />
                </Form.Field>
                <Form.Field>
                    <input
                        placeholder="Image"
                        type="url"
                        name="img"
                        onChange={this.handleChange}
                        value={this.state.newUser.img}

                    />
                </Form.Field>

                {/* <Checkbox
            label="I want my profile to be accessible to other memberson on this site 
      so that I can access the directory of scholars and practitioners on this site."
          />
          <Checkbox
            label="I want to receive updates for events near me and when new resources
      are added to this site."
          /> */}
                <br/>
                <Button color="olive" type="submit">
                    NEXT
                </Button>
            </Form>
            </Body>
        );
    }
}

export default CreateAccount;
