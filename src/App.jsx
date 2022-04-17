import "App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, removeError, removeUsernameError } from "actions";
import { useEffect } from "react";
import UsernameForm from "components/UsernameForm";
import Timeline from "components/Timeline/";

const App = () => {
  const dispatch = useDispatch();
  const { loading, error, usernameError } = useSelector(
    ({ loading, error, usernameError }) => {
      return {
        error,
        loading,
        usernameError,
      };
    }
  );

  useEffect(() => {
    if (error) {
      const hideError = setTimeout(() => dispatch(removeError()), 5000);
      return () => clearTimeout(hideError);
    }
  }, [error]);

  return (
    <div>
      <UsernameForm />
      {error}
      <Timeline />
      {loading && "LOADING"}
    </div>
  );
};

export default App;
