export const getNewUsername = (input) => input.trim().toLowerCase();

export const getNewUsers = (data, username, users) => {
  console.log("HELPER")
  return { ...users, [username]: data };
};
