import React, { Component } from 'react';
import { connect } from 'react-redux';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      emailid: '',
      contactno: ''
    }
  }
  handleName(e) {
    this.setState({ name: e.target.value })

  }
  handleEmailid(e) {
    this.setState({ emailid: e.target.value })
  }
  handleContactno(e) {
    this.setState({ contactno: e.target.value })
  }


  onSubmit() {
    
      this.props.sendUpdated(this.state)
    

  }
  render() {
    return (
      <div className="form-group col-lg-3">

        <label>Name</label>
        <input type="name" className="form-control"
          value={this.state.name}
          onChange={this.handleName.bind(this)} /> <br />

        <label>Emailid</label>
        <input type="emailid" className="form-control"
          value={this.state.emailid}
          onChange={this.handleEmailid.bind(this)} /><br />


        <label>Contactno</label>
        <input type="contactno" className="form-control"
          value={this.state.contactno}
          onChange={this.handleContactno.bind(this)} /><br />

        <button type="button" className="btn btn-primary"
          onClick={this.onSubmit.bind(this)}>Submit</button>


      </div>
    )
  }

}
const mapDispatchToProps = dispatch => {
  return {
    sendUpdated: (contactdetails) => dispatch({ type: "CONTACTDETAILS", contactdetails })
  }
}
const mapStateToProps = state => {
  return state;

}
export default connect(mapStateToProps, mapDispatchToProps)(Contact);