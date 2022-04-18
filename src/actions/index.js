import {
  UPDATE_INPUT,
  SUMBIT_USERNAME,
  STORE_DATA,
  TO_LOADING_STATE,
  STOP_LOADING_STATE,
  ADD_ERROR,
  REMOVE_ERROR,
  resultPerPage,
  invalidUsernameError,
  USERNAME_ERROR_STR,
  GENERAL_ERROR_STR,
} from "constants";
import { getUrl } from "helpers";
import axios from "axios";

export const updateInput = (input) => {
  return { type: UPDATE_INPUT, input };
};

export const removeError = () => {
  return { type: REMOVE_ERROR };
};

export const submitUsername = (username) => {
  return { type: SUMBIT_USERNAME, username };
};

const makeError = (e, username) => {
  if (!e) return { type: ADD_ERROR, error: GENERAL_ERROR_STR };
  const { status, statusText } = e;
  switch (status) {
    case 404:
      return {
        username,
        type: ADD_ERROR,
        error: USERNAME_ERROR_STR,
      };
    default:
      return {
        type: ADD_ERROR,
        error: statusText,
      };
  }
};

const fetchMorePage = async (dispatch, username, pageNum, length) => {
  if (length === resultPerPage) {
    const url = getUrl(username, pageNum);
    try {
      const { data } = await axios.get(url);
      dispatch({ type: STORE_DATA, username, data });
      fetchMorePage(dispatch, username, pageNum + 1, data.length);
    } catch ({ response }) {
      dispatch({ type: STOP_LOADING_STATE });
      const action = makeError(response, username);
      dispatch(action);
    }
  } else {
    dispatch({ type: STOP_LOADING_STATE });
  }
};

export const fetchData = (username) => {
  return async (dispatch, getState) => {
    const { invalidUsername, users } = getState();
    try {
      const isInvalid = invalidUsername.includes(username);
      if (isInvalid) throw invalidUsernameError;
      const alreadyFetched = username in users;
      if (alreadyFetched) {
        return dispatch({ type: STORE_DATA, username, data: [] });
      }
      const url = getUrl(username);
      dispatch({ type: TO_LOADING_STATE });
      const { data } = await axios.get(url);
      dispatch({ type: STORE_DATA, username, data });
      fetchMorePage(dispatch, username, 2, data.length);
    } catch (e) {
      const { response } = e;
      console.log(e);
      dispatch({ type: STOP_LOADING_STATE });
      const action = makeError(response, username);
      dispatch(action);
    }
  };
};
