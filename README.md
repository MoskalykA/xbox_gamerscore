# xbox_gamerscore

## A function to find the Gamerscore from a Gamertag

### Module installation

#### With NPM

```bash
npm i xbox_gamerscore
```

#### With Yarn

```bash
yarn add xbox_gamerscore
```

#### With PNPM

```bash
pnpm add xbox_gamerscore
```

### Example code

#### Importing the module

```js
const gamerScore = require("xbox_gamerscore");
```

#### Retrieving the gamerScore

```js
gamerScore
  .search("hello")
  .then((gameScore) => {
    console.log(gameScore); // -> 515
  })
  .catch((reason) => {
    console.error(reason);
  });
```

#### Retrieving the gamerScore with asyncronous code

```js
console.log(await gamerScore.search("hello")); // -> 515
```
