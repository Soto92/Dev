/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/ilegra/ProjetosFrontEnd/JSCURSO/main.js: Identifier 'arr' has already been declared (76:6)\\n\\n\\u001b[0m \\u001b[90m 74 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 75 | \\u001b[39m\\u001b[90m//arrow functions\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 76 | \\u001b[39m\\u001b[36mconst\\u001b[39m arr\\u001b[33m=\\u001b[39m [\\u001b[35m1\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[35m3\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[35m4\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[35m5\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[35m6\\u001b[39m]\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 77 | \\u001b[39m\\u001b[36mconst\\u001b[39m newArr \\u001b[33m=\\u001b[39m arr\\u001b[33m.\\u001b[39mmap((item)\\u001b[33m=>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 78 | \\u001b[39m     item \\u001b[33m*\\u001b[39m\\u001b[35m2\\u001b[39m \\u001b[90m//antigo return\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 79 | \\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser.raise (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/parser/lib/index.js:6344:17)\\n    at ScopeHandler.checkRedeclarationInScope (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/parser/lib/index.js:3757:12)\\n    at ScopeHandler.declareName (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/parser/lib/index.js:3723:12)\\n    at Parser.checkLVal (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/parser/lib/index.js:8034:22)\\n    at Parser.parseVarId (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/parser/lib/index.js:10465:10)\\n    at Parser.parseVar (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/parser/lib/index.js:10436:12)\\n    at Parser.parseVarStatement (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/parser/lib/index.js:10258:10)\\n    at Parser.parseStatementContent (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/parser/lib/index.js:9855:21)\\n    at Parser.parseStatement (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/parser/lib/index.js:9788:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/parser/lib/index.js:10364:25)\\n    at Parser.parseBlockBody (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/parser/lib/index.js:10351:10)\\n    at Parser.parseTopLevel (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/parser/lib/index.js:9717:10)\\n    at Parser.parse (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/parser/lib/index.js:11233:17)\\n    at parse (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/parser/lib/index.js:11269:38)\\n    at parser (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at transformSync (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/core/lib/transform.js:43:38)\\n    at Object.transform (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/@babel/core/lib/transform.js:22:38)\\n    at transpile (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/babel-loader/lib/index.js:55:20)\\n    at Object.module.exports (/home/ilegra/ProjetosFrontEnd/JSCURSO/node_modules/babel-loader/lib/index.js:179:20)\");\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });