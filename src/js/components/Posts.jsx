import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions";
import { changeViewsDirection, changeDateDirection } from "../actions";
import MaterialTable from "material-table";
import moment from "moment";

const SYMBOLS_TEXT = 30;
const VIEWS_COLUMN = 2;
const DATE_COLUMN = 3;

export class Post extends Component {

  componentDidMount() {
    this.props.getPosts();
    console.log("date dir", this.props.dateDirection)
    console.log("views dir", this.props.viewsDirection)
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
            type:'date',
            defaultSort: this.props.dateDirection,
            searchable: false,
            render: rowData =>  moment(rowData.createdAt).format("DD MMM YYYY HH:mm")
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
          if (orderedColumnId === VIEWS_COLUMN){
            this.props.changeViewsDirection(orderDirection);
          }else{
            this.props.changeDateDirection(orderDirection);
          }
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
  mapStateToProps, { changeDateDirection, getPosts, changeViewsDirection }
)(Post);