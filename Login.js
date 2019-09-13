import React, { Component } from 'react';
import { connect } from 'react-redux';
import Books from './Books';
import { Link } from 'react-router-dom';
import Home from './Home';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      errorMsg: false

    }
  }
  handleName(e) {
    this.setState({ name: e.target.value })

  }
  handlePassword(e) {
    this.setState({ password: e.target.value })

  }
  onSubmit() {
    
     if (this.state.name == "test" && this.state.password == "test") {
      this.setState({ errorMsg: false })
        this.props.history.push('/Home')
    }
    else {
      this.setState({ errorMsg: true })
    }
      this.props.searchUpdated(this.state)
    
  } 
   

  render() {
    return (
      <div className="form-group col-lg-3">
          {
          this.state.errorMsg &&
          <div className="alert alert-danger">
            <strong>ERROR!</strong> Invalid Username or Password.
        </div>
        }
        <label>Name</label>
        <input type="name"
          className="form-control"
          value={this.state.name}
          onChange={this.handleName.bind(this)} /> <br />

        <label>password</label>
        <input type="password"
          className="form-control"
          value={this.state.password}
          onChange={this.handlePassword.bind(this)} /> <br />

       <button type="button" className="btn btn-primary"
          onClick={this.onSubmit.bind(this)}>
          Submit
        </button>
        
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    searchUpdated: (details) => dispatch({ type: 'LOGINDETAILS', details }),
  }

}
function mapStateToProps(state) {
  return { state };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);