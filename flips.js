import { coinFlips, countFlips } from "./modules/coin.mjs";
const number = process.argv.slice(2);
const flips = coinFlips(number);
console.log(flips, countFlips(flips));