import React, { Component } from 'react'
import {connect} from 'react-redux';

class Number extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
    }
    handleChange = (e) => {
        this.props.dispatch({
            type: `update_firstProp`,
            payload:{
                name:e.target.value,
            }
        })
    }
  render() {
    return (
      <div>
            {this.props.name}
            <br/>
            <input type="text" onChange={this.handleChange}/>
            <br/>
            {this.props.count}
      </div>
    )
  }
}
export default connect((reduxGiantObjectInSky) => {
    return reduxGiantObjectInSky;
})(Number)