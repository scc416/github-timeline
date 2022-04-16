import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { updateInput, submitUsername, fetchData } from "./actions";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { input, username, user } = useSelector(
    ({ input, username, users }) => {
      return { input, username, user: username && users[username] };
    }
  );
  useEffect(() => console.log(username), [username]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(submitUsername());
  };
  useEffect(() => {
    if (username && !user) dispatch(fetchData(username));
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);
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
      {username}
    </div>
  );
};

export default App;
