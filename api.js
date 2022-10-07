const { filesize } = require("filesize");
const axios = require("axios").default;

const githubRepoRegex = /(?:https:\/\/)github.com[:/](.*)/;

const getRepoDetails = async (url) => {
  if (url.endsWith("/")) {
    url = url.slice(0, -1);
  }

  if (url.endsWith(".git")) {
    url = url.slice(0, -4);
  }

  const match = url.match(githubRepoRegex);
  if (!match) {
    throw new Error("Invalid Github URL");
  }

  const [author, repo] = url.split("/").slice(-2);
  const { data } = await axios.get(
    `https://api.github.com/repos/${author}/${repo}`
  );
  return filesize(data.size * 1024);
};
module.exports = { getRepoDetails };
