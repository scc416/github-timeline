import { useSelector } from "react-redux";

const Title = () => {
  const { repos, username } = useSelector(({ username, users }) => {
    return {
      username,
      repos: username && users[username],
    };
  });

  return (
    <span>
      {repos && (
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
    </span>
  );
};

export default Title;
