import { flipACoin } from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const args = require("minimist")(process.argv.slice(2));
args["call"];
const call = args.call;
if (call == null) {
    console.error("Error: no input.");
} else if (call != "heads" && call != "tails") {
    console.error("Usage: node guess-flip.js --call=[heads|tails]");
} else {
    console.log(flipACoin(call));
}
