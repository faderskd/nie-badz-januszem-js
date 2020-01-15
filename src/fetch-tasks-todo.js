const fetch = require('node-fetch');

export default async function fetchTasksToDo(url) {
  const response = await fetch(url);
  if (!response.ok) {
    // eslint-disable-next-line max-len
    throw new Error(`Failed to fetch tasks from ${url}. Status text: ${response.statusText}, status: ${response.status}`);
  }
  const json = await response.json();
  return json['tasks'];
}
