import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";




class MemberList extends Component {


    state = {
        authors: []
    };



         //Call the user and set the state to the data received in response
    getAllAuthors() {
        axios.get("/api/authors").then(res => {
            console.log(res.data)
            this.setState({ authors: res.data })
        })
    }

    componentDidMount() {
        this.getAllAuthors()
    }

    render() {
        return (
            <div>

            <h1>Member Directory</h1>
                {this.state.authors.map((author)=> (
                    <div key={author.id}>
                        {/*Image here*/}
                        <h2>{author.first_name} {author.last_name}</h2>
                        {author.email}
                        <hr/>
                        <br/>
                    </div>
                ))}


            </div>

        );
    }
}

export default MemberList;