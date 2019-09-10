import React, { Component } from 'react';

export default class Blog extends Component {
  constructor(props) {
    super(props);
this.state={
  name:'',
  emailid:'',
  contactno:''
}
  }
  render(){
  return(
 <div className="form-group col-lg-3">

    <label>Name</label>
    <input type="name" className="form-control" value={this.state.name} /> <br/>
     <label>Emailid</label>
    <input type="emailid" className="form-control" value={this.state.emailid} /><br/>
    <label>Contactno</label>
    <input type="contactno" className="form-control" value={this.state.contactno} /><br/>
    <button type="button" className="btn btn-primary">Submit</button>
    

    </div>
  )
}

}