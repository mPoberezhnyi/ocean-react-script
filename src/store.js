import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers/index'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
const store = createStoreWithMiddleware(reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store