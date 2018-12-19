import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'

import "../css/MemberList.css";


const Author = styled.div`
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
            this.setState({authors: res.data})
        })
    }

    componentDidMount() {
        this.getAllAuthors()
    }

    render() {
        return (
            <div className='allML'>
                <div className="headerML">MEMBER DIRECTORY</div>
                {this.state.authors.map((author) => (
                    <div className="mainContainML" key={author.id}>

                        <Link to={`/authoraccount/${author.id}`}>
                            <img src={author.img} alt="" className="profilepicML"/>
                        </Link>
                        <div className="infoboxML">
                            <Link to={`/authoraccount/${author.id}`}>
                                <h2 className='nameML'>{author.first_name} {author.last_name}</h2>
                            </Link>
                            <div className="iconflexML">
                                <a href='mailto:{author.email}'>
                                    <div className="mailML"></div>
                                </a>
                                <a href='https://www.linkedin.com/in/{author.first_name}{author.last_name}/{'>
                                    <div className="linkedML"></div>
                                </a>

                            </div>

                            <h4>{author.organization}</h4>

                            <p className="paraML">{author.description}</p>

                        </div>


                    </div>
                ))}
            </div>

        );
    }
}

export default MemberList;