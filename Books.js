import React, { Component } from 'react';
import { connect } from 'react-redux';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      bookname: ''
    }
    this.handleTitle = this.handleTitle.bind(this)
  }
  handleTitle(e) {
    this.setSate({ title: "" })

  }
  render() {
    console.log("details",this.props.Details)
    return (


      // <div className="form-group col-lg-3">

      // <label>Title</label>
      // <input type="title" className="form-control" value={this.state.title} /> <br/>
      //  <label>Bookname</label>
      // <input type="bookname" className="form-control" value={this.state.bookname} /><br/>
      // <button type="button" className="btn btn-primary">Submit</button>
      <div>
        {
          
          this.props.Details &&
          Object.keys(this.props.Details).map(key => {
            return <li>{this.props.Details[key]}</li>
          })
        }
      </div>

    )
  }
}

export default connect(mapStateToProps, null)(Books);
function mapStateToProps(state) {
  return { Details: state };
}