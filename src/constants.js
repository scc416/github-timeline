export const initState = {
  input: "",
  username: "",
  users: {},
  loading: null,
  error: null,
  invalidUsername: [],
  prevUsername: null,
};

export const invalidUsernameError = { response: { status: 404 } };
export const resultPerPage = 100;
export const errorTimeout = 5000;

export const UPDATE_INPUT = "UPDATE_INPUT";
export const SUMBIT_USERNAME = "SUMBIT_USERNAME";
export const STORE_DATA = "STORE_DATA";
export const TO_LOADING_STATE = "TO_LOADING_STATE";
export const STOP_LOADING_STATE = "STOP_LOADING_STATE";
export const ADD_ERROR = "ADD_ERROR";
export const REMOVE_ERROR = "REMOVE_ERROR";

export const USERNAME_ERROR_STR = "Invalid username";
export const GENERAL_ERROR_STR = "There was an error";
