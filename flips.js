import { coinFlips, countFlips } from "./modules/coin.mjs";
//const number = process.argv.slice(2);
const args = require("minimist")(process.argv.slice(2));
args ["number"];
const number = args.number || 1;
const flips = coinFlips(number);
console.log(flips, countFlips(flips));