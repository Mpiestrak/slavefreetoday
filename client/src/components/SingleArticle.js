
import React, {Component} from "react";
import "../css/SingleArticle.css";
import axios from "axios";
import Link from "react-router-dom";
import styled from 'styled-components';
import UpdateArticle from "./UpdateArticle";


const Allcontainer = styled.div`
margin: 0 5% 0 10%;
`

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
const Activelink = styled.a`
    font-family: Roboto;
    font-size: 14px;
    text-decoration: none;
    color: black;
    display: flex;
    padding: 5px;
`
const Inactivelink = styled.a`
    font-family: Roboto;
    font-size: 14px;
    text-decoration: none;
    color: #898181;
    display: flex;
    padding: 5px;
`
const Subheader1 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
    color: #FFFEF9;
`
const Abstract = styled.div`
    background: #CED3D9;
    margin-bottom: 5%;
    height: 425px;
`
const Textheader = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
    padding-top: 2%;
`
const Textcontent = styled.div`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;
    list-style: none;
`
const Linkcontainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 66% 0 0;
`
const Headers = styled.div`
    margin-top: 5%;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
`
const Subheader = styled.div`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    font-size: 16px;
    color: black;
    padding: 1% 0 2% 0;
    border-bottom: 1px black solid;
`

class SingleArticle extends Component {
    state = {
        article: {}
    };


    componentDidMount() {
        const {id} = this.props.match.params;
        axios.get(`/api/articles/${id}`).then(res => {
            this.setState({article: res.data});
            console.log(res.data);
        });
    }

    deleteArticle = () => {
        const id = this.props.match.params.id
        console.log(id)
        axios.delete(`/api/articles/${id}`).then(res => {
            console.log(res)
            this.props.history.push("/")
            alert("Article Successfully Deleted")
        })
    }

    render() {
        return (
            <div>
                <Border>
                    <Header1>JOURNAL OF MODERN SLAVERY</Header1>
                    <Subheader1>A Multidisciplinary Exploration of Human Trafficking Solutions</Subheader1>
                </Border>
                <Allcontainer>
                    <div>
                        <div>Share</div>
                        <div>Twitter</div>
                        <div>FB</div>
                    </div>
                    <div>
                        <Headers>{this.state.article.title}</Headers>
                        <Subheader>{this.state.article.author}</Subheader>
                        {/*<Subheader>*/}
                        {/*<Link to={`/updatearticle/${id}/`}>Article id: {this.state.article.id}</Link>*/}
                        {/*</Subheader>*/}
                        <Linkcontainer>
                            <Activelink href="#">
                                HTML
                            </Activelink>
                            <Inactivelink href="#">
                                PDF
                            </Inactivelink>
                            <Inactivelink href="#">
                                INFO & METRICS
                            </Inactivelink>
                        </Linkcontainer>
                        <Abstract>
                            <Textheader>Abstract</Textheader>
                            <Textcontent>{this.state.article.abstract}</Textcontent>
                        </Abstract>
                        <Textcontent>{this.state.article.content}</Textcontent>
                    </div>
                    {/* <div className='sidebar'>
              <ArticleSidebar />
          </div> */}
                    <button onClick={this.deleteArticle}>
                        DELETE THIS ARTICLE
                    </button>
                    <UpdateArticle {...this.props} />
                </Allcontainer>
            </div>
        );
    }
}

export default SingleArticle;
