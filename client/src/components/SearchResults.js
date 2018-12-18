import React, {Component} from 'react';
import "../css/SearchResults.css"
import axios from "axios";
import {Form, Input, Button} from 'reactstrap'

class SearchResults extends Component {
    state = {
        articles: [],
        searchArticle: "",
       
    }

    componentDidMount() {
        axios.get("/api/articles").then(res => {
          this.setState({ articles: res.data });
        //   console.log(res.data);
       
        });
      }
      
      handleInputChange = (e) => {
          const searchWord = {...this.searchArticle}
          searchWord[e.target.name] = e.target.value
        this.setState({
          searchArticle: searchWord
        // }, () => {
        //   if (this.state.searchArticle && this.state.searchArticle.length > 1) {
        //     if (this.state.searchArticle.length % 2 === 0) {
        //       this.getArticle()
        //     }
        //   }
        })
        console.log("search", this.state.searchArticle)
      }

      
      handleSubmit=()=> {
          
          console.log("articles", this.state.searchArticle)
this.state.articles.map((article, i) => {
    const has = article.abstract.search(this.state.searchArticle)
    if(has>0){
        console.log(article)
    }else{
        console.log("noooo")
    }
})


        
      }
    render() {
        return (
            <div>

            { this.state.articles.map((article) => (
                
              <div key={article._id}>
               <h1>{article.abstract}</h1> {article.content}
                
                
              </div>
            )) }
 
        <Form>
        <Input
        name="searchArticle"
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.searchName}</p>
        <Button onClick={this.handleSubmit}>Get Article</Button>
      </Form>
            </div>
        );
    }
}

export default SearchResults;

{/* <div>
<div className="resultsS">SEARCH RESULTS</div>
<input className='inputS' type="text"/>

</div> */}