import "App.css";
import { useDispatch, useSelector } from "react-redux";
import { removeError } from "actions";
import { useEffect } from "react";
import UsernameForm from "components/UsernameForm";
import Timeline from "components/Timeline/";
import Spin from "components/Spin";

const App = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(({ loading, error }) => {
    return { error, loading };
  });

  useEffect(() => {
    if (error) {
      const hideError = setTimeout(() => dispatch(removeError()), 5000);
      return () => clearTimeout(hideError);
    }
  }, [error]);

  return (
    <>
      <UsernameForm />
      {error}
      <Timeline />
      <Spin />
    </>
  );
};

export default App;
