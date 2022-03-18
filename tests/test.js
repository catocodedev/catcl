const catcl = require("../src/main.js");
main()
async function main(){
catcl.loading_time(4000,'Loading');
catcl.log('Loading Done');
catcl.log('Log');
catcl.success('Success');
catcl.warn('Warn');
catcl.info('Info');
catcl.error('Error');
}
// catcl.clear();