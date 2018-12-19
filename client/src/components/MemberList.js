import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'

import "../css/MemberList.css";


const Author = styled.div `
text-align: left;
`




class MemberList extends Component {


    state = {
        authors: []
    };



    //Call the user and set the state to the data received in response
    getAllAuthors() {
        axios.get(`/api/authors`).then(res => {
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
                <div className="headerML">MEMBER DIRECTORY</div>
                {this.state.authors.map((author) => (
                <div className="mainContainML" key={author.id}>
                    {author.first_name}
                <img src={author.img} alt="" className="profilepicML" />
                <div className="infoboxML"></div>
                
                
                
                
                </div>
                 ))}
            </div>

        );
    }
}

export default MemberList;