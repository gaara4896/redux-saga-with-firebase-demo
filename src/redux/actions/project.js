
export const projectActions = {
  CREATE_PROJECT: {
    REQUEST: 'CREATE_PROJECT.REQUEST',
    SUCCESS: 'CREATE_PROJECT.SUCCESS',
    FAILURE: 'CREATE_PROJECT.FAILURE',
  },
  LOAD_PROJECTS: {
    REQUEST: 'LOAD_PROJECTS.REQUEST',
    SUCCESS: 'LOAD_PROJECTS.SUCCESS',
    FAILURE: 'LOAD_PROJECTS.FAILURE',
  },

  projectCreated: (payload) => ({
    type: projectActions.CREATE_PROJECT.SUCCESS,
    payload
  }),

  projectsLoaded: (payload) => ({
    type: projectActions.LOAD_PROJECTS.SUCCESS,
    payload
  })
};
