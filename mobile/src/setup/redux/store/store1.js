import {createStore, combineReducers, applyMiddleware} from 'redux';

//Import the reducer
import reducer1 from '../reducer/reducer1'; 
import reducer2 from '../reducer/reducer2'; 

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
export default createStore(combineReducers({reducerOne: reducer1, reducerTwo: reducer2}), {}, applyMiddleware(...middlewares));