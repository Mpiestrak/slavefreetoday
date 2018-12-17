import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import NavBar from "./Navbar";


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
                        <img src={"Profile pic here"}/>
                        <h2>{author.first_name} {author.last_name}</h2>
                        <h2>{author.organization}</h2>
                        <h3>{author.email}</h3>
                        <img src={"Email icon here"}/>
                        <img src={"LinkedIn icon here"}/>
                        {/*We need to download these images*/}
                        <hr/>
                        <br/>
                    </div>
                ))}



            </div>

        );
    }
}

export default MemberList;