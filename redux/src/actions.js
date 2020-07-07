import * as actions from "./actionTypes";

export const bugAdded = (descriptions) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: descriptions,
  },
});

export const bugRemoved = (descriptions) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id: descriptions,
  },
});

export const bugResolve = (descriptions) => ({
  type: actions.BUG_RESOLVE,
  payload: {
    id: descriptions,
  },
});
