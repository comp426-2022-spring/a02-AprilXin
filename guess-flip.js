import { flipACoin } from "./modules/coin.mjs";
let call = process.argv.slice(2)[0].slice(7);
if (call != "heads" && call != "tails") {
    console.error("Wrong input.");
} else {
    console.log(flipACoin(call));
}
