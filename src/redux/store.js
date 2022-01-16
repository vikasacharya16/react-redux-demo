import {createStore, applyMiddleware} from  'redux'
import RootReducer from './rootReducer'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'; // this gives a redux tool tab on inspect to see state changes


const store = createStore(RootReducer,  composeWithDevTools(
    applyMiddleware(thunk) // logger if console is needed else remove
))

export default store