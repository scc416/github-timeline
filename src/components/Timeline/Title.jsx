import { useSelector } from "react-redux";

const Title = () => {
  const { repos, username } = useSelector(({ username, users }) => {
    return {
      username,
      repos: username && users[username],
    };
  });

  return (
    <h1>
      {repos && (
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
      )}
    </h1>
  );
};

export default Title;
