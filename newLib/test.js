// no more export from lib/contract/index.js
const { constructorMethods, bootstrap, properties } = require("@truffle/contract/lib/contract/");
const assert = require("assert");

try {
assert(constructorMethods);
assert(bootstrap);
assert(properties);
} catch(error) {
  console.error(`\u001b[31mUh oh, assertion failed! No more export from @truffle/contract/lib/contract/index.js:\u001b[0m\n\n ${error}`)
}
