import { useSelector } from "react-redux";

const Title = () => {
  const { repos, username, loading } = useSelector(
    ({ username, users, loading, prevUsername }) => {
      const currentData = username && username in users && users[username];
      const prevData =
        prevUsername && prevUsername in users && users[prevUsername];
      return {
        username: currentData ? username : prevUsername,
        repos: currentData || prevData,
        loading,
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
        !loading && "Enter Github Username to get user's timeline"
      )}
    </h1>
  );
};

export default Title;
