import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'babel-polyfill';
import createLogger from 'redux-logger';
import initialState from './initialState';
import rootReducer from './Reducer';
import rootSaga from './Saga';

const saga = createSagaMiddleware();
const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
const store = applyMiddleware(saga, logger)(createStore, composeEnhancers)(rootReducer, initialState);

saga.run(rootSaga);

export default store;
