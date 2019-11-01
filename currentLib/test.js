const { constructorMethods, bootstrap, properties } = require("@truffle/contract/lib/contract/");
const assert = require("assert");

assert(constructorMethods);
assert(bootstrap);
assert(properties);
console.log(`\u001b[32mWoo! Assertions passed! Successfully required from @truffle/contract/lib/contract/index.js\u001b[0m`);
