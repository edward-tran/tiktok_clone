// module.exports = function override(config, env){
//     return congfig  
// }
const {override, useBabelRc} = require("customize-cra");
module.exports = override(
  useBabelRc()
);