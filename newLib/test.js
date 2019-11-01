// no more export from lib/contract/index.js
const { constructorMethods, bootstrap, properties } = require("@truffle/contract/lib/contract/");
const assert = require("assert");

try {
assert(constructorMethods);
assert(bootstrap);
assert(properties);
} catch(error) {
  console.error(`Uh oh, assertion failed! ${error}`)
}
