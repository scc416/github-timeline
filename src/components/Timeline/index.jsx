import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "actions";
import TimelineList from "./TimeLineList";
import Title from "./Title";
import "./Timeline.css";
import useBackToTop from "hooks/useBackToTop";

const Timeline = () => {
  const dispatch = useDispatch();

  const { repos, username } = useSelector(({ username, users }) => {
    return {
      username,
      repos: username && users[username],
    };
  });

  useEffect(() => {
    if (username && !repos) dispatch(fetchData(username));
    // eslint-disable-next-line
  }, [username]);

  const timeline = useBackToTop(repos);

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
