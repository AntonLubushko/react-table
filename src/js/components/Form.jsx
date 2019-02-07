import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ConnectedForm extends Component {

  render() {
    return (
      <div>  
        <h2>Hello, how are you?</h2>
        <Link to={"/posts"}>{"To posts table"}</Link>
    </div>
    );
  }
}

const Form = connect(null, null)(ConnectedForm);

export default Form;