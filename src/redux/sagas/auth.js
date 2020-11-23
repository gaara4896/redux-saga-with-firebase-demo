// import { all, call, fork, put, take } from 'redux-saga/effects';
// // import firebase from '../../firebase';
// import { firebaseAuth } from '../../firebase'
// import { authActions } from '../actions';

// function* signUp(data) {
//   try {
//     const userData = yield call([firebaseAuth, firebaseAuth.createUserWithEmailAndPassword], data.email, data.password)
//     yield put(authActions.signUpFulfilled(userData))
//   } catch (error) {
//     // yield put(authActions.signUpFailed(error))
//   }
// }

// function* signIn(payload) {
//   try {
//     const authData = yield call(firebaseAuth.login, payload);
//     yield put(authActions.signInFulfilled(authData));
//   }
//   catch (error) {
//     // yield put(authActions.signInFailed(error));
//   }
// }

// function* signOut() {
//   try {
//     yield call(firebaseAuth.logout);
//     yield put(authActions.signOutFulfilled());
//   }
//   catch (error) {
//     // yield put(authActions.signOutFailed(error));
//   }
// }


// //=====================================
// //  WATCHERS
// //-------------------------------------

// function* watchCreateUser() {
//   while (true) {
//     let { data } = yield take(authActions.SIGN_UP.REQUEST);
//     yield fork(signUp, data)
//   }
// }

// function* watchSignIn() {
//   while (true) {
//     let { payload } = yield take(authActions.SIGN_IN.REQUEST);
//     yield fork(signIn, payload);
//   }
// }

// function* watchSignOut() {
//   while (true) {
//     yield take(authActions.SIGN_OUT.REQUEST);
//     yield fork(signOut);
//   }
// }


// //=====================================
// //  AUTH SAGAS
// //-------------------------------------

// export function* rootAuthSagas() {
//   yield all([
//     fork(watchCreateUser),
//     fork(watchSignIn),
//     fork(watchSignOut)
//   ])
// }
