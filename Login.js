import React, { Component } from 'react';
import { connect } from 'react-redux';
import Books from './Books';
import { Link } from 'react-router-dom';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''

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
      alert("submitted sucessfully")
      this.props.searchUpdated(this.state)
    }

    else
      alert("failed")

  }

  render() {
    return (
      <div className="form-group col-lg-3">

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

        <Link to="/Books"> <button type="button" className="btn btn-primary"
          onClick={this.onSubmit.bind(this)}>
          Submit
        </button>
        </Link>
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