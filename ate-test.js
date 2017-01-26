"use strict";

const ate = require( "./ate.js" );

let child = function Merchant( ) { };
let connector = function connector( ){ };

console.log( ate( "name", child.name, connector ) );
