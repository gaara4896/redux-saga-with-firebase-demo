import { authActions } from '../actions';

export const initialState = {
  token: undefined
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case authActions.SIGN_OUT.SUCCESS:
      return { ...initialState }
    default:
      return state;
  }
}
