import {
  initState,
  UPDATE_INPUT,
  SUMBIT_USERNAME,
  STORE_DATA,
} from "../constants";
import { getNewUsername, getNewUsers } from "../helpers";

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      const { input } = action;
      return { ...state, input };
    case SUMBIT_USERNAME:
      const username = getNewUsername(state.input);
      return { ...state, username, input: "" };
    case STORE_DATA:
      const users = getNewUsers(action.data, action.username, state.users);
      return { ...state, users };
    default:
      return state;
  }
};

export default rootReducer;
