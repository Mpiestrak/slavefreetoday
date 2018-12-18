import React, {Component} from 'react';
import axios from "axios";


class DeleteAuthor extends Component {
    //On click, delete the user and redirect

handleClick() {
    let authorId = this.props.match.params.authorId;
    axios.delete(`/api/authors/${authorId}`)
      .then(response => {
        this.props.history.push("/user");
      })
      .catch(err => console.log(err));
  }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    DELETE THIS USER
                </button>
            </div>
        );
    }
}
export default DeleteAuthor;