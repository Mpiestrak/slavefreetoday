import React, {Component} from 'react';
import {AxiosInstance as axios} from "axios";

class MyAccount extends Component {

    state = {
        user: {}
    }

        currentUser = () => {
        // make an api call to get one single user
        // On the server URL is '/api/users/:userId'
        const userId = this.props.match.params.userId
        axios.get(`api/viewuser/1`).then(res => {
            this.setState({ user: res.data })
            console.log(res)
            console.log(this.state)
        }


        )
    }

    componentDidMount() {
        this.currentUser()
    }

    render() {
        return (
            <div>
                <h1>MyAccount</h1>

            </div>
        );
    }
}

export default MyAccount;