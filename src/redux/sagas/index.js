import { all } from 'redux-saga/effects';
// import { rootAuthSagas } from './auth'

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    // fork(rootAuthSagas)
  ]);
}
