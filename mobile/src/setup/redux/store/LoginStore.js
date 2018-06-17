import {createStore, combineReducers, applyMiddleware} from 'redux';

//Import the reducer
import LoginReducer from '../reducer/LoginReducer'; 


import thunk from 'redux-thunk'

// Show Logger redux
const logger = store => next => action => {
    console.log("Log Action", action.type)
    console.log(" => current state", store.getState())
    console.log(" => dispatching", action)
    const result = next(action)
    return result
}
const middlewares = [thunk, logger]

// Connect our store to the reducers
export default createStore(combineReducers({LoginReducer: LoginReducer}), {}, applyMiddleware(...middlewares));