"use strict";

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			"repository": "https://github.com/volkovasystems/ate.git",
			"test": "ate-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Set value.

		If entity is given, the property will be bound to the entity.

		Else, if this module is used in the browser, the entity defaults to the @code:window;.

		Else, if this module is used in a NodeJS environment, the entity defaults to @code:global;.

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

var falzy = require("falzy");
var protype = require("protype");
var zelf = require("zelf");

var ate = function ate(property, value, entity) {
	/*;
 	@meta-configuration:
 		{
 			"property:required": "string",
 			"value:required": "*",
 			"entity:optional": "object"
 		}
 	@end-meta-configuration
 */

	if (falzy(property) || !protype(property, STRING)) {
		throw new Error("invalid property");
	}

	entity = entity || zelf(this);

	try {
		(0, _defineProperty2.default)(entity, property, { "value": value, "writable": true });
	} catch (error) {}

	return entity;
};

module.exports = ate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0ZS5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJwcm90eXBlIiwiemVsZiIsImF0ZSIsInByb3BlcnR5IiwidmFsdWUiLCJlbnRpdHkiLCJTVFJJTkciLCJFcnJvciIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNRSxPQUFPRixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNRyxNQUFNLFNBQVNBLEdBQVQsQ0FBY0MsUUFBZCxFQUF3QkMsS0FBeEIsRUFBK0JDLE1BQS9CLEVBQXVDO0FBQ2xEOzs7Ozs7Ozs7O0FBVUEsS0FBSVAsTUFBT0ssUUFBUCxLQUFxQixDQUFDSCxRQUFTRyxRQUFULEVBQW1CRyxNQUFuQixDQUExQixFQUF1RDtBQUN0RCxRQUFNLElBQUlDLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRURGLFVBQVNBLFVBQVVKLEtBQU0sSUFBTixDQUFuQjs7QUFFQSxLQUFHO0FBQ0YsZ0NBQXVCSSxNQUF2QixFQUErQkYsUUFBL0IsRUFBeUMsRUFBRSxTQUFTQyxLQUFYLEVBQWtCLFlBQVksSUFBOUIsRUFBekM7QUFDQSxFQUZELENBRUMsT0FBT0ksS0FBUCxFQUFjLENBQUc7O0FBRWxCLFFBQU9ILE1BQVA7QUFDQSxDQXRCRDs7QUF3QkFJLE9BQU9DLE9BQVAsR0FBaUJSLEdBQWpCIiwiZmlsZSI6ImF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJhdGVcIixcblx0XHRcdFwicGF0aFwiOiBcImF0ZS9hdGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImF0ZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJhdGVcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVtYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2F0ZS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImF0ZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFNldCB2YWx1ZS5cblxuXHRcdElmIGVudGl0eSBpcyBnaXZlbiwgdGhlIHByb3BlcnR5IHdpbGwgYmUgYm91bmQgdG8gdGhlIGVudGl0eS5cblxuXHRcdEVsc2UsIGlmIHRoaXMgbW9kdWxlIGlzIHVzZWQgaW4gdGhlIGJyb3dzZXIsIHRoZSBlbnRpdHkgZGVmYXVsdHMgdG8gdGhlIEBjb2RlOndpbmRvdzsuXG5cblx0XHRFbHNlLCBpZiB0aGlzIG1vZHVsZSBpcyB1c2VkIGluIGEgTm9kZUpTIGVudmlyb25tZW50LCB0aGUgZW50aXR5IGRlZmF1bHRzIHRvIEBjb2RlOmdsb2JhbDsuXG5cblx0XHRUaGlzIHdpbGwgb3ZlcnJpZGUgdGhlIHZhbHVlLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmNvbnN0IGF0ZSA9IGZ1bmN0aW9uIGF0ZSggcHJvcGVydHksIHZhbHVlLCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInZhbHVlOnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcImVudGl0eTpvcHRpb25hbFwiOiBcIm9iamVjdFwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsenkoIHByb3BlcnR5ICkgfHwgIXByb3R5cGUoIHByb3BlcnR5LCBTVFJJTkcgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0fVxuXG5cdGVudGl0eSA9IGVudGl0eSB8fCB6ZWxmKCB0aGlzICk7XG5cblx0dHJ5e1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggZW50aXR5LCBwcm9wZXJ0eSwgeyBcInZhbHVlXCI6IHZhbHVlLCBcIndyaXRhYmxlXCI6IHRydWUgfSApO1xuXHR9Y2F0Y2goIGVycm9yICl7IH1cblxuXHRyZXR1cm4gZW50aXR5O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhdGU7XG4iXX0=
