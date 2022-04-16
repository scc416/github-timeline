import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  updateInput,
  submitUsername,
  fetchData,
  removeError,
  removeUsernameError,
} from "./actions";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { input, username, user, loading, error, usernameError } = useSelector(
    ({ input, username, users, loading, error, usernameError }) => {
      return {
        input,
        error,
        username,
        loading,
        usernameError,
        user: username && users[username],
      };
    }
  );

  useEffect(() => {
    if (error) {
      const hideError = setTimeout(() => dispatch(removeError()), 5000);
      return () => clearTimeout(hideError);
    }
  }, [error]);

  useEffect(() => {
    if (usernameError) {
      const hideUsernameError = setTimeout(
        () => dispatch(removeUsernameError()),
        5000
      );
      return () => clearTimeout(hideUsernameError);
    }
  }, [usernameError]);

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
      {usernameError}
      <br />
      {error}
      {username}
      {reposElm}
      {loading && "LOADING"}
    </div>
  );
};

export default App;
