import { UPDATE_INPUT, SUMBIT_USERNAME, STORE_DATA } from "../constants";
import axios from "axios";

export const updateInput = (input) => {
  return { type: UPDATE_INPUT, input };
};

export const submitUsername = () => {
  return { type: SUMBIT_USERNAME };
};

export const fetchData = (username) => {
  return async (dispatch) => {
    const url = `/users/${username}/repos`;
    try {
      const { data } = await axios.get(url);
      console.log(data);
      dispatch({ type: STORE_DATA, username, data });
    } catch (e) {
      console.log(e.message);
    }
  };
};
