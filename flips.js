import { coinFlips, countFlips } from "./modules/coin.mjs";
const args = process.argv.slice(2)[0].slice(9);
const number = args || 1;
const flips = coinFlips(number);
console.log(flips, countFlips(flips));