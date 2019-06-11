import React, { Component } from 'react'
// Add package from react-redux
import {connect} from 'react-redux';
//Import action from file path; Use path intelisense. You can download this in the package manager in visual studio code.
// Use this approach if you want to use mapDispatchToProps. I don't recommend it. 
// import { bindActionCreators } from 'redux'
// import {addSubtract} from '../Redux/Action/action';

//Use this way because it's better
import * as Actions from '../Redux/Action/action'

 class Counter extends Component {

    handleUpdate(str){
      debugger
      //This runs the actionCreator which will dispatch to the reducer
      this.props.addSubtract(str)
    }

  render() {
    return (
      <div>
      {this.props.name}
      <br/>
            <button onClick={()=>{this.handleUpdate('+')}}>+</button>
            <button onClick={()=>{this.handleUpdate('-')}}>-</button>
      </div>
    )
  }
}


// // Takes in the redux state object and can return choosen properties from the object or the whole thing. 
// const mapStateToProps = (state) => {
//   //must return an object
//     return {name:state.name}
// }
// // This get rid of dispatch from props and replace it with your custom actionCreators
// const mapDispatchToProps = (dispatch) => {
//   //See import on line 6 for bindActionCreator
//   //Take in two arguments an object which includes your actions and dispatch
// 	return bindActionCreators({addSubtract}, dispatch);
// }

// //connect to redux state. Big object in the sky.

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// The clean way to use actionCreator.
export default connect(state => state, Actions)(Counter);