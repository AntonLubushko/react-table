import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions";
import MaterialTable from "material-table";
import moment from "moment";

export class Post extends Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <MaterialTable
        columns={[
          { title: 'Title', field: 'title', sorting:false },
          { 
            title: 'Text', 
            field: 'body', 
            sorting:false,
            render: rowData => rowData.body.slice(0,30) + "..."
          },
          { title: 'Views', field: 'views', type: 'numeric', searchable:false },
          { 
            title: 'CreatedAt', 
            field: 'createdAt', 
            type:'date',
            searchable:false,
            render: rowData =>  moment(rowData.createdAt).format("DD MMM YYYY HH:mm")
          }
        ]}
       
        actions={[
          {
            icon: 'info',
            tooltip: 'Show Post',
            onClick: (event, rowData) => {
              this.props.history.push(`/posts/${rowData.id}`);
            },
          },
      
        ]}
          
        data={this.props.posts}
        title="Posts"
        localization={{
          header: {
            actions: 'Details'
          },
        }}
        
        options={{
          actionsColumnIndex: -1,
          columnsButton: false,
          exportButton: false,
          pageSize:10
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.remotePosts
  };
}

export default connect(
  mapStateToProps, { getPosts }
)(Post);