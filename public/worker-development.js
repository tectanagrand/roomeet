/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./worker/index.js":
/*!*************************!*\
  !*** ./worker/index.js ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nself.addEventListener(\"push\", function(event) {\n    const data = JSON.parse(event.data.text());\n    event.waitUntil(registration.showNotification(data.title, {\n        body: data.message\n    }));\n});\n// listen to message event from window\nself.addEventListener(\"message\", (event)=>{\n    // HOW TO TEST THIS?\n    // Run this in your browser console:\n    //     window.navigator.serviceWorker.controller.postMessage({command: 'log', message: 'hello world'})\n    // OR use next-pwa injected workbox object\n    //     window.workbox.messageSW({command: 'log', message: 'hello world'})\n    console.log(event.data);\n});\nself.addEventListener(\"notificationclick\", function(event) {\n    event.notification.close();\n    event.waitUntil(clients.matchAll({\n        type: \"window\",\n        includeUncontrolled: true\n    }).then(function(clientList) {\n        if (clientList.length > 0) {\n            let client = clientList[0];\n            for(let i = 0; i < clientList.length; i++){\n                if (clientList[i].focused) {\n                    client = clientList[i];\n                }\n            }\n            return client.focus();\n        }\n        return clients.openWindow(\"/\");\n    }));\n}); // self.addEventListener('pushsubscriptionchange', function(event) {\n //   event.waitUntil(\n //       Promise.all([\n //           Promise.resolve(event.oldSubscription ? deleteSubscription(event.oldSubscription) : true),\n //           Promise.resolve(event.newSubscription ? event.newSubscription : subscribePush(registration))\n //               .then(function(sub) { return saveSubscription(sub) })\n //       ])\n //   )\n // })\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                /* unsupported import.meta.webpackHot */ undefined.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93b3JrZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFFYkEsS0FBS0MsZ0JBQWdCLENBQUMsUUFBUSxTQUFVQyxLQUFLO0lBQzNDLE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0gsTUFBTUMsSUFBSSxDQUFDRyxJQUFJO0lBQ3ZDSixNQUFNSyxTQUFTLENBQ2JDLGFBQWFDLGdCQUFnQixDQUFDTixLQUFLTyxLQUFLLEVBQUU7UUFDeENDLE1BQU1SLEtBQUtTLE9BQU87SUFDcEI7QUFFSjtBQUNBLHNDQUFzQztBQUN0Q1osS0FBS0MsZ0JBQWdCLENBQUMsV0FBVyxDQUFDQztJQUNoQyxvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLHNHQUFzRztJQUN0RywwQ0FBMEM7SUFDMUMseUVBQXlFO0lBQ3pFVyxRQUFRQyxHQUFHLENBQUNaLE1BQU1DLElBQUk7QUFDeEI7QUFFQUgsS0FBS0MsZ0JBQWdCLENBQUMscUJBQXFCLFNBQVVDLEtBQUs7SUFDeERBLE1BQU1hLFlBQVksQ0FBQ0MsS0FBSztJQUN4QmQsTUFBTUssU0FBUyxDQUNiVSxRQUNHQyxRQUFRLENBQUM7UUFBRUMsTUFBTTtRQUFVQyxxQkFBcUI7SUFBSyxHQUNyREMsSUFBSSxDQUFDLFNBQVVDLFVBQVU7UUFDeEIsSUFBSUEsV0FBV0MsTUFBTSxHQUFHLEdBQUc7WUFDekIsSUFBSUMsU0FBU0YsVUFBVSxDQUFDLEVBQUU7WUFDMUIsSUFBSyxJQUFJRyxJQUFJLEdBQUdBLElBQUlILFdBQVdDLE1BQU0sRUFBRUUsSUFBSztnQkFDMUMsSUFBSUgsVUFBVSxDQUFDRyxFQUFFLENBQUNDLE9BQU8sRUFBRTtvQkFDekJGLFNBQVNGLFVBQVUsQ0FBQ0csRUFBRTtnQkFDeEI7WUFDRjtZQUNBLE9BQU9ELE9BQU9HLEtBQUs7UUFDckI7UUFDQSxPQUFPVixRQUFRVyxVQUFVLENBQUM7SUFDNUI7QUFFTixJQUVBLG9FQUFvRTtDQUNwRSxxQkFBcUI7Q0FDckIsc0JBQXNCO0NBQ3RCLHVHQUF1RztDQUN2Ryx5R0FBeUc7Q0FDekcsc0VBQXNFO0NBQ3RFLFdBQVc7Q0FDWCxNQUFNO0NBQ04sS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi93b3JrZXIvaW5kZXguanM/ODA1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcInB1c2hcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YS50ZXh0KCkpO1xyXG4gIGV2ZW50LndhaXRVbnRpbChcclxuICAgIHJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKGRhdGEudGl0bGUsIHtcclxuICAgICAgYm9keTogZGF0YS5tZXNzYWdlLFxyXG4gICAgfSlcclxuICApO1xyXG59KTtcclxuLy8gbGlzdGVuIHRvIG1lc3NhZ2UgZXZlbnQgZnJvbSB3aW5kb3dcclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZXZlbnQpID0+IHtcclxuICAvLyBIT1cgVE8gVEVTVCBUSElTP1xyXG4gIC8vIFJ1biB0aGlzIGluIHlvdXIgYnJvd3NlciBjb25zb2xlOlxyXG4gIC8vICAgICB3aW5kb3cubmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlci5wb3N0TWVzc2FnZSh7Y29tbWFuZDogJ2xvZycsIG1lc3NhZ2U6ICdoZWxsbyB3b3JsZCd9KVxyXG4gIC8vIE9SIHVzZSBuZXh0LXB3YSBpbmplY3RlZCB3b3JrYm94IG9iamVjdFxyXG4gIC8vICAgICB3aW5kb3cud29ya2JveC5tZXNzYWdlU1coe2NvbW1hbmQ6ICdsb2cnLCBtZXNzYWdlOiAnaGVsbG8gd29ybGQnfSlcclxuICBjb25zb2xlLmxvZyhldmVudC5kYXRhKTtcclxufSk7XHJcblxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJub3RpZmljYXRpb25jbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBldmVudC5ub3RpZmljYXRpb24uY2xvc2UoKTtcclxuICBldmVudC53YWl0VW50aWwoXHJcbiAgICBjbGllbnRzXHJcbiAgICAgIC5tYXRjaEFsbCh7IHR5cGU6IFwid2luZG93XCIsIGluY2x1ZGVVbmNvbnRyb2xsZWQ6IHRydWUgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGNsaWVudExpc3QpIHtcclxuICAgICAgICBpZiAoY2xpZW50TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBsZXQgY2xpZW50ID0gY2xpZW50TGlzdFswXTtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpZW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY2xpZW50TGlzdFtpXS5mb2N1c2VkKSB7XHJcbiAgICAgICAgICAgICAgY2xpZW50ID0gY2xpZW50TGlzdFtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGNsaWVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xpZW50cy5vcGVuV2luZG93KFwiL1wiKTtcclxuICAgICAgfSlcclxuICApO1xyXG59KTtcclxuXHJcbi8vIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcigncHVzaHN1YnNjcmlwdGlvbmNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbi8vICAgZXZlbnQud2FpdFVudGlsKFxyXG4vLyAgICAgICBQcm9taXNlLmFsbChbXHJcbi8vICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXZlbnQub2xkU3Vic2NyaXB0aW9uID8gZGVsZXRlU3Vic2NyaXB0aW9uKGV2ZW50Lm9sZFN1YnNjcmlwdGlvbikgOiB0cnVlKSxcclxuLy8gICAgICAgICAgIFByb21pc2UucmVzb2x2ZShldmVudC5uZXdTdWJzY3JpcHRpb24gPyBldmVudC5uZXdTdWJzY3JpcHRpb24gOiBzdWJzY3JpYmVQdXNoKHJlZ2lzdHJhdGlvbikpXHJcbi8vICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3ViKSB7IHJldHVybiBzYXZlU3Vic2NyaXB0aW9uKHN1YikgfSlcclxuLy8gICAgICAgXSlcclxuLy8gICApXHJcbi8vIH0pXHJcbiJdLCJuYW1lcyI6WyJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInRleHQiLCJ3YWl0VW50aWwiLCJyZWdpc3RyYXRpb24iLCJzaG93Tm90aWZpY2F0aW9uIiwidGl0bGUiLCJib2R5IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJub3RpZmljYXRpb24iLCJjbG9zZSIsImNsaWVudHMiLCJtYXRjaEFsbCIsInR5cGUiLCJpbmNsdWRlVW5jb250cm9sbGVkIiwidGhlbiIsImNsaWVudExpc3QiLCJsZW5ndGgiLCJjbGllbnQiLCJpIiwiZm9jdXNlZCIsImZvY3VzIiwib3BlbldpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./worker/index.js\n"));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	!function() {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = function() {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: function(script) { return script; }
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	!function() {
/******/ 		__webpack_require__.ts = function(script) { return __webpack_require__.tt().createScript(script); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	!function() {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push(function(options) {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function(moduleObject, moduleExports, webpackRequire) {
/******/ 				var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				var cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : function() {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./worker/index.js");
/******/ 	
/******/ })()
;