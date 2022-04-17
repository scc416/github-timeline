import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, removeError, removeUsernameError } from "actions";
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
  }, [username]);

  return (
    <>
      {user && (
        <>
          Timeline of{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://github.com/${username}`}
          >
            {username}
          </a>
        </>
      )}
      <TimelineList />
    </>
  );
};

export default Timeline;
