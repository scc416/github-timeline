import { useSelector } from "react-redux";
import TimelineListItem from "./TimelineListItem";

const TimelineList = () => {
  const user = useSelector(
    ({ username, users }) => username && users[username]
  );

  const reposElm =
    user &&
    user.map((details) => <TimelineListItem {...details} key={details.id} />);

  return <>{reposElm}</>;
};

export default TimelineList;
