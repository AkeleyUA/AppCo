import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import { usersData } from '../reducers/users-data/reducers';
import { UI } from '../reducers/UI/reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagasMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  usersData,
  UI
})

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagasMiddleware)),
)

sagasMiddleware.run(rootSaga);

export default store;