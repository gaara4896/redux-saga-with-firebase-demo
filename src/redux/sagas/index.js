import { all, fork } from 'redux-saga/effects';
import { rootProjectSagas } from './project'

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(rootProjectSagas)
  ]);
}
