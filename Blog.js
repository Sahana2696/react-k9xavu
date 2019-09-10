import React, { Component } from 'react';

export default class Blog extends Component {
  constructor(props) {
    super(props);

  }
  componentWillMount() {
    console.log("blog will mount");
  }
  componentDidMount() {
    console.log("blog did mount");
  }
  componentWillUpdate() {
    console.log("blog will update");
  }
  componentDidUpdate() {
    console.log("blog did update");
  }
render(){
  return(
    <div>
  <h1>welcome to Biblionix Library</h1>
    </div>
  )
}




}