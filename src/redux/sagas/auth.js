import { call, fork, put, take } from 'redux-saga/effects';
import firebase from '../../firebase';
import { authActions } from './actions';


function* signIn(authProvider) {
  try {
    const authData = yield call(firebase.login, authProvider);
    yield put(authActions.signInFulfilled(authData));
  }
  catch (error) {
    // yield put(authActions.signInFailed(error));
  }
}

function* signOut() {
  try {
    yield call(firebase.logout);
    yield put(authActions.signOutFulfilled());
  }
  catch (error) {
    // yield put(authActions.signOutFailed(error));
  }
}


//=====================================
//  WATCHERS
//-------------------------------------

function* watchSignIn() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN.REQUEST);
    yield fork(signIn, payload.authProvider);
  }
}

function* watchSignOut() {
  while (true) {
    yield take(authActions.SIGN_OUT.REQUEST);
    yield fork(signOut);
  }
}


//=====================================
//  AUTH SAGAS
//-------------------------------------

export const authSagas = [
  fork(watchSignIn),
  fork(watchSignOut)
];
