import { useSelector } from "react-redux";
import TimelineListItem from "./TimelineListItem";
import { getYear } from "helpers";

const makeElm = (repos) => {
  if (!repos || !Array.isArray(repos)) return;
  const earliestYear = getYear(repos[repos.length - 1].created);
  const latestYear = getYear(repos[0].created) + 1;
  const result = {};
  for (let i = latestYear; i >= earliestYear; i--) {
    result[i] = [];
  }
  for (const repo of repos) {
    const date = getYear(repo.created) + 1;
    console.log(date);
    result[date].push(repo);
  }
  const elms = [];
  for (const year in result) {
    const reposElm = result[year].map((details) => (
      <TimelineListItem {...details} key={details.id} />
    ));
    const elm = (
      <div key={year} className="year">
        <div>
          <div className="year-label">{year}</div>
          {reposElm}
        </div>
      </div>
    );
    elms.push(elm);
  }
  return elms.reverse();
};

const TimelineList = () => {
  const repos = useSelector(
    ({ username, users }) => username && users[username]
  );

  const reposElm = makeElm(repos);

  return <div className="years">{reposElm}</div>;
};

export default TimelineList;
