import React, { Component } from 'react';

export default class Aboutus extends Component {
  constructor(props) {
    super(props);

  }
  render(){
    const data=[
      'A','B','C','D'
    ]
  return(
    <div>
 <p>
A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community for reference or borrowing. It provides physical or digital access to material, and may be a physical location or a virtual space, or both
 </p>
 {
   data.map(alpha=>{
     return <li>{alpha}</li>
   })
 }
    </div>
  )
}

}




