import React, { Component } from "react";
import ArticleSidebar from "./ArticleSidebar";
import '../css/SingleArticle.css'
import axios from "axios";
import Link from "react-router-dom/es/Link";

class SingleArticle extends Component {
    state = {
        article: {}
    }

    componentDidMount() {
        const {id} = this.props.match.params
        axios.get(`/api/articles/${id}`).then(res => {
          this.setState({ article: res.data });
          console.log(res.data);
        });
      }

  render() {
    return (
      <div>
        <div className='allcontainer'>
          <div className='content'>
            <div className="headers">
              {this.state.article.title}
            </div>
            <div className='subheader'>
            {this.state.article.author}
            </div>
            <div className='linkcontainer'>
                <a className='activelink' href="#">HTML</a>
                <a className='inactivelink' href="#">PDF</a>
                <a className='inactivelink' href="#">INFO & METRICS</a>
            </div>
            <div className='abstract'>
                <div className='textheader'>Abstract</div>
                <div className='textcontent'>{this.state.article.abstract}</div>
            </div>
            <div className='textcontent'>{this.state.article.content}</div>
          </div>
        </div>
        {/* <div className='sidebar'>
              <ArticleSidebar />
          </div> */}
      </div>
    );
  }
}

export default SingleArticle;
