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
  // eslint-disable-next-line
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
        placeholder="Search GitHub Username"
      />
      {usernameError}
    </form>
  );
};

export default UsernameForm;
