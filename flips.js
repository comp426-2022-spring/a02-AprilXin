import { coinFlips, countFlips } from "./modules/coin.mjs";
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const args = require("minimist")(process.argv.slice(2));
// args["number"];
// const number = args.number || 1;
const number = 1;
const flips = coinFlips(number);
console.log(flips, countFlips(flips));