import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { updateInput, submitUsername, fetchData } from "./actions";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { input, username, user, loading } = useSelector(
    ({ input, username, users, loading }) => {
      return { input, username, loading, user: username && users[username] };
    }
  );

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(submitUsername());
  };

  useEffect(() => {
    if (username && !user) dispatch(fetchData(username));
  }, [username]);

  const reposElm =
    user &&
    user.map(({ id, name, description, created, url }) => {
      return (
        <div key={id}>
          <div>{name}</div>
          <div>{description}</div>
          <div>{created}</div>
          <a href={url} rel="noreferrer" target="_blank">
            link
          </a>
        </div>
      );
    });

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
      {reposElm}
      {loading && "LOADING"}
    </div>
  );
};

export default App;
