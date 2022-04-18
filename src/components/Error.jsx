import { useDispatch, useSelector } from "react-redux";
import { removeError } from "actions";
import { useEffect } from "react";
import { errorTimeout } from "constants";

const Error = () => {
  const dispatch = useDispatch();
  const error = useSelector(({ error }) => error);

  useEffect(() => {
    if (error) {
      const hideError = setTimeout(() => dispatch(removeError()), errorTimeout);
      return () => clearTimeout(hideError);
    }
    // eslint-disable-next-line
  }, [error]);

  return <>{error && <div className="Error">{error}</div>}</>;
};

export default Error;
