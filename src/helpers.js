import { resultPerPage } from "constants";
import moment from "moment";

export const getNewUsername = (input) => input.trim().toLowerCase();

export const getNewUsers = (data, username, users) => {
  const existingData = users[username] || [];
  const formattedData = existingData.concat(
    data.map(({ id, name, created_at, html_url, description }) => {
      return { id, name, description, created: created_at, url: html_url };
    })
  );
  return { ...users, [username]: formattedData };
};

export const getUrl = (username, pageNum) => {
  let url = `/users/${username}/repos?sort=created&per_page=${resultPerPage}`;
  if (pageNum) url += `&page=${pageNum}`;
  return url;
};

export const getInvalidUsername = (names, name) => names.concat([name]);

export const dateFormatter = (date) => moment(date).format("LL");
