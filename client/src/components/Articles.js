import React, { Component } from "react";
import axios from "axios";
import Link from "react-router-dom/es/Link";
import styled from "styled-components";

const Li = styled.li`
  text-decoration: none;
  color: black;
  text-transform: capitalize;
`;

class Articles extends Component {
  state = {
    articles: [],
    authors: []
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
          <div className='border'>
            <p className='header'>JOURNAL OF MODERN SLAVERY</p>
            <p>A Multidisciplinary Exploration of Human Trafficking Solutions</p>
          </div>
        <div>
          {this.state.articles.map(article => (
            <div><Link to={`/article/${article.id}`}>
            <Li>{article.title}</Li>
            </Link>
            {article.author}
            {article.issuedate}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Articles;
