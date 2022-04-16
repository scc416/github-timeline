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
