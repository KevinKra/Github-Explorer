export const collectUsers = async () => {
  const response = await fetch(`https://api.github.com/users`);
  if (!response.ok) {
    throw new Error(`Unsuccessful fetch of users data.`);
  }
  return await response.json();
};

export const collectUser = async user => {
  const response = await fetch(`https://api.github.com/users/${user}`);
  if (!response.ok) {
    throw new Error(`Unsuccessful fetch ${user}'s data.`);
  }
  return await response.json();
};
