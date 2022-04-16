import {
  UPDATE_INPUT,
  SUMBIT_USERNAME,
  STORE_DATA,
  TO_LOADING_STATE,
  STOP_LOADING_STATE,
  ADD_ERROR,
  REMOVE_ERROR,
  ADD_USERNAME_ERROR,
  REMOVE_USERNAME_ERROR,
  resultPerPage,
  invalidUsernameError,
} from "../constants";
import { getUrl } from "../helpers";
import axios from "axios";

export const updateInput = (input) => {
  return { type: UPDATE_INPUT, input };
};

export const submitUsername = () => {
  return { type: SUMBIT_USERNAME };
};

export const removeError = () => {
  return { type: REMOVE_ERROR };
};

export const removeUsernameError = () => {
  return { type: REMOVE_USERNAME_ERROR };
};

const makeError = ({ status, statusText }, username) => {
  switch (status) {
    case 404:
      return {
        username,
        type: ADD_USERNAME_ERROR,
        error: "Invalid username",
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
    const { invalidUsername } = getState();
    try {
      const isValid = !invalidUsername.includes(username);
      if (!isValid) throw invalidUsernameError;
      const url = getUrl(username);
      dispatch({ type: TO_LOADING_STATE });
      const { data } = await axios.get(url);
      dispatch({ type: STORE_DATA, username, data });
      fetchMorePage(dispatch, username, 2, data.length);
    } catch (e) {
      console.log(e);
      const { response } = e;
      dispatch({ type: STOP_LOADING_STATE });
      const action = makeError(response, username);
      dispatch(action);
    }
  };
};
