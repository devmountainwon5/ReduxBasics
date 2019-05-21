import {combineReducers} from 'redux';

const myFirstProperty = (state=`Josh`, action) => {
    switch(action.type){
        case 'update_firstProp':
            return action.payload.name;
        default:
            return state;
    }
}

const count = (state=0, action) => {
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

export default combineReducers({myFirstProperty, count, myOtherProperty})