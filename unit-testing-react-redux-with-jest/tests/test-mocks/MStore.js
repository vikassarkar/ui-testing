import { shallow } from "enzyme/build";

export const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState)
  }
  return next(action)
}


export const getStore = (props) => {
  let store = {
    default: () => { },
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: jest.fn(() => ({}))
  };
  const next = jest.fn()
  const invoke = (action) => thunk(store)(next)(action)
  return { store, invoke, next }
};

export const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};
