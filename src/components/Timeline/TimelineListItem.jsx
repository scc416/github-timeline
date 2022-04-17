import { dateFormatter } from "helpers";

const TimelineListItem = ({ id, name, description, created, url }) => {
  return (
    <div key={id} className="repo">
      <div className="repo-title">
        <a className="link" href={url} rel="noreferrer" target="_blank">
          Link
        </a>
        <h2>{name}</h2>
      </div>
      <div>{description}</div>
      <span>{dateFormatter(created)}</span>
    </div>
  );
};

export default TimelineListItem;
