import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
this.state={
  name:'',
  password:''
 
}
  }
  render(){
  return(
 <div className="form-group col-lg-3">

    <label>Name</label>
    <input type="name" className="form-control" value={this.state.name} /> <br/>
     <label>password</label>
    <input type="password" className="form-control" value={this.state.password} /> <br/>
  
    <button type="button" className="btn btn-primary">Submit</button>
    

    </div>
  )
}

}