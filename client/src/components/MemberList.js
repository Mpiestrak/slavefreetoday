import React, {Component} from 'react';
import {AxiosInstance as axios} from "axios";




class MemberList extends Component {

    state = {
        users: []
    }

     getAllUsers = () => {
        axios.get('/user').then((res) => {
            console.log(res)
            this.setState({ users: res.data })
        })
    }

    componentDidMount() {
        this.getAllUsers()
    }

    render() {
        return (
            <div>
                <h1>Member Directory</h1>
                <div>
                     {this.state.users.map((user) => (
                        <div key={user._id}>
                            <Link to={`/user/${user._id}`}>{user.username}</Link>
                        </div>
                    ))}
                </div>


            </div>
        );
    }
}

export default MemberList;