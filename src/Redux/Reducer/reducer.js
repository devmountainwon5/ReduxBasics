import {combineReducers} from 'redux';

// Set up properties in our big object in the sky with function. 
const name = (state=`Josh`, action) => {
    switch(action.type){
        case 'update_firstProp':
            return action.payload.name;
        default:
            return state;
    }
}

const count = (state=0, action) => {
    debugger
    switch(action.type){
        case 'add_number' :
            state++;
            return state
        case 'subtract_number' :
            state --;
            return state;
        default:
            return state;
    }
}

const myOtherProperty = (state=`Other`, action) => {
    return state;
}

//Combined them together see line 1 for imports. 
export default combineReducers({name, count, myOtherProperty})