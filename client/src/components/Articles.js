import React, { Component } from "react";
import axios from "axios";
import Link from "react-router-dom/es/Link";
import  "../images/anti-slavery_mural.png"
import styled from 'styled-components';


const Border = styled.div`
    background: #97A11F;
    text-align: center;
    height: 150px;
    display: block;
`
const Header1 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 36px;
    color: #FFFFFF;
    padding-top: 4%;
`
const Subheader = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
    color: #FFFEF9;
`
const Articlecontainer = styled.div`
    margin: 0 3% 2% 3%;
    border-radius: 0;
    padding: 2% 1%;
    background: rgba(10, 35, 66, 0.2);
    max-height: 20vh;
`
const Headerbutton = styled.div`
    background: rgba(10, 35, 66, 0.2);
    border-radius: 5px 5px 0 0;
    margin: 2% 81% 0 3%;
    padding: 0 1%;
`

const Manuscriptbutton = styled.a`
    background: rgba(10, 35, 66, 0.2);
    border-radius: 5px 5px 0 0;
    margin: 2% 1% 0 0;
    padding: 1% 1%;
    font-family: Roboto;
    font-size: 24px;
    text-decoration: none;
`

const Author = styled.div`
    color: black;
    text-transform: capitalize;
    margin: 10px 0;
    border-radius: inherit;
    font-family: Open Sans;
    font-weight: 300;
    font-style: normal;
    font-size: 16px;
    line-height: normal;
`
const Issuedate= styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 20px;
    border-radius: inherit;
`
const Abstract = styled.div`
    color: black;
    text-transform: capitalize;
    margin: 10px 0;
    border-radius: inherit;
    font-family: Open Sans;
    font-weight: 300;
    font-style: normal;
    font-size: 18px;
    line-height: normal;
    max-height: 20vh;
`
const Titlelink = styled.div`
    text-transform: capitalize;
    text-decoration: none;
    color: black;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 20px;
    border-radius: inherit;
`
const Bottomlink = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 70% 0 0;
`
const Blink = styled.div`
    display: flex;
    padding: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;
`


class Articles extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    axios.get("/api/articles").then(res => {
      this.setState({ articles: res.data });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
          <Border>
            <Header1>JOURNAL OF MODERN SLAVERY</Header1>
            <Subheader>A Multidisciplinary Exploration of Human Trafficking Solutions</Subheader>
          </Border>
          <div>
              <img src="#" alt="Anti Slavery Mural"/>
          </div>
          <Headerbutton>
              Latest Online
          </Headerbutton>
        <div>
          {this.state.articles.map((article) => (

            <Articlecontainer><Link  to={`/articles/${article.id}`}>
            <Titlelink>{article.title}</Titlelink>
            </Link>
            
            <Author>
                {article.author}
            </Author>
            <Issuedate>
                {article.issuedate}
            </Issuedate>
            <Abstract>
                {article.abstract}
            </Abstract>
            <Bottomlink>
                <Blink>
                    Abstract
                </Blink>
                <Blink>
                    WEB
                </Blink>
                <Blink>
                    PDF
                </Blink>
            </Bottomlink>
            </Articlecontainer>
          ))}
        </div>
      </div>
    );
  }
}

export default Articles;
