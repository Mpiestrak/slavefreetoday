import React, {Component} from 'react';
import {AxiosInstance as axios} from "axios";
import {Link} from "react-router-dom";




class MemberList extends Component {


    state = {
        authors: []
    }


         //Call the user and set the state to the data recieved in response
    getAllAuthors() {
        axios.get("/api/authors").then((res) => {
            console.log(res)
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
                {/*{this.state.authors.map((author)=> (*/}
                    {/*<div key={author.id}/>)*/}
                {/*)}*/}
            </div>

        );
    }
}

export default MemberList;