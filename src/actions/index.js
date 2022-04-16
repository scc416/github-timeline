import { UPDATE_INPUT, SUMBIT_USERNAME } from "../constants";

export const updateInput = (input) => {
  return { type: UPDATE_INPUT, input };
};

export const submitUsername = () => {
  return { type: SUMBIT_USERNAME };
};
