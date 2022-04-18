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
  const existingData = users[username] || [];
  const formattedData = existingData.concat(
    data.map(({ id, name, created_at, html_url, description }) => {
      return { id, name, description, created: created_at, url: html_url };
    })
  );
  const newUsers = { ...users, [username]: formattedData };
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
