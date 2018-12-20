import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import settings from '../images/Settings.png'
import bookmark from "../images/Bookmark.png";
import donations from "../images/Money.png";
import review from "../images/Reviewer.png";
import '../css/MyAccount.css'



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
            <div className="AccountDiv">

                <div className="Profile">
                    <h1>My Account</h1>
                    <img src={this.state.user.img} />

                    <p>{this.state.user.first_name} {this.state.user.last_name}</p>

                    <button onClick={this.deleteViewUser}>
                    DELETE THIS USER
                </button>
                </div>

            <div className="Options">
                    {/*Update*/}
                    <div>
                        <h2>Update</h2>
                        <img src={settings} />
                    </div>

                    {/*Cool, but we can't save anything right now*/}
                    {/*<div>*/}
                        {/*<h2>Saved Resources</h2>*/}
                        {/*<img src={bookmark} />*/}
                    {/*</div>*/}

                    {/*DONATIONS*/}
                    <div>
                        <Link to={'/donations'}>
                        <h2>Donations</h2>
                        <img src={donations} />
                        </Link>
                    </div>

                    {/*UPGRADE ACCOUNT*/}
                    <div>
                        <h2>Become A Reviewer</h2>
                        <img src={review} />
                    </div>

                </div>


            </div>` `
        );
    }
}

export default ViewAccount;