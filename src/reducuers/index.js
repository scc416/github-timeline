import { initState, UPDATE_INPUT, SUMBIT_USERNAME } from "../constants";

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      const { input } = action;
      return { ...state, input };
    case SUMBIT_USERNAME:
      const { input: username } = state;
      return { ...state, username, input: "" };
    default:
      return state;
  }
};

export default rootReducer;
