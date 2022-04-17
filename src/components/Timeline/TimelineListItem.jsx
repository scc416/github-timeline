import { dateFormatter } from "helpers";

const TimelineListItem = ({ id, name, description, created, url }) => {
  return (
    <div key={id}>
      <div>{name}</div>
      <div>{description}</div>
      <div>{dateFormatter(created)}</div>
      <a href={url} rel="noreferrer" target="_blank">
        link
      </a>
    </div>
  );
};

export default TimelineListItem;
