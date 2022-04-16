import {
  UPDATE_INPUT,
  SUMBIT_USERNAME,
  STORE_DATA,
  TO_LOADING_STATE,
  STOP_LOADING_STATE,
} from "../constants";
import axios from "axios";

export const updateInput = (input) => {
  return { type: UPDATE_INPUT, input };
};

export const submitUsername = () => {
  return { type: SUMBIT_USERNAME };
};

const fetchMorePage = async (dispatch, username, pageNum, length) => {
  if (length === 100) {
    const url = `/users/${username}/repos?sort=created&per_page=100&page=${pageNum}`;
    try {
      dispatch({ type: TO_LOADING_STATE });
      const { data } = await axios.get(url);
      dispatch({ type: STORE_DATA, username, data });
      fetchMorePage(dispatch, username, pageNum + 1, data.length);
    } catch (e) {
      console.log(e);
    }
  } else {
    dispatch({ type: STOP_LOADING_STATE });
  }
};

export const fetchData = (username) => {
  return async (dispatch) => {
    const url = `/users/${username}/repos?sort=created&per_page=100`;
    try {
      dispatch({ type: TO_LOADING_STATE });
      const { data } = await axios.get(url);
      dispatch({ type: STORE_DATA, username, data });
      fetchMorePage(dispatch, username, 2, data.length);
    } catch (e) {
      console.log(e);
    }
  };
};
