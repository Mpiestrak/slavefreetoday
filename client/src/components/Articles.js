import React, { Component } from "react";
import axios from "axios";
import Link from "react-router-dom/es/Link";
import "../css/Articles.css"

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
          <div className='borderA'>
            <div className='header1A'>JOURNAL OF MODERN SLAVERY</div>
            <div className='subheaderA'>A Multidisciplinary Exploration of Human Trafficking Solutions</div>
          </div>
          <div className="pic1A">
              
          </div>

          <div className='headerbuttonA'>
              Latest Online
          </div>
        <div>
          {this.state.articles.map(article => (
            <div className='articlecontainer'><Link  to={`/articles/${article.id}`}>
            <div className='titlelink'>{article.title}</div>
            </Link>
            
            <div className='authorA'>
                {article.author}
            </div>
            <div className='issuedate'>
                {article.issuedate}
            </div>
            <div className='abstract'>
                {article.abstract}
            </div>
            <div className='bottomlink'>
                <a className='blink'>
                    Abstract
                </a>
                <a className='blink'>
                    Web
                </a>
                <a className='blink'>
                    PDF
                </a>
            </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Articles;
