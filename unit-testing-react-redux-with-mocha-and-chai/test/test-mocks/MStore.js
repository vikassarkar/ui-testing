import { shallow } from "enzyme/build";
import sinon from "sinon";

export const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState)
  }
  return next(action)
}

export const getStore = (props) => {
  let store = {
    default: () => { },
    subscribe: sinon.fake(),
    dispatch: sinon.fake(),
    getState: sinon.fake(() => ({}))
  };
  const next = sinon.fake()
  const invoke = (action) => thunk(store)(next)(action)
  return { store, invoke, next }
};

export const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};
