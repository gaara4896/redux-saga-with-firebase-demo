import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootSaga from './sagas';
import rootReducer from './reducers'
import middleware, { sagaMiddleware } from './middleware';

const reducer = persistReducer(
  {
    key: 'todo-demo',
    storage,
    whitelist: ['auth'],
  },
  rootReducer,
);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* istanbul ignore next */
const configStore = (initialState = {}) => {
  const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga);

  return {
    persistor: persistStore(store),
    store,
  };
};

const { store, persistor } = configStore();

export { store, persistor };
