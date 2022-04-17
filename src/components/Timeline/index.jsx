import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "actions";
import TimelineList from "./TimeLineList";

const Timeline = () => {
  const dispatch = useDispatch();

  const { user, username } = useSelector(({ username, users }) => {
    return {
      username,
      user: username && users[username],
    };
  });

  useEffect(() => {
    if (username && !user) dispatch(fetchData(username));
  // eslint-disable-next-line
  }, [username]);

  return (
    <>

      <TimelineList />
    </>
  );
};

export default Timeline;
