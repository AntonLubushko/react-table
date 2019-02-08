import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions";
import { changeDirection } from "../actions";
import MaterialTable from "material-table";
import moment from "moment";

const SYMBOLS_TEXT = 30;

export class Post extends Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <MaterialTable
        columns={[
          { title: 'Title', field: 'title', sorting: false },
          { 
            title: 'Text', 
            field: 'body', 
            sorting: false,
            render: rowData => rowData.body.slice(0, SYMBOLS_TEXT) + "..."
          },
          { 
            title: 'Views', 
            field: 'views', 
            type: 'numeric', 
            searchable: false,
            defaultSort: this.props.viewsDirection
          },
          {
            title: 'CreatedAt',
            field: 'createdAt',
            type: 'date',
            defaultSort: this.props.dateDirection,
            searchable: false,
            render: rowData => moment(rowData.createdAt).format("DD MMM YYYY HH:mm")
          }
        ]}
       
        actions={[
          {
            icon: 'info',
            tooltip: 'details',
            onClick: (event, rowData) => {
              this.props.history.push(`/posts/${rowData.id}`);
            },
          }
        ]}
          
        onOrderChange={(orderedColumnId, orderDirection)=>{
            this.props.changeDirection(orderedColumnId, orderDirection);
        }}

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
    posts: state.remotePosts,
    dateDirection: state.dateDirection,
    viewsDirection: state.viewsDirection
  };
}

export default connect(
  mapStateToProps, { getPosts, changeDirection }
)(Post);