const catcl = require("../src/main.js");
main()
async function main(){
catcl.log("press any key to continue...");
await catcl.wait()
catcl.success('button pressed');
}
// catcl.clear();