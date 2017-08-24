"use strict";var _defineProperty = require("babel-runtime/core-js/object/define-property");var _defineProperty2 = _interopRequireDefault(_defineProperty);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
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

var falzy = require("falzy");
var protype = require("protype");
var wichevr = require("wichevr");
var zelf = require("zelf");

var ate = function ate(property, value, entity) {
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

	if (falzy(property) || !protype(property, NUMBER + STRING)) {
		throw new Error("invalid property");
	}

	entity = wichevr(entity, zelf(this));

	try {
		(0, _defineProperty2.default)(entity, property, {
			"value": value,

			"configurable": false,
			"enumerable": true,
			"writable": true });


	} catch (error) {}

	return entity;
};

module.exports = ate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0ZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsInByb3R5cGUiLCJ3aWNoZXZyIiwiemVsZiIsImF0ZSIsInByb3BlcnR5IiwidmFsdWUiLCJlbnRpdHkiLCJOVU1CRVIiLCJTVFJJTkciLCJFcnJvciIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IndQQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFVBQVVELFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1HLE9BQU9ILFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1JLE1BQU0sU0FBU0EsR0FBVCxDQUFjQyxRQUFkLEVBQXdCQyxLQUF4QixFQUErQkMsTUFBL0IsRUFBdUM7QUFDbEQ7Ozs7Ozs7Ozs7Ozs7QUFhQSxLQUFJUixNQUFPTSxRQUFQLEtBQXFCLENBQUNKLFFBQVNJLFFBQVQsRUFBbUJHLFNBQVNDLE1BQTVCLENBQTFCLEVBQWdFO0FBQy9ELFFBQU0sSUFBSUMsS0FBSixDQUFXLGtCQUFYLENBQU47QUFDQTs7QUFFREgsVUFBU0wsUUFBU0ssTUFBVCxFQUFpQkosS0FBTSxJQUFOLENBQWpCLENBQVQ7O0FBRUEsS0FBRztBQUNGLGdDQUF1QkksTUFBdkIsRUFBK0JGLFFBQS9CLEVBQXlDO0FBQ3hDLFlBQVNDLEtBRCtCOztBQUd4QyxtQkFBZ0IsS0FId0I7QUFJeEMsaUJBQWMsSUFKMEI7QUFLeEMsZUFBWSxJQUw0QixFQUF6Qzs7O0FBUUEsRUFURCxDQVNDLE9BQU9LLEtBQVAsRUFBYyxDQUFHOztBQUVsQixRQUFPSixNQUFQO0FBQ0EsQ0FoQ0Q7O0FBa0NBSyxPQUFPQyxPQUFQLEdBQWlCVCxHQUFqQiIsImZpbGUiOiJhdGUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJhdGVcIixcblx0XHRcdFwicGF0aFwiOiBcImF0ZS9hdGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImF0ZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJhdGVcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVtYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2F0ZS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImF0ZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEZvcmNlIHNldCB2YWx1ZS5cblxuXHRcdFRoZSBwcm9wZXJ0eSBpcyBub24tY29uZmlndXJhYmxlLCBlbnVtZXJhYmxlIGFuZCB3cml0YWJsZS5cblx0XHRUaGlzIHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgdmFsdWUuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCB3aWNoZXZyID0gcmVxdWlyZSggXCJ3aWNoZXZyXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5jb25zdCBhdGUgPSBmdW5jdGlvbiBhdGUoIHByb3BlcnR5LCB2YWx1ZSwgZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XCJzdHJpbmdcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcInZhbHVlOnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcImVudGl0eVwiOiBcIipcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwcm9wZXJ0eVwiICk7XG5cdH1cblxuXHRlbnRpdHkgPSB3aWNoZXZyKCBlbnRpdHksIHplbGYoIHRoaXMgKSApO1xuXG5cdHRyeXtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIGVudGl0eSwgcHJvcGVydHksIHtcblx0XHRcdFwidmFsdWVcIjogdmFsdWUsXG5cblx0XHRcdFwiY29uZmlndXJhYmxlXCI6IGZhbHNlLFxuXHRcdFx0XCJlbnVtZXJhYmxlXCI6IHRydWUsXG5cdFx0XHRcIndyaXRhYmxlXCI6IHRydWVcblx0XHR9ICk7XG5cblx0fWNhdGNoKCBlcnJvciApeyB9XG5cblx0cmV0dXJuIGVudGl0eTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXRlO1xuIl19
//# sourceMappingURL=ate.support.js.map
