import React, {Component} from 'react';
import axios from "axios";


class DeleteAuthor extends Component {


handleClick() {
     const author = this.props.match.params.authorId

        axios.delete(`/api/authors/${author}`).then(res => {
            console.log(res)
            this.props.history.push("/")
        prompt("Account Succesfully Deleted")
        })
    }

      .catch(err => console.log(err));
  }

    render(){
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