import { useSelector } from "react-redux";
import TimelineList from "./TimeLineList";

const Timeline = () => {
  const username = useSelector(({ username }) => username);

  return (
    <>
      {username}
      <TimelineList />
    </>
  );
};

export default Timeline;
