export const initState = {
  input: "",
  username: "",
  users: {},
  loading: null,
  error: null,
  usernameError: null,
};

export const resultPerPage = 100;

export const UPDATE_INPUT = "UPDATE_INPUT";
export const SUMBIT_USERNAME = "SUMBIT_USERNAME";
export const STORE_DATA = "STORE_DATA";
export const TO_LOADING_STATE = "TO_LOADING_STATE";
export const STOP_LOADING_STATE = "STOP_LOADING_STATE";
export const ADD_ERROR = "ADD_ERROR";
export const REMOVE_ERROR = "REMOVE_ERROR";
export const ADD_USERNAME_ERROR = "ADD_USERNAME_ERROR";
export const REMOVE_USERNAME_ERROR = "REMOVE_USERNAME_ERROR";
