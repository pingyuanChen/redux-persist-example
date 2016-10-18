import { persistStore, autoRehydrate } from 'redux-persist';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import devTools from 'remote-redux-devtools';
import localForage from 'localforage';
import rootReducer from './reducers';

const logger = createLogger();
const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, logger),
  autoRehydrate(),
  devTools({ hostname: 'localhost', port: 5678 })
));

persistStore(store, { storage: localForage });
window.localForage = localForage;

export default store;