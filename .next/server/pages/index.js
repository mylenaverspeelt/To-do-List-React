/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles.css */ \"./public/styles.css\");\n/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/home/mylena/Documents/To-do-List-React/pages/_app.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QjtBQUVkLFFBQVEsQ0FBQ0EsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkQsTUFBTSw2RUFBRUQsU0FBUztXQUFLQyxTQUFTOzs7Ozs7QUFDakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1RvLWRvLUxpc3QtUmVhY3QvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9wdWJsaWMvc3R5bGVzLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG59Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/components/App.jsx":
/*!**********************************!*\
  !*** ./pages/components/App.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction App() {\n    const { 0: input , 1: setInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: lista , 1: setLista  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function inputUsuario(event) {\n        setInput(event.target.value);\n    }\n    function addLista() {\n        setLista((prevItens)=>{\n            return [\n                ...prevItens,\n                input\n            ];\n        });\n        setInput(\"\");\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"heading\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"To-Do List\"\n                }, void 0, false, {\n                    fileName: \"/home/mylena/Documents/To-do-List-React/pages/components/App.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/mylena/Documents/To-do-List-React/pages/components/App.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: inputUsuario,\n                        value: input,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/home/mylena/Documents/To-do-List-React/pages/components/App.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: addLista,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/home/mylena/Documents/To-do-List-React/pages/components/App.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/mylena/Documents/To-do-List-React/pages/components/App.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mylena/Documents/To-do-List-React/pages/components/App.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: lista.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: item\n                        }, void 0, false, {\n                            fileName: \"/home/mylena/Documents/To-do-List-React/pages/components/App.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    )\n                }, void 0, false, {\n                    fileName: \"/home/mylena/Documents/To-do-List-React/pages/components/App.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/mylena/Documents/To-do-List-React/pages/components/App.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mylena/Documents/To-do-List-React/pages/components/App.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVDO1NBRTlCRSxHQUFHLEdBQUcsQ0FBQztJQUNkLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlILCtDQUFRLENBQUMsQ0FBRTtJQUNyQyxLQUFLLE1BQUVJLEtBQUssTUFBRUMsUUFBUSxNQUFJTCwrQ0FBUSxDQUFDLENBQUMsQ0FBQzthQUU1Qk0sWUFBWSxDQUFDQyxLQUFLLEVBQUUsQ0FBQztRQUM1QkosUUFBUSxDQUFDSSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QixDQUFDO2FBRVFDLFFBQVEsR0FBRyxDQUFDO1FBQ25CTCxRQUFRLEVBQUVNLFNBQVMsR0FBSyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxDQUFDO21CQUFHQSxTQUFTO2dCQUFFVCxLQUFLO1lBQUEsQ0FBQztRQUM5QixDQUFDO1FBQ0RDLFFBQVEsQ0FBQyxDQUFFO0lBQ2IsQ0FBQztJQUNELE1BQU0sNkVBQ0hTLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVc7O3dGQUN2QkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVM7c0dBQ3JCQyxDQUFFOzhCQUFDLENBQVU7Ozs7Ozs7Ozs7O3dGQUVmRixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTTs7Z0dBQ2xCWCxDQUFLO3dCQUFDYSxRQUFRLEVBQUVULFlBQVk7d0JBQUVHLEtBQUssRUFBRVAsS0FBSzt3QkFBRWMsSUFBSSxFQUFDLENBQU07Ozs7OztnR0FDdkRDLENBQU07d0JBQUNDLE9BQU8sRUFBRVIsUUFBUTs4R0FDdEJTLENBQUk7c0NBQUMsQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR1pQLENBQUc7c0dBQ0RRLENBQUU7OEJBQ0FoQixLQUFLLENBQUNpQixHQUFHLEVBQUVDLElBQUksK0VBQ2JDLENBQUU7c0NBQUVELElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJCLENBQUM7QUFFRCxpRUFBZXJCLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1RvLWRvLUxpc3QtUmVhY3QvLi9wYWdlcy9jb21wb25lbnRzL0FwcC5qc3g/YmQ4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGlzdGEsIHNldExpc3RhXSA9IHVzZVN0YXRlKFtdKTtcblxuICBmdW5jdGlvbiBpbnB1dFVzdWFyaW8oZXZlbnQpIHtcbiAgICBzZXRJbnB1dChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdGEoKSB7XG4gICAgc2V0TGlzdGEoKHByZXZJdGVucykgPT4ge1xuICAgICAgcmV0dXJuIFsuLi5wcmV2SXRlbnMsIGlucHV0XTtcbiAgICB9KTtcbiAgICBzZXRJbnB1dChcIlwiKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmdcIj5cbiAgICAgICAgPGgxPlRvLURvIExpc3Q8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtpbnB1dFVzdWFyaW99IHZhbHVlPXtpbnB1dH0gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZExpc3RhfT5cbiAgICAgICAgICA8c3Bhbj5BZGQ8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAge2xpc3RhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGxpPntpdGVtfTwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBcHAiLCJpbnB1dCIsInNldElucHV0IiwibGlzdGEiLCJzZXRMaXN0YSIsImlucHV0VXN1YXJpbyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJhZGRMaXN0YSIsInByZXZJdGVucyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwib25DaGFuZ2UiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/App.jsx\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/components/App */ \"./pages/components/App.jsx\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_app */ \"./pages/_app.js\");\n\n\n\n\n\nfunction HomePage() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_components_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/mylena/Documents/To-do-List-React/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 30\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ087QUFDUztBQUNmO1NBR2pCSSxRQUFRLEdBQUcsQ0FBQztJQUFDLE1BQU0sNkVBQUVGLDZEQUFHOzs7OztBQUFJLENBQUM7QUFBRSxpRUFBZUUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL1RvLWRvLUxpc3QtUmVhY3QvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi9wYWdlcy9jb21wb25lbnRzL0FwcFwiO1xuaW1wb3J0IE15QXBwIGZyb20gXCIuL19hcHBcIjtcblxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHsgcmV0dXJuIDxBcHAgLz4gfSAgZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQXBwIiwiTXlBcHAiLCJIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./public/styles.css":
/*!***************************!*\
  !*** ./public/styles.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();