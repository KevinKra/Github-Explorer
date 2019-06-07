export const collectUsers = async () => {
  const response = await fetch(`https://api.github.com/users`);
  return await response.json();
};
