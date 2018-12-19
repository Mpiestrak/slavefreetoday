import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import ArticleInfo from "./components/ArticleInfo";
import Articles from "./components/Articles";
import CreateAccount from "./components/CreateAccount";
import DonateOnline from "./components/DonateOnline";
import Donations from "./components/Donations";
import FilterModal from "./components/FilterModal";
import Footer from "./components/Footer";
import ManuscriptInfo from "./components/ManuscriptInfo";
import MemberList from "./components/MemberList";
import AuthorAccount from "./components/AuthorAccount";
import SearchResults from "./components/SearchResults";
import Tier2 from "./components/Tier2";
import Navbar from "./components/Navbar";
import SingleArticle from "./components/SingleArticle";
import UpdateArticle from "./components/UpdateArticle";
import ViewAccount from "./components/ViewAccount"

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path="/articles" component={Articles}/>
                        <Route exact path="/updatearticle/:id" component={UpdateArticle}/>
                        <Route exact path="/updatearticle/" component={UpdateArticle}/>
                        <Route exact path="/articles/:id" component={SingleArticle}/>
                        <Route exact path="/articleinfo" component={ArticleInfo}/>
                        <Route exact path="/createaccount" component={CreateAccount}/>
                        <Route exact path="/donateonline" component={DonateOnline}/>
                        <Route exact path="/donations" component={Donations}/>
                        <Route exact path="/filtermodal" component={FilterModal}/>
                        <Route exact path="/manuscriptinfo" component={ManuscriptInfo}/>
                        <Route exact path="/memberlist" component={MemberList}/>
                        <Route exact path="/authoraccount/:authorId" component={AuthorAccount}/>
                        <Route exact path="/viewaccount/:userId" component={ViewAccount}/>
                        <Route exact path="/searchresults" component={SearchResults}/>
                        <Route exact path="/tier2" component={Tier2}/>
                        <Route path="/" component={Homepage}/>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}


export default App