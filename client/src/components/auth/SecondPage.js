import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
     data: this.props.location.data ?this.props.location.data:""
    };
    this.callBackHandler = this.callBackHandler.bind(this)
  }
  callBackHandler = () => {
    this.props.history.push({
      pathname: "/",
    });
  }
  render() {
    return (
      <div className="App1">
        <div className="margin">
          <div className="row">
            <div className="col-sm-10">
              <h6>User Detail</h6>
            </div>
            <div className="col-sm-2">
              <button className="float-right" onClick={() => this.callBackHandler()}><i className='glyphicon glyphicon-arrow-left'></i></button>
            </div>

          </div>
          <hr />
         <p>Name : <span>{this.state.data.name}</span></p> <br/>
         <p>Email : <span>{this.state.data.email}</span></p> <br/>
         <p>Subject: <span>{this.state.data.subject}</span></p> <br/>
         <p>Website : <span>{this.state.data.website}</span></p> <br/>
         <p>Messsage : <span>{this.state.data.message}</span></p> <br/>
         <p>File : <span>{this.state.data.file}</span></p>
         
        </div>
      </div>
    );
  }
}
SecondPage.propTypes = {};
export default connect(
)(withRouter(SecondPage));