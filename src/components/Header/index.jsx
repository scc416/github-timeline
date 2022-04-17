import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "actions";

const Timeline = () => {
  const dispatch = useDispatch();

  const { user, username } = useSelector(({ username, users }) => {
    return {
      username,
      user: username && users[username],
    };
  });

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
    </>
  );
};

export default Timeline;
