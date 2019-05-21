import React, { Component } from 'react'
import {connect} from 'react-redux';

 class Counter extends Component {

    handleUpdate(str){
        this.props.dispatch({
            type: str
        })
    }

  render() {
    return (
      <div>
      {this.props.myFirstProperty}
      <br/>
            <button onClick={()=>{this.handleUpdate('add_number')}}>+</button>
            <button onClick={()=>{this.handleUpdate('subtract_number')}}>-</button>
      </div>
    )
  }
}

export default connect(state => state)(Counter);