import { actionTypes } from 'react-redux-firebase';
import { projectActions } from '../actions';

export const initialState = {
  projects: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case projectActions.CREATE_PROJECT.SUCCESS:
      return { ...state, projects: [...state.projects, action.payload] }

    case projectActions.LOAD_PROJECTS.SUCCESS:
      return { ...state, projects: action.payload }

    case actionTypes.LOGOUT:
      return { ...initialState }

    default:
      return state;
  }
}
