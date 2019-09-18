import React, { Component } from 'react';

export default class Aboutus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }

  }
 async componentDidMount() {

  const resp=await fetch("https://jsonplaceholder.typicode.com/todos/")

      const data=await resp.json()
      
      this.setState({data:data})
  }
  render() {
    console.log("detail", this.state.data)
    return (
      <div>
        {
          this.state.data &&
          this.state.data.map(detail=>{
            return<li>{detail.id}</li>
          })
        }

      </div>
    )

  }

}




