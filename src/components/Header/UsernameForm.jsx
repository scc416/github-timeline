import { useDispatch, useSelector } from "react-redux";
import { updateInput, submitUsername } from "actions";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const UsernameForm = () => {
  const dispatch = useDispatch();
  const input = useSelector(({ input }) => input);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(submitUsername());
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input">
        <Icon path={mdiMagnify} size={1} />
        <input
          type="text"
          value={input}
          onChange={(e) => dispatch(updateInput(e.target.value))}
          placeholder="Search GitHub Username"
        />
      </div>
    </form>
  );
};

export default UsernameForm;
