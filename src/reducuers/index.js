import {
  initState,
  UPDATE_INPUT,
  SUMBIT_USERNAME,
  STORE_DATA,
  TO_LOADING_STATE,
  STOP_LOADING_STATE,
  ADD_ERROR,
  REMOVE_ERROR,
} from "constants";
import { getNewUsername, getNewUsers, getInvalidUsername } from "helpers";

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      const { input } = action;
      return { ...state, input };
    case SUMBIT_USERNAME:
      const [username, error] = getNewUsername(
        action.username,
        state.username,
        state.invalidUsername
      );
      return { ...state, username, error };
    case STORE_DATA:
      const [users, prevUsername] = getNewUsers(
        action.data,
        action.username,
        state.users,
        state.username,
        state.prevUsername
      );
      return { ...state, users, prevUsername };
    case TO_LOADING_STATE:
      return { ...state, loading: true };
    case STOP_LOADING_STATE:
      return { ...state, loading: false };
    case ADD_ERROR:
      const invalidUsername = getInvalidUsername(
        state.invalidUsername,
        action.username
      );
      return { ...state, invalidUsername, error: action.error };
    case REMOVE_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};

export default rootReducer;
