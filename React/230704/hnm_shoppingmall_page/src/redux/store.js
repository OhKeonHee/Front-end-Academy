// 확장프로그램 redux-devtools -next 다운
// https://github.com/reduxjs/redux-devtools/tree/main/extension#installation
// npm install --save @redux-devtools/extension


import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productReducer from './reducers/productReducer';
import rootReducer from './reducers';
import { composeWithDevTools } from '@redux-devtools/extension';

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;