import React, {Component} from "react";
import axios from "axios";
import styled from 'styled-components';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';


const Body = styled.body`
padding: 50px;
`
const Header = styled.h1`
    color: #0A2342;
`


class UpdateArticle extends Component {
    state = {
        article: {
            title: "",
            categories: "",
            tags: "",
            issuedate: "",
            groups: "",
            hits: "",
            abstract: "",
            content: "",
            author: ""
        }
    };

    handleChange = event => {
        console.log(event.target.name)
        console.log(event.target.value)
        const updatedArticle = {...this.state.article};
        updatedArticle[event.target.name] = event.target.value;
        this.setState({article: updatedArticle});
    };

    update = (e) => {
        // e.preventDefault()
        const articleId = this.props.match.params.id;
        const updatedArticle = this.state.article
        axios.patch(`/api/articles/${articleId}/`, updatedArticle).then(res => {
            this.props.history.push(`/articles/${res.data.id}/`);
            console.log(res.data)
        });
    };

    getArticle = () => {
        const {id} = this.props.match.params;
        axios.get(`/api/articles/${id}`).then(res => {
            this.setState({article: res.data});
            console.log(res.data);
        });
    };

    componentDidMount() {
        this.getArticle();
    }

    render() {
        return (
            <Body>

                <Header>Update an Article</Header>
                <div>
                    <form onSubmit={this.update}>
                        <div>
                            <div>
                                <label htmlFor="title">Title: </label>
                            </div>
                            <input
                                onChange={this.handleChange}
                                value={this.state.article.title}
                                type="text"
                                name="title"
                                placeholder={this.state.article.title}
                            />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="categories">Categories: </label>
                            </div>
                            <input
                                onChange={this.handleChange}
                                value={this.state.article.categories}
                                type="text"
                                name="categories"
                                placeholder="Categories"
                            />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="tags">Tags: </label>
                            </div>
                            <input
                                onChange={this.handleChange}
                                value={this.state.article.tags}
                                type="text"
                                name="tags"
                                placeholder="Tags"
                            />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="issuedate">Issue Date: </label>
                            </div>
                            <input
                                onChange={this.handleChange}
                                value={this.state.article.issuedate}
                                type="text"
                                name="issuedate"
                                placeholder="Date of issue"
                            />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="groups">Groups: </label>
                            </div>
                            <input
                                onChange={this.handleChange}
                                value={this.state.article.groups}
                                type="text"
                                name="groups"
                                placeholder="Groups"
                            />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="hits">Number of Hits: </label>
                            </div>
                            <input
                                onChange={this.handleChange}
                                value={this.state.article.hits}
                                type="integer"
                                name="hits"
                                placeholder="Number of hits"
                            />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="abstract">Abstract: </label>
                            </div>
                            <input
                                onChange={this.handleChange}
                                value={this.state.article.abstract}
                                type="text"
                                name="abstract"
                                placeholder="Abstract"
                            />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="content">Content: </label>
                            </div>
                            <input
                                onChange={this.handleChange}
                                value={this.state.article.content}
                                type="text"
                                name="content"
                                placeholder="Content"
                            />
                        </div>
                        <button type="submit" className="buttPC">Submit</button>
                    </form>
                </div>
            </Body>
        );
    }
}

export default UpdateArticle;