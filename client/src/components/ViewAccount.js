import React, { Component } from 'react';
import axios from "axios";
import styled from 'styled-components'
import settings from '../images/Settings.png'
import view from '../images/View.png'
import {Link} from "react-router-dom";
import memberlist from "../images/Directory.png";
import bookmark from "../images/Bookmark.png";
import donations from "../images/Money.png";
import manuscript from "../images/Paper_Scroll.png";
import review from "../images/Reviewer.png";


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

class ViewAccount extends Component {

    state = {
        user: {}
    };

    getAUser() {
        const user = this.props.match.params.userId
        axios.get(`/api/viewusers/${user}`).then(res => {
            this.setState({ user: res.data });
            console.log(res.data);
        });
    }

    componentDidMount() {
        this.getAUser()
    }



    deleteViewUser = () => {
        const user = this.props.match.params.userId

        axios.delete(`/api/viewusers/${user}`).then(res => {
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

                    <p>{this.state.user.first_name}</p>
                </div>

                <div>
                    {/*Update*/}
                    <div>
                        <h2>Settings</h2>
                        <img src={settings} />
                    </div>

                    {/*/!*Kinda useless?*!/*/}
                    {/*<div>*/}
                        {/*<h2>View Profile</h2>*/}
                        {/*<img src={view} />*/}
                    {/*</div>*/}

                    {/*Cool, but we can't save anything right now*/}
                    <div>
                        <h2>Saved Resources</h2>
                        <img src={bookmark} />
                    </div>

                    {/*Link to donations*/}
                    <div>
                        <h2>Donations</h2>
                        <img src={donations} />
                    </div>

                    {/*This is a portal to upgrade account--not ready yet*/}
                    <div>
                        <h2>Become A Reviewer</h2>
                        <img src={review} />
                    </div>

                </div>


<button onClick={this.deleteViewUser}>
                    DELETE THIS USER
                </button>

            </div>
        );
    }
}

export default ViewAccount;