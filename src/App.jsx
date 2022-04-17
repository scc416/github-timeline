import "App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, removeError, removeUsernameError } from "actions";
import { useEffect } from "react";
import UsernameForm from "components/UsernameForm";
import Timeline from "components/Timeline/";

const App = () => {
  const dispatch = useDispatch();
  const { username, user, loading, error, usernameError } = useSelector(
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
      <UsernameForm />
      {usernameError}
      <br />
      {error}
      {username}
      <Timeline />
      {loading && "LOADING"}
    </div>
  );
};

export default App;
