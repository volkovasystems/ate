"use strict";

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
		(0, _defineProperty2.default)(entity, property, { "value": value });
	} catch (error) {}

	return entity;
};

module.exports = ate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0ZS5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJwcm90eXBlIiwiemVsZiIsImF0ZSIsInByb3BlcnR5IiwidmFsdWUiLCJlbnRpdHkiLCJTVFJJTkciLCJFcnJvciIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNRSxPQUFPRixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNRyxNQUFNLFNBQVNBLEdBQVQsQ0FBY0MsUUFBZCxFQUF3QkMsS0FBeEIsRUFBK0JDLE1BQS9CLEVBQXVDO0FBQ2xEOzs7Ozs7Ozs7O0FBVUEsS0FBSVAsTUFBT0ssUUFBUCxLQUFxQixDQUFDSCxRQUFTRyxRQUFULEVBQW1CRyxNQUFuQixDQUExQixFQUF1RDtBQUN0RCxRQUFNLElBQUlDLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRURGLFVBQVNBLFVBQVVKLEtBQU0sSUFBTixDQUFuQjs7QUFFQSxLQUFHO0FBQ0YsZ0NBQXVCSSxNQUF2QixFQUErQkYsUUFBL0IsRUFBeUMsRUFBRSxTQUFTQyxLQUFYLEVBQXpDO0FBQ0EsRUFGRCxDQUVDLE9BQU9JLEtBQVAsRUFBYyxDQUFHOztBQUVsQixRQUFPSCxNQUFQO0FBQ0EsQ0F0QkQ7O0FBd0JBSSxPQUFPQyxPQUFQLEdBQWlCUixHQUFqQiIsImZpbGUiOiJhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNiBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYXRlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJhdGUvYXRlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJhdGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiYXRlXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlbWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9hdGUuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJhdGUtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRTZXQgdmFsdWUuXG5cblx0XHRJZiBlbnRpdHkgaXMgZ2l2ZW4sIHRoZSBwcm9wZXJ0eSB3aWxsIGJlIGJvdW5kIHRvIHRoZSBlbnRpdHkuXG5cblx0XHRFbHNlLCBpZiB0aGlzIG1vZHVsZSBpcyB1c2VkIGluIHRoZSBicm93c2VyLCB0aGUgZW50aXR5IGRlZmF1bHRzIHRvIHRoZSBAY29kZTp3aW5kb3c7LlxuXG5cdFx0RWxzZSwgaWYgdGhpcyBtb2R1bGUgaXMgdXNlZCBpbiBhIE5vZGVKUyBlbnZpcm9ubWVudCwgdGhlIGVudGl0eSBkZWZhdWx0cyB0byBAY29kZTpnbG9iYWw7LlxuXG5cdFx0VGhpcyB3aWxsIG92ZXJyaWRlIHRoZSB2YWx1ZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5jb25zdCBhdGUgPSBmdW5jdGlvbiBhdGUoIHByb3BlcnR5LCB2YWx1ZSwgZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJ2YWx1ZTpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XCJlbnRpdHk6b3B0aW9uYWxcIjogXCJvYmplY3RcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgU1RSSU5HICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwcm9wZXJ0eVwiICk7XG5cdH1cblxuXHRlbnRpdHkgPSBlbnRpdHkgfHwgemVsZiggdGhpcyApO1xuXG5cdHRyeXtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIGVudGl0eSwgcHJvcGVydHksIHsgXCJ2YWx1ZVwiOiB2YWx1ZSB9ICk7XG5cdH1jYXRjaCggZXJyb3IgKXsgfVxuXG5cdHJldHVybiBlbnRpdHk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF0ZTtcbiJdfQ==
