import { useSelector } from "react-redux";

const Title = () => {
  const { repos, username } = useSelector(
    ({ username, users, prevUsername }) => {
      const currentData = username && username in users && users[username];
      const prevData =
        prevUsername && prevUsername in users && users[prevUsername];
      return {
        username: currentData ? username : prevUsername,
        repos: currentData || prevData,
      };
    }
  );

  return (
    <h1>
      {repos ? (
        <>
          Timeline of @
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://github.com/${username}`}
          >
            {username}
          </a>
        </>
      ) : (
        "Enter Github Username to get user's timeline"
      )}
    </h1>
  );
};

export default Title;
