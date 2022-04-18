import {
  initState,
  UPDATE_INPUT,
  STORE_DATA,
  TO_LOADING_STATE,
  STOP_LOADING_STATE,
  ADD_ERROR,
  REMOVE_ERROR,
} from "constants";
import {
  getNewUsername,
  getNewUsers,
  getInvalidUsername,
  errorAfterSubmit,
} from "helpers";

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      const { input } = action;
      return { ...state, input };
    case STORE_DATA:
      const users = getNewUsers(action.data, action.username, state.users);
      console.log(users);
      return { ...state, users, username: action.username };
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
