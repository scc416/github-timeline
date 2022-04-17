import { useDispatch, useSelector } from "react-redux";
import { updateInput, submitUsername, removeUsernameError } from "actions";
import { useEffect } from "react";
import { errorTimeout } from "constants";

const UsernameForm = () => {
  const dispatch = useDispatch();
  const { input, usernameError } = useSelector(({ input, usernameError }) => {
    return { input, usernameError };
  });

  useEffect(() => {
    if (usernameError) {
      const hideUsernameError = setTimeout(
        () => dispatch(removeUsernameError()),
        errorTimeout
      );
      return () => clearTimeout(hideUsernameError);
    }
  }, [usernameError]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log()
    dispatch(submitUsername());
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={input}
        onChange={(e) => dispatch(updateInput(e.target.value))}
      />
      {usernameError}
      <button type="submit">Generate Timeline</button>
    </form>
  );
};

export default UsernameForm;
