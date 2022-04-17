import { useSelector } from "react-redux";

const Spin = () => {
  const loading = useSelector(({ loading }) => loading);

  return <>{loading && "LOADING"}</>;
};

export default Spin;
