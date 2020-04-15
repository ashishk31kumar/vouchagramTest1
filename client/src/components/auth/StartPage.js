import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Validate } from "../common/Validation";

import {
  userDetail
} from "../../actions/authActions";

class StartPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      website:"",
      subject:"",
      message:"",
      file:[],
      isformSubmited:false,
      isFileUploaded : false,
      errors:{},
      displayButton:false
    };
    this.showDetail = this.showDetail.bind(this)
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onChangeFile = e => {
    this.setState({
      file: e.target.files ,
        isformSubmited: true,
        isFileUploaded : true
    });
};
onSubmit = e =>{
  e.preventDefault();
  Validate(this.state)
      .then(res => {
        if (res == true) {
          this.setState({ errors: "" });

  let user= this.state
    this.props.userDetail(user)
    .then(err=>{
      this.setState({displayButton:true,name:"",website:"",email:"",subject:"",message:"",file:""})
    })
    .catch(err=>{

    })
    
  }
})
.catch(err => {
  this.setState({ errors: err });
});


}
showDetail = () => {
  this.props.history.push({
      pathname: "/details",
      data:this.props.userList
  });
}


  render() {
   const errors= this.state.errors
    return (
      <div>
        <div className="App">
         
          <div className="row">
            <div className="col-sm-10">
              
            <div className="logn-form col s12 m12">
                    <form
                      noValidate
                      onSubmit={this.onSubmit}
                      className="sign-up-form"
                    >
                  <h5>Please Note</h5>
                      <div className="s12 font-s m-b-sm">Please don't contact us for theme releted as they will be ignored.Use our Support Forum</div>

                      <div className=" row">
                        <div className="input-field col s12 m6 m-t-n">
                          <input
                            onChange={this.onChange}
                            value={this.state.name}
                            error={errors.name}
                            id="name"
                            type="text"
                            maxLength="45"
                            className={classnames("", {
                              invalid: errors.name
                            })}
                          />
                          <label htmlFor="name">Your Name (required) </label>
                        
                          <span className="red-text" value={errors.name}>{errors.name}</span>
                        </div>

                        <div className="clearfix" />
                        <div className="input-field col s12 m6 m-t-n">
                          <input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="text"
                            maxLength="45"
                            className={classnames("", {
                              invalid: errors.email
                            })}
                          />
                          <label htmlFor="email">Your Email (required) </label>
                        
                          <span className="red-text">{errors.email}</span>
                        </div>

                        <div className="clearfix" />
                        <div className="input-field col s12 m6 m-t-n">
                          <input
                            onChange={this.onChange}
                            value={this.state.website}
                            error={errors.website}
                            id="website"
                            type="text"
                            maxLength="45"
                            className={classnames("", {
                              invalid: errors.website
                            })}
                          />
                          <label htmlFor="message">Your Website (optional)</label>
                        
                          <span className="red-text">{errors.website}</span>
                        </div>

                        <div className="clearfix" />
                        <div className="input-field col s12 m6 m-t-n">
                          <input
                            onChange={this.onChange}
                            value={this.state.subject}
                            error={errors.subject}
                            id="subject"
                            type="text"
                            maxLength="45"
                            className={classnames("", {
                              invalid: errors.subject
                            })}
                          />
                          <label htmlFor="subject">Subject </label>
                        
                          <span className="red-text">{errors.subject}</span>
                        </div>

                        <div className="clearfix" />
                        <div className="input-field col s12 m12 m-t-n">
                          <input
                            onChange={this.onChange}
                            value={this.state.message}
                            error={errors.message}
                            id="message"
                            type="text"
                            maxLength="45"
                            className={classnames("", {
                              invalid: errors.message
                            })}
                          />
                          <label htmlFor="message">Your Message (Support requests won't be answered. For that use our support form.) </label>
                        
                          <span className="red-text">{errors.message}</span>
                        </div>

                        <div className="clearfix" />

                        <div className="input-field col s12 m10 m-t-n">
                          <span>Attach file (translation files,screenshot etc)</span> <br/>
                          <input type="file" ref="file" name="user[file]"  multiple="true" onClick={this.onChangeFile}/>
                          
                      </div>
                        <div className="clearfix" />
                        {this.state.displayButton== false?(
                        <div className="input-field col s12">
                          <button type="submit" className="btn red">
                            Send
                          </button>
                          </div>
                        ):(
                          <span>
                          <div>
          <button type="submit" className="btn red" onClick={this.showDetail}>view
                            
                          </button>
          </div>
                          </span>
                        )}
</div>
                     
                    </form>

 

            
            </div>
</div>
          </div>
        </div>
      </div>


    );
  }
}

StartPage.propTypes = {};

const mapStateToProps = state => ({

  userList: state.userList.userList
});
const mapDispatchToProps = dispatch => ({
  userDetail: (user) => dispatch(userDetail(user)),

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StartPage));