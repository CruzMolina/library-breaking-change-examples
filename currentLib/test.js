const { constructorMethods, bootstrap, properties } = require("@truffle/contract/lib/contract/");
const assert = require("assert");

assert(constructorMethods);
assert(bootstrap);
assert(properties);
console.log("Woo! Assertions passed!");
