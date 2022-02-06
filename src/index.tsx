import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootState } from './reducers'


const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer<RootState, any>(persistConfig, rootReducer)

const store = createStore(persistedReducer);
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
);

