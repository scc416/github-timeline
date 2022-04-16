import {
  initState,
  UPDATE_INPUT,
  SUMBIT_USERNAME,
  STORE_DATA,
  TO_LOADING_STATE,
  STOP_LOADING_STATE,
  ADD_ERROR,
  REMOVE_ERROR,
  ADD_USERNAME_ERROR,
  REMOVE_USERNAME_ERROR,
} from "../constants";
import { getNewUsername, getNewUsers } from "../helpers";

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      const { input } = action;
      return { ...state, input };
    case SUMBIT_USERNAME:
      const username = getNewUsername(state.input);
      return { ...state, username, input: "", error: null };
    case STORE_DATA:
      const users = getNewUsers(action.data, action.username, state.users);
      return { ...state, users };
    case TO_LOADING_STATE:
      return { ...state, loading: true };
    case STOP_LOADING_STATE:
      return { ...state, loading: false };
    case ADD_USERNAME_ERROR:
      return { ...state, usernameError: action.error };
    case REMOVE_USERNAME_ERROR:
      return { ...state, usernameError: null };
    case ADD_ERROR:
      return { ...state, error: action.error };
    case REMOVE_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};

export default rootReducer;
