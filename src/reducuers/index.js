import { initState, UPDATE_INPUT } from "../constants";

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      const { input } = action;
      return { ...state, input };
    default:
      return state;
  }
};

export default rootReducer;
