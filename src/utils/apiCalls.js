export const collectUsers = async query => {
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

export const searchUsers = async users => {
  const response = await fetch(
    `https://api.github.com/search/users?q=${users}`
  );
  if (!response.ok) {
    throw new Error(`Unsuccessful search request.`);
  }
  return await response.json();
};

export const userRepos = async user => {
  const response = await fetch(
    `https://api.github.com/users/${user}/repos?sort=updated&per_page=6`
  );
  if (!response.ok) {
    throw new Error(`Unsuccessful repository request.`);
  } else {
    const repositories = await response.json();
    const output = repositories.map(repo => {
      return {
        description: repo.description,
        name: repo.name,
        language: repo.language,
        open_issues: repo.open_issues,
        has_issues: repo.has_issues,
        watchers: repo.watchers,
        forks: repo.forks,
        visit: repo.html_url,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        key: repo.node_id
      };
    });
    return output;
  }
};
