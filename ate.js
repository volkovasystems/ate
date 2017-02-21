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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"email": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/ate.git",
			"test": "ate-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Set value.

		If entity is given, the property will be bound to the entity.

		The property is enumerable and writable but not configurable.
		So you can reaasign new values but you cannot change the property descriptor.

		Else, if this module is used in the browser, the entity defaults to the `window`.

		Else, if this module is used in a NodeJS environment, the entity defaults to `global`.

		This will override the value.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"protype": "protype",
			"zelf": "zelf"
		}
	@end-include
*/

const falzy = require( "falzy" );
const protype = require( "protype" );
const zelf = require( "zelf" );

const ate = function ate( property, value, entity ){
	/*;
		@meta-configuration:
			{
				"property:required": "string",
				"value:required": "*",
				"entity:optional": "object"
			}
		@end-meta-configuration
	*/

	if( falzy( property ) || !protype( property, STRING ) ){
		throw new Error( "invalid property" );
	}

	entity = entity || zelf( this );

	try{
		Object.defineProperty( entity, property, {
			"value": value,
			"writable": true,
			"enumerable": true
		} );
	}catch( error ){ }

	return entity;
};

module.exports = ate;
