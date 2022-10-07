const {getRepoDetails} = require("../api");

const url = "https://github.com/torvalds/linux"

getRepoDetails(url).then((size) => console.log(size));
