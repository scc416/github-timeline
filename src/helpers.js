import { resultPerPage, USERNAME_ERROR_STR } from "constants";
import moment from "moment";

export const getNewUsername = (input, prevUsername, invalidUsername) => {
  const username = input.trim().toLowerCase();
  const isInvalid = invalidUsername.includes(username);
  if (isInvalid) return [prevUsername, USERNAME_ERROR_STR];
  return [username, null];
};

export const getNewUsers = (
  data,
  username,
  users,
  currentUsername,
  prevUsername
) => {
  let result = users[username] || [];
  for (const repo of data) {
    const alreadyExist = result.find(({ id }) => id === repo.id);
    if (!alreadyExist) {
      const {
        id,
        name,
        created_at: created,
        html_url: url,
        description,
      } = repo;
      const newData = { id, name, description, created, url };
      result = result.concat([newData]);
    }
  }
  const newUsers = { ...users, [username]: result };
  const newPrevUser = currentUsername === username ? username : prevUsername;
  return [newUsers, newPrevUser];
};

export const getUrl = (username, pageNum) => {
  let url = `/users/${username}/repos?sort=created&per_page=${resultPerPage}`;
  if (pageNum) url += `&page=${pageNum}`;
  return url;
};

export const getInvalidUsername = (names, name) =>
  name ? names.concat([name]) : names;

export const dateFormatter = (date) => moment(date).format("LL");
export const getYear = (date) => parseInt(moment(date).format("YYYY"));
export const displayNow = (year) =>
  parseInt(year) === parseInt(moment().format("YYYY")) + 1 ? "Now" : year;
