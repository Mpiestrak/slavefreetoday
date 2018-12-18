import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class ViewAccount extends Component {

    state = {
        user: []
    };

    getAUser() {
        const id = this.props.match.params.id
        axios.get(`/api/viewusers/${id}`).then(res => {
            this.setState({ user: res.data });
            console.log(res.data);
        });
    }

    componentDidMount() {
        this.getAUser()
    }

    render() {

        return (
            <div>
                <div>
                    <h1>My Account</h1>
                    <img src={"Profile pic here"} />

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
                    <Link to={`/memberlist`}><h2>Member Directory</h2></Link>
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





            </div>
        );
    }
}

export default ViewAccount;