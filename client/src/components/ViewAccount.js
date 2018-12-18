import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

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

        axios.delete(`/api/authors/${user}`).then(res => {
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
                    <p>{this.state.user.first_name}</p>
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
                    <h2>Saved Resources</h2>
                    <img src={"Bookmark Icon here"} />
                </div>

                <div>
                    <h2>Donation History</h2>
                    <img src={"Dollar Icon here"} />
                </div>

                <div>
                    <h2>Become A Reviewer</h2>
                    <img src={"Pencil and Paper Icon here"} />
                </div>


<button onClick={this.deleteViewUser}>
                    DELETE THIS USER
                </button>

            </div>
        );
    }
}

export default ViewAccount;