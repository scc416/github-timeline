import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { updateInput, submitUsername } from "./actions/";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { input, username } = useSelector(({ input, username }) => {
    return { input, username };
  });
  useEffect(() => console.log(username), [username]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(submitUsername());
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => dispatch(updateInput(e.target.value))}
        />
        <button type="submit">Generate Timeline</button>
      </form>
    </div>
  );
};

export default App;
