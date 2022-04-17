import { useSelector } from "react-redux";

const Title = () => {
  const { repos, username, loading } = useSelector(
    ({ username, users, loading }) => {
      return {
        username,
        repos: username && users[username],
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
