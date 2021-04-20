import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import budgetReducers from './reducers/Budget'

const rootReducer =  combineReducers({
  budget: budgetReducers
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
