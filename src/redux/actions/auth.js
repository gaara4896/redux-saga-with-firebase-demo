
export const authActions = {
  SIGN_IN: {
    REQUEST: 'SIGN_IN.REQUEST',
    SUCCESS: 'SIGN_IN.SUCCESS',
    FAILURE: 'SIGN_IN.FAILURE'
  },
  SIGN_OUT: {
    REQUEST: 'SIGN_OUT.REQUEST',
    SUCCESS: 'SIGN_OUT.SUCCESS',
  },

  signInFulfilled: (data) => ({
    type: authActions.SIGN_IN.SUCCESS,
    data
  }),

  signOutFulfilled: () => ({
    type: authActions.SIGN_OUT.SUCCESS
  }),
};