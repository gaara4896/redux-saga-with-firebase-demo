import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { addDoc, getCollection } from './firebaseApi'
import { projectActions } from '../actions';
import { getElementsFromDocs } from '../../utils/firebase';

function* createProject({ payload }) {
  try {
    const saveRespond = yield addDoc('projects', payload);
    const data = yield call([saveRespond, saveRespond.get])
    yield put(projectActions.projectCreated(data.data()));
  }
  catch (error) {
    // yield put(authActions.signOutFailed(error));
  }
}

function* loadProjects() {
  try {
    const snapshot = yield getCollection('projects');
    yield put(projectActions.projectsLoaded(getElementsFromDocs(snapshot)))
  } catch (error) {

  }
}


//=====================================
//  WATCHERS
//-------------------------------------

function* watchCreateProject() {
  yield takeEvery(projectActions.CREATE_PROJECT.REQUEST, createProject)
}

function* watchLoadProjects() {
  yield takeEvery(projectActions.LOAD_PROJECTS.REQUEST, loadProjects)
}


//=====================================
//  AUTH SAGAS
//-------------------------------------

export function* rootProjectSagas() {
  yield all([
    fork(watchCreateProject),
    fork(watchLoadProjects),
  ])
}
