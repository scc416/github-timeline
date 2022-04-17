import { useSelector } from "react-redux";

const Title = () => {
  const { user, username } = useSelector(({ username, users }) => {
    return {
      username,
      user: username && users[username],
    };
  });

  return (
    <span>
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
    </span>
  );
};

export default Title;
