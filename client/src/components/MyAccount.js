import React, {Component} from 'react';
import axios from "axios";

class MyAccount extends Component {

 state = {
    users: [],
    authors: []
  };

  getAUser() {
    axios.get("/api/viewuser").then(res => {
      this.setState({ users: res.data });
      console.log(res.data);
    });
  }

  getAnAuthor() {
    axios.get("/api/authors").then(res => {
      this.setState({ authors: res.data });
      console.log(res.data);
    });
  }

    componentDidMount() {
        this.getAUser()
        this.getAnAuthor()
    }

    render() {
        return (
            <div>
                <div>
                    <h1>My Account</h1>
                    <img src={"Profile pic here"}/>
                </div>

                {/*<div>*/}
                    {/*<h2>Settings</h2>*/}
                    {/*<img src={"Settings/Cogwheel Icon here"}/>*/}
                {/*</div>*/}

                {/*<div>*/}
                    {/*<h2>View Profile</h2>*/}
                    {/*<img src={"Eye/ Profile Icon here"}/>*/}
                {/*</div>*/}

                <div>
                    <h2>Member Directory</h2>
                    <img src={"Person/Directory Icon here"}/>
                </div>

                {/*<div>*/}
                    {/*<h2>Saved Resources</h2>*/}
                    {/*<img src={"Bookmark Icon here"}/>*/}
                {/*</div>*/}
                
                {/*<div>*/}
                    {/*<h2>Donation History</h2>*/}
                    {/*<img src={"Dollar Icon here"}/>*/}
                {/*</div>*/}

                {/*<div>*/}
                    {/*<h2>Submit A Manuscript</h2>*/}
                    {/*<img src={"Scroll or sumn Icon here"}/>*/}
                {/*</div>*/}

                {/*<div>*/}
                    {/*<h2>Become A Reviewer</h2>*/}
                    {/*<img src={"Pencil and Paper Icon here"}/>*/}
                {/*</div>*/}





            </div>
        );
    }
}

export default MyAccount;