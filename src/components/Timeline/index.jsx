import { useSelector } from "react-redux";

const Timeline = () => {
  const user = useSelector(
    ({ username, users }) => username && users[username]
  );

  const reposElm =
    user &&
    user.map(({ id, name, description, created, url }) => {
      return (
        <div key={id}>
          <div>{name}</div>
          <div>{description}</div>
          <div>{created}</div>
          <a href={url} rel="noreferrer" target="_blank">
            link
          </a>
        </div>
      );
    });

  return <>{reposElm}</>;
};

export default Timeline;
