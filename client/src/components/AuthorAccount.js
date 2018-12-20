import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import settings from '../images/Settings.png'
import memberlist from '../images/Directory.png'
import bookmark from '../images/Bookmark.png'
import donations from '../images/Money.png'
import manuscript from '../images/Paper_Scroll.png'
import '../css/MyAccount.css'


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
            <div className="AccountDiv">

                <div className="Profile">
                    <h1>My Account</h1>
                    <img src={this.state.author.img} />

                    <p>{this.state.author.first_name} {this.state.author.last_name}</p>

                    <button onClick={this.deleteAuthor}>
                    DELETE THIS USER
                </button>
                </div>

            <div className="Options">
                <div>
                    <h2>Update</h2>
                    <img src={settings} />
                </div>


                {/*MEMBERLIST*/}
                <div>
                    <Link to={'/memberlist'}>
                        <h2>Member Directory</h2>
                        <img src={memberlist} />
                    </Link>
                </div>

                {/*<div>*/}
                    {/*<h2>Saved Resources</h2>*/}
                    {/*<img src={bookmark} />*/}
                {/*</div>*/}

                 <div>
                        <Link to={'/donations'}>
                        <h2>Donations</h2>
                        <img src={donations} />
                        </Link>
                    </div>

                {/*SUBMIT A MANUSCRIPT*/}
                <div>
                    <Link to={'/manuscriptinfo'}>
                    <h2>Submit A Manuscript</h2>
                    <img src={manuscript} />
                    </Link>
                </div>
            </div>



            </div>
        );
    }
}

export default AuthorAccount