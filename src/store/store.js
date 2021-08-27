import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer';
import ReduxPromise from 'redux-promise-middleware'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

const Store = createStoreWithMiddleware(reducer);

export {Store};