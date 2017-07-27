
const assert = require( "assert" );
const ate = require( "./ate.js" );

let test = { };
ate( "sample", 123, test );

let descriptor = Object.getOwnPropertyDescriptor( test, "sample" );

assert.equal( descriptor.value, 123, "should be equal to 123" );

assert.equal( descriptor.writable, true, "should be equal to true" );

assert.equal( descriptor.enumerable, true, "should be equal to true" );

assert.equal( descriptor.configurable, false, "should be equal to false" );

console.log( "ok" );
