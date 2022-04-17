import { dateFormatter } from "helpers";

const TimelineListItem = ({ id, name, description, created, url }) => {
  return (
    <div key={id}>
      <div>
        <h2>{name}</h2>
        <a href={url} rel="noreferrer" target="_blank">
          link
        </a>
      </div>
      <div>{description}</div>
      <span>{dateFormatter(created)}</span>
    </div>
  );
};

export default TimelineListItem;
