import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "actions";
import TimelineList from "./TimeLineList";
import Title from "./Title";
import "./Timeline.css";
import useBackToTop from "hooks/useBackToTop";

const Timeline = () => {
  const dispatch = useDispatch();

  const { prevUsername, username, currentRepo, newUsername } = useSelector(
    ({ prevUsername, username, users, newUsername }) => {
      const currentData = username && username in users && users[username];
      return {
        username,
        currentRepo: currentData,
        prevUsername,
        newUsername,
      };
    }
  );

  useEffect(() => {
    if (username && !currentRepo) dispatch(fetchData(username));
    // eslint-disable-next-line
  }, [username, newUsername]);

  const timeline = useBackToTop(prevUsername);

  return (
    <>
      <div className="Timeline" ref={timeline}>
        <Title />
        <TimelineList />
      </div>
    </>
  );
};

export default Timeline;
