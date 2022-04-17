import { useDispatch, useSelector } from "react-redux";
import { removeError } from "actions";
import { useEffect } from "react";

const Error = () => {
  const dispatch = useDispatch();
  const error = useSelector(({ error }) => error);

  useEffect(() => {
    if (error) {
      const hideError = setTimeout(() => dispatch(removeError()), 5000);
      return () => clearTimeout(hideError);
    }
  // eslint-disable-next-line
  }, [error]);

  return <>{error}</>;
};

export default Error;
