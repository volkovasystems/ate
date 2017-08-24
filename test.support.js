"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "ate",
              			"path": "ate/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/ate.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"ate": "ate"
              		}
              	@end-include
              */var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var ate = require("./ate.support.js");
//: @end-client





//: @client:

describe("ate", function () {

	describe("`Property descriptor value`", function () {
		it("should be equal to 123", function () {

			var test = {};
			ate("sample", 123, test);

			var descriptor = (0, _getOwnPropertyDescriptor2.default)(test, "sample");
			assert.equal(descriptor.value, 123);

		});
	});


	describe("`Property descriptor writable`", function () {
		it("should be equal to true", function () {

			var test = {};
			ate("sample", 123, test);

			var descriptor = (0, _getOwnPropertyDescriptor2.default)(test, "sample");
			assert.equal(descriptor.writable, true);

		});
	});


	describe("`Property descriptor enumerable`", function () {
		it("should be equal to true", function () {

			var test = {};
			ate("sample", 123, test);

			var descriptor = (0, _getOwnPropertyDescriptor2.default)(test, "sample");
			assert.equal(descriptor.enumerable, true);

		});
	});


	describe("`Property descriptor configurable`", function () {
		it("should be equal to false", function () {

			var test = {};
			ate("sample", 123, test);

			var descriptor = (0, _getOwnPropertyDescriptor2.default)(test, "sample");
			assert.equal(descriptor.configurable, false);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiYXRlIiwiZGVzY3JpYmUiLCJpdCIsInRlc3QiLCJkZXNjcmlwdG9yIiwiZXF1YWwiLCJ2YWx1ZSIsIndyaXRhYmxlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE1BQU1ELFFBQVMsa0JBQVQsQ0FBWjtBQUNBOzs7Ozs7QUFNQTs7QUFFQUUsU0FBVSxLQUFWLEVBQWlCLFlBQU87O0FBRXZCQSxVQUFVLDZCQUFWLEVBQXlDLFlBQU87QUFDL0NDLEtBQUksd0JBQUosRUFBOEIsWUFBTzs7QUFFcEMsT0FBSUMsT0FBTyxFQUFYO0FBQ0FILE9BQUssUUFBTCxFQUFlLEdBQWYsRUFBb0JHLElBQXBCOztBQUVBLE9BQUlDLGFBQWEsd0NBQWlDRCxJQUFqQyxFQUF1QyxRQUF2QyxDQUFqQjtBQUNBTCxVQUFPTyxLQUFQLENBQWNELFdBQVdFLEtBQXpCLEVBQWdDLEdBQWhDOztBQUVBLEdBUkQ7QUFTQSxFQVZEOzs7QUFhQUwsVUFBVSxnQ0FBVixFQUE0QyxZQUFPO0FBQ2xEQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDLE9BQUlDLE9BQU8sRUFBWDtBQUNBSCxPQUFLLFFBQUwsRUFBZSxHQUFmLEVBQW9CRyxJQUFwQjs7QUFFQSxPQUFJQyxhQUFhLHdDQUFpQ0QsSUFBakMsRUFBdUMsUUFBdkMsQ0FBakI7QUFDQUwsVUFBT08sS0FBUCxDQUFjRCxXQUFXRyxRQUF6QixFQUFtQyxJQUFuQzs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7O0FBYUFOLFVBQVUsa0NBQVYsRUFBOEMsWUFBTztBQUNwREMsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxPQUFPLEVBQVg7QUFDQUgsT0FBSyxRQUFMLEVBQWUsR0FBZixFQUFvQkcsSUFBcEI7O0FBRUEsT0FBSUMsYUFBYSx3Q0FBaUNELElBQWpDLEVBQXVDLFFBQXZDLENBQWpCO0FBQ0FMLFVBQU9PLEtBQVAsQ0FBY0QsV0FBV0ksVUFBekIsRUFBcUMsSUFBckM7O0FBRUEsR0FSRDtBQVNBLEVBVkQ7OztBQWFBUCxVQUFVLG9DQUFWLEVBQWdELFlBQU87QUFDdERDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdEMsT0FBSUMsT0FBTyxFQUFYO0FBQ0FILE9BQUssUUFBTCxFQUFlLEdBQWYsRUFBb0JHLElBQXBCOztBQUVBLE9BQUlDLGFBQWEsd0NBQWlDRCxJQUFqQyxFQUF1QyxRQUF2QyxDQUFqQjtBQUNBTCxVQUFPTyxLQUFQLENBQWNELFdBQVdLLFlBQXpCLEVBQXVDLEtBQXZDOztBQUVBLEdBUkQ7QUFTQSxFQVZEOztBQVlBLENBckREOztBQXVEQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImF0ZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiYXRlL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9hdGUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImF0ZVwiOiBcImF0ZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgYXRlID0gcmVxdWlyZSggXCIuL2F0ZS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJhdGVcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgUHJvcGVydHkgZGVzY3JpcHRvciB2YWx1ZWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gMTIzXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0geyB9O1xuXHRcdFx0YXRlKCBcInNhbXBsZVwiLCAxMjMsIHRlc3QgKTtcblxuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0ZXN0LCBcInNhbXBsZVwiICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IudmFsdWUsIDEyMyApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgUHJvcGVydHkgZGVzY3JpcHRvciB3cml0YWJsZWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgdGVzdCA9IHsgfTtcblx0XHRcdGF0ZSggXCJzYW1wbGVcIiwgMTIzLCB0ZXN0ICk7XG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGVzdCwgXCJzYW1wbGVcIiApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXNjcmlwdG9yLndyaXRhYmxlLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBQcm9wZXJ0eSBkZXNjcmlwdG9yIGVudW1lcmFibGVgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHRlc3QgPSB7IH07XG5cdFx0XHRhdGUoIFwic2FtcGxlXCIsIDEyMywgdGVzdCApO1xuXG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRlc3QsIFwic2FtcGxlXCIgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5lbnVtZXJhYmxlLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBQcm9wZXJ0eSBkZXNjcmlwdG9yIGNvbmZpZ3VyYWJsZWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHRlc3QgPSB7IH07XG5cdFx0XHRhdGUoIFwic2FtcGxlXCIsIDEyMywgdGVzdCApO1xuXG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRlc3QsIFwic2FtcGxlXCIgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5jb25maWd1cmFibGUsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
