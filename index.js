#! /usr/bin/env node

const {getRepoDetails} = require("./api");
const url = process.argv[2];

if (!url) {
  console.log("Usage: github-size <github-repo-url>");
  process.exit(0);
}

getRepoDetails(url).then((size) => console.log(size));
