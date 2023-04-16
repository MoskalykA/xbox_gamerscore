# xbox_gamerscore

```bash
npm i xbox_gamerscore
```

```js
const xbox_gamerscore = require("xbox_gamerscore");
```

```js
xbox_gamerscore
  .search("hello")
  .then((gameScore) => {
    console.log(gameScore); // -> 515
  })
  .catch((reason) => {
    console.error(reason);
  });
```
