import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './Redux/Reducer/reducer';

//This is for the dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//This create the store 
const store = createStore(reducers, composeEnhancers())

ReactDOM.render(
    <Provider store={store}>{/* This makes it possible for components to connect to redux */}
        <App />
    </Provider>, 
    document.getElementById('root'));

