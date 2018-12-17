import React, { Component } from "react";

import axios from "axios";
import Link from "react-router-dom/es/Link";
import styled from 'styled-components';

class SingleArticle extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/articles/${id}`).then(res => {
      this.setState({ article: res.data });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
          <div className='border'>
            <div className='header1'>JOURNAL OF MODERN SLAVERY</div>
            <div className='subheader1'>A Multidisciplinary Exploration of Human Trafficking Solutions</div>
          </div>
        <div className="allcontainer">
          <div className="leftcolumn">
            <div>Share</div>
            <div>Twitter</div>
            <div>FB</div>
          </div>
          <div className="content">
            <div className="headers">{this.state.article.title}</div>
            <div className="subheader">{this.state.article.author}</div>
            <div className="linkcontainer">
              <a className="activelink" href="#">
                HTML
              </a>
              <a className="inactivelink" href="#">
                PDF
              </a>
              <a className="inactivelink" href="#">
                INFO & METRICS
              </a>
            </div>
            <div className="abstract">
              <div className="textheader">Abstract</div>
              <div className="textcontent">{this.state.article.abstract}</div>
            </div>
            <div className="textcontent">{this.state.article.content}</div>
          </div>
          {/* <div className='sidebar'>
              <ArticleSidebar />
          </div> */}
        </div>
      </div>
    );
  }
}

export default SingleArticle;
