import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

import project from './project'

const rootReducer = combineReducers({
  project,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer
