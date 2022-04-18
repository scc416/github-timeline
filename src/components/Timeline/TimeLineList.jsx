import { useSelector } from "react-redux";
import TimelineListItem from "./TimelineListItem";
import { getYear, displayNow } from "helpers";

const makeElm = (repos) => {
  if (!repos || !Array.isArray(repos) || !repos.length) return;
  const earliestYear = getYear(repos[repos.length - 1].created);
  const latestYear = getYear(repos[0].created) + 1;
  const result = {};
  for (let i = latestYear; i >= earliestYear; i--) {
    result[i] = [];
  }
  for (const repo of repos) {
    const date = getYear(repo.created) + 1;
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
          <div className="year-label">{displayNow(year)}</div>
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
    ({ username, users, prevUsername }) =>
      (username && username in users && users[username]) ||
      (prevUsername && prevUsername in users && users[prevUsername])
  );

  const reposElm = makeElm(repos);

  return (
    <>
      <div className="years">
        {repos && <div className="line"></div>}
        {reposElm}
      </div>
    </>
  );
};

export default TimelineList;
