import React, {Component} from 'react';

class MyAccount extends Component {

    state = {
        user: {}
    }

        currentUser = () => {
        // make an api call to get one single user
        // On the server URL is '/api/users/:userId'
        const userId = this.props.match.params.userId
        axios.get(`/user/${userId}`).then(res => {
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
                {/**/}
                {/*/!* Shows some info about the user here. *!/*/}
                {/*<h1>{this.state.user.username}</h1>*/}
                {/*<br />*/}
                {/*{this.state.user.image}*/}
                {/*<br />*/}
                {/*<div>*/}

                    {/*<DeckList {...this.props} />*/}
                {/*</div>*/}
                {/*<DeleteUser {...this.props} />*/}
            {/*</div>*/}
        );
    }
}

export default MyAccount;