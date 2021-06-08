import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from './redux/reducer';
import sagas from './redux/middleware';

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleWare = createSagaMiddleware();

export type AppState = ReturnType<typeof reducer>;

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(sagas);
