import connect from './connect'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/'
import thunk from 'redux-thunk'
import api from '../utils/api'

export default store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(api)))
