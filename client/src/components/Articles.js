import React, { Component } from "react";
import axios from "axios";
import Link from "react-router-dom/es/Link";
import  "../images/anti-slavery_mural.png"

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
          <div className='border'>
            <div className='header1'>JOURNAL OF MODERN SLAVERY</div>
            <div className='subheader'>A Multidisciplinary Exploration of Human Trafficking Solutions</div>
          </div>
          <div className='carousel'>
              <img src="#" alt="Anti Slavery Mural"/>
          </div>
          <div className='headerbutton'>
              Latest Online
          </div>
        <div>
          {this.state.articles.map(article => (
            <div className='articlecontainer'><Link  to={`/articles/${article.id}`}>
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
            <div className='bottomlink'>
                <div className='blink'>
                    Abstract
                </div>
                <div className='blink'>
                    WEB
                </div>
                <div className='blink'>
                    PDF
                </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Articles;
