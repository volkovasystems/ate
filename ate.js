/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "ate",
			"path": "ate/ate.js",
			"file": "ate.js",
			"module": "ate",
			"author": "Richeve S. Bebedor",
			"email": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/ate.git",
			"test": "ate-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Force set value.

		The property is non-configurable, enumerable and writable.
		This will override existing value.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"protype": "protype",
			"wichevr": "wichevr",
			"zelf": "zelf"
		}
	@end-include
*/

const falzy = require( "falzy" );
const protype = require( "protype" );
const wichevr = require( "wichevr" );
const zelf = require( "zelf" );

const ate = function ate( property, value, entity ){
	/*;
		@meta-configuration:
			{
				"property:required": [
					"number",
					"string"
				],
				"value:required": "*",
				"entity": "*"
			}
		@end-meta-configuration
	*/

	if( falzy( property ) || !protype( property, NUMBER + STRING ) ){
		throw new Error( "invalid property" );
	}

	entity = wichevr( entity, zelf( this ) );

	try{
		Object.defineProperty( entity, property, {
			"value": value,

			"configurable": false,
			"enumerable": true,
			"writable": true
		} );

	}catch( error ){ }

	return entity;
};

module.exports = ate;
