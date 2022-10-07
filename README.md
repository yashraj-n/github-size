
<h1  align="center">
	Github-Size
</h1>
<p align="center">A Simple Lightweight Tool to check size of any Github Repository</p>
![npm bundle size](https://img.shields.io/bundlephobia/min/github-size)

## ⚡️ Quick start
Install the CLI using npm or yarn

```bash
npm i -g github-size
# or 
yarn global add github-size
```
## ⚙️ Usage
```bash
github-size <url>
```

Example:
```bash
github-size https://github.com/torvalds/linux
```
Output:
```bash
4.21 GB
```

## 📝API

```javascript
const {getRepoDetails}  =  require("../api");
const url  = "https://github.com/torvalds/linux";

getRepoDetails(url).then((size) => console.log(size)); // 4.21 GB
```
## License

[MIT](https://choosealicense.com/licenses/mit/)
