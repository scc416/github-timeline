import { dateFormatter } from "helpers";

const TimelineListItem = ({ id, name, description, created, url }) => {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <div>{description}</div>
      <div>{dateFormatter(created)}</div>
      <a href={url} rel="noreferrer" target="_blank">
        link
      </a>
    </div>
  );
};

export default TimelineListItem;
