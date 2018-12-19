import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'
import email from '../images/Email.png'
import linkedin from '../images/LinkedIn.png'






class MemberList extends Component {


    state = {
        authors: []
    };



    //Call the user and set the state to the data received in response
    getAllAuthors() {
        axios.get(`/api/authors`).then(res => {
            console.log(res.data)
            this.setState({ authors: res.data })
        })
    }

    componentDidMount() {
        this.getAllAuthors()
    }

    render() {
        return (
            <div>

                <h1>Member Directory</h1>
                <div>
                {this.state.authors.map((author) => (
                    <div key={author.id}>

                        <Link to={`/authoraccount/${author.id}`}>
                            <img src={"Profile pic here"} />
                        </Link>
                        <div>
                            <h2>{author.first_name} {author.last_name}</h2>
                            <h2>{author.organization}</h2>

                            <p>{author.description}</p>

                            <a href={author.email}>
                            <img src={email}/>
                            </a>

                            <img src={linkedin} />

                        </div>

                            <hr />
                            <br />
                    </div>

                ))}
                </div>


            </div>

        );
    }
}

export default MemberList;