import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import settings from '../images/Settings.png'
import view from '../images/View.png'
import memberlist from '../images/Directory.png'
import bookmark from '../images/Bookmark.png'
import donations from '../images/Money.png'
import manuscript from '../images/Paper_Scroll.png'
import review from '../images/Reviewer.png'


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


class AuthorAccount extends Component {

    state = {
        author: {}
    };

    // getAnAuthor() {
    //
    // }

    componentDidMount() {
 const author = this.props.match.params.authorId
        axios.get(`/api/authors/${author}`).then(res => {
            this.setState({ author: res.data });
            console.log(res.data);
        });    }


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


                    <p>{this.state.author.first_name}</p>
                </div>

                <div>
                    <h2>Settings</h2>
                    <img src={settings} />
                </div>

                <div>
                    <h2>View Profile</h2>
                    <img src={view} />
                </div>

                <div>
                    <Link to={'/memberlist'}><h2>Member Directory</h2></Link>
                    <img src={memberlist} />
                </div>

                <div>
                    <h2>Saved Resources</h2>
                    <img src={bookmark} />
                </div>

                <div>
                    <h2>Donations</h2>
                    <img src={donations} />
                </div>

                <div>
                    <h2>Submit A Manuscript</h2>
                    <img src={manuscript} />
                </div>

                <div>
                    <h2>Become A Reviewer</h2>
                    <img src={review} />
                </div>


 <button onClick={this.deleteAuthor}>
                    DELETE THIS USER
                </button>
            </div>
        );
    }
}

export default AuthorAccount