import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'


import './index.css';
import firebase, { rrfConfig } from './firebase'
import { store, persistor } from './redux/store'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ReactReduxFirebaseProvider
          firebase={firebase}
          dispatch={store.dispatch}
          createFirestoreInstance={createFirestoreInstance}
          config={rrfConfig}
        >
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </ReactReduxFirebaseProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
