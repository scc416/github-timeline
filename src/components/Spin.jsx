import { useSelector } from "react-redux";

const Spin = () => {
  const loading = useSelector(({ loading }) => loading);

  return <>{loading && <div className="spin"></div>}</>;
};

export default Spin;
