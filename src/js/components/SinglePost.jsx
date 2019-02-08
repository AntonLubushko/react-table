import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost } from "../actions";
import Button from '@material-ui/core/Button';
import "./post.css";

class SinglePost extends Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    if (isNaN(id)) {
      this.props.history.push('/posts');
    }
    this.props.getPost(id);
  }

  render() {
    return (
      <div>
        {this.props.post.body? 
          <div>
            <table className="tbl">
              <tbody>
                <tr>
                  <th className="w80">id</th>
                  <th className="w80">User id</th>
                  <th className="w200">Title</th>
                  <th>Text</th>
                </tr>
                <tr>
                  <td>{this.props.post.id}</td>
                  <td>{this.props.post.userId}</td>
                  <td>{this.props.post.title}</td>
                  <td>{this.props.post.body}</td>
                </tr>
              </tbody>
            </table>
          </div>
          :
          <div></div>
        }
        <Button 
          variant="contained" 
          className="btn"
          onClick={this.backToPosts}>
  
          BACK
        </Button>
      </div>
    );
  }

  backToPosts = () => {
    this.props.history.push('/posts');
  }
}

function mapStateToProps(state) {
  return {
    post: state.currentPost
  };
}

export default connect(
  mapStateToProps, { getPost }
)(SinglePost);