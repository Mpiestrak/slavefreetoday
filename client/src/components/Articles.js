import React, { Component } from "react";
import axios from "axios";
import Link from "react-router-dom/es/Link";
import "../css/Articles.css";

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
          <div className='headerbutton'>
              Latest Online
          </div>
        <div>
          {this.state.articles.map(article => (
            <div className='articlecontainer'><Link to={`/article/${article.id}`}>
            <div className='titlelink'>{article.title}</div>
            </Link>
            <div className='author'>
                {article.author}
            </div>
            <div className='issuedate'>
                {article.issuedate}
            </div>
            <div className='abstract'>
                {article.abstract}
            </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Articles;
