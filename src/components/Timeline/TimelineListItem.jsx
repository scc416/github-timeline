import { dateFormatter } from "helpers";

const TimelineListItem = ({ id, name, description, created, url }) => {
  return (
    <div key={id} className="repo">
      <div className="repo-title">
        <a className="link" href={url} rel="noreferrer" target="_blank">
          <h3>{name}</h3>
        </a>
      </div>
      <h5>{dateFormatter(created)}</h5>
      <div className="description">{description}</div>
    </div>
  );
};

export default TimelineListItem;
