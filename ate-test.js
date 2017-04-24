
const ate = require( "./ate.js" );

let test = { };
ate( "sample", 123, test );

console.log( Object.getOwnPropertyDescriptor( test, "sample" ) );
