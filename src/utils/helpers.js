export const handleEmptyData = data => {
  const keys = Object.keys(data);
  keys.map(key => {
    return !data[key] ? (data[key] = "N/A") : data[key];
  });
  return data;
};
