import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components'


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'




class AuthorAccount extends Component {

    state = {
        author: {}
    };

    getAnAuthor() {
        const author = this.props.match.params.authorId
        axios.get(`/api/authors/${author}`).then(res => {
            this.setState({ author: res.data });
            console.log(res.data);
        });
    }

    componentDidMount() {
        this.getAnAuthor()
    }


    deleteAuthor = () => {
        const author = this.props.match.params.authorId

        axios.delete(`/api/authors/${author}`).then(res => {
            console.log(res)
            this.props.history.push("/")
        alert("Account Succesfully Deleted")
        })
    }

    render() {

        return (
            <div>
                <div>
                    <h1>My Account</h1>
                    <img src={"Profile pic here"} />
                </div>

                <div>
                    <p>{this.state.author.first_name}</p>
                </div>

                <div>
                    <h2>Settings</h2>
                    <img src={""} />
                </div>

                <div>
                    <h2>View Profile</h2>
                    <img src={"Eye/ Profile Icon here"} />
                </div>

                <div>
                    <Link to={'/memberlist'}><h2>Member Directory</h2></Link>
                    <img src={"Person/Directory Icon here"} />
                </div>

                <div>
                    <h2>Saved Resources</h2>
                    <img src={"Bookmark Icon here"} />
                </div>

                <div>
                    <h2>Donation History</h2>
                    <img src={"Dollar Icon here"} />
                </div>

                <div>
                    <h2>Submit A Manuscript</h2>
                    <img src={"Scroll or sumn Icon here"} />
                </div>

                <div>
                    <h2>Become A Reviewer</h2>
                    <img src={"Pencil and Paper Icon here"} />
                </div>


 <button onClick={this.deleteAuthor}>
                    DELETE THIS USER
                </button>
            </div>
        );
    }
}

export default AuthorAccount