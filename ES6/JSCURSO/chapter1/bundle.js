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

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.somaExt = somaExt;\nexports.multiExt = multiExt;\nexports.divExt = divExt;\n\nfunction somaExt(a, b) {\n  return parseFloat(a) + parseFloat(b);\n}\n\nfunction multiExt(a, b) {\n  return a * b;\n}\n\nfunction divExt(a, b) {\n  return a / b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _funcoes = __webpack_require__(/*! ./funcoes.js */ \"./funcoes.js\");\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//Introdução ao ES6. Exemplo: imprimindo numa lista \"Novo todo\" as vezes em q o botão foi clikado:\nvar List =\n/*#__PURE__*/\nfunction () {\n  function List() {\n    _classCallCheck(this, List);\n\n    this.data = [];\n  }\n\n  _createClass(List, [{\n    key: \"add\",\n    value: function add(data) {\n      this.data.push(data);\n      console.log(data);\n    }\n  }]);\n\n  return List;\n}();\n\nvar TodoLista =\n/*#__PURE__*/\nfunction (_List) {\n  _inherits(TodoLista, _List);\n\n  function TodoLista() {\n    var _this;\n\n    _classCallCheck(this, TodoLista);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoLista).call(this)); //chamar constructor pai\n\n    _this.usuario = 'Mauricio';\n    return _this;\n  }\n\n  _createClass(TodoLista, [{\n    key: \"mostraUsuario\",\n    value: function mostraUsuario() {\n      console.log(\"user01:\", this.usuario);\n    }\n  }]);\n\n  return TodoLista;\n}(List);\n\nvar MinhaLista = new TodoLista();\nvar i = 0;\n\ndocument.getElementById('novotodo').onclick = function () {\n  i++;\n  MinhaLista.add(i);\n};\n\nMinhaLista.mostraUsuario(); //Exemplo estático:\n\nvar Matematica =\n/*#__PURE__*/\nfunction () {\n  function Matematica() {\n    _classCallCheck(this, Matematica);\n  }\n\n  _createClass(Matematica, null, [{\n    key: \"soma\",\n    //statico, não depende dos outros!\n    value: function soma(a, b) {\n      return a + b;\n    }\n  }]);\n\n  return Matematica;\n}();\n\nconsole.log(\"soma88+112:\", Matematica.soma(88, 112)); //Exemplo de mutação dentro da const\n\nvar user = {\n  nome: 'Mauricio'\n};\nuser.nome = 'Soto';\nconsole.log(user); //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\n\nfunction teste(x) {\n  var y = 2;\n\n  if (x > 5) {\n    console.log(x, y);\n  }\n}\n\nteste(10); //Exemplo- vetores\n\nvar arr1 = [1, 3, 4, 5, 8, 9];\nvar newArr2 = arr1.map(function (item) {\n  return item * 2;\n});\n\nfor (var j = 0; arr1[j]; j++) {\n  arr1[j] = arr1[j] * 2;\n}\n\nconsole.log(\"vector x 2\", arr1);\nconsole.log(newArr2);\nvar sum = arr1.reduce(function (total, next) {\n  return total + next;\n});\nconsole.log(sum);\nvar filter = arr1.filter(function (item) {\n  return item % 2 === 0;\n});\nconsole.log(filter);\nvar find = arr1.find(function (item) {\n  return item === 4;\n});\nconsole.log(find); //arrow functions\n\nvar vet = [1, 3, 4, 5, 6];\nvar newvet = vet.map(function (item) {\n  return item * 2;\n} //antigo return\n);\nconsole.log(newvet); //imprime valores vetor x 2\n//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\n// const teste = () => ({nome: 'Mauricio'});\n// console.log(teste()); imprime (nome: Mauricio)\n//valores padrão\n\nfunction soma1() {\n  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;\n  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;\n  // antigo\n  return a + b;\n} //novo com arrow function:\n\n\nvar soma2 = function soma2() {\n  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;\n  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;\n  return a + b;\n};\n\nconsole.log(soma1());\nconsole.log(soma2()); //Exemplos desestruturação\n\nvar usuario = {\n  nome: 'Mauricio',\n  idade: 26,\n  endereco: {\n    cidade: 'Grv',\n    estado: 'RS'\n  }\n};\nconsole.log(usuario);\nvar nome = usuario.nome,\n    idade = usuario.idade,\n    cidade = usuario.endereco.cidade;\nconsole.log(nome);\nconsole.log(idade);\nconsole.log(cidade); //ou\n\nfunction mostraNome(_ref) {\n  var nome = _ref.nome,\n      idade = _ref.idade;\n  console.log(nome, idade);\n}\n\nmostraNome(usuario); // operadores rest/spread\n\nvar pessoa = {\n  name: 'Mauricio',\n  idade: 26,\n  empresa: 'Masperiano'\n};\n\nvar name = pessoa.name,\n    resto = _objectWithoutProperties(pessoa, [\"name\"]); //resto guarda os outros dados\n\n\nconsole.log(name);\nconsole.log(resto);\nvar array0 = [1, 2, 3, 4];\nvar a = array0[0],\n    b = array0[1],\n    c = array0.slice(2);\nconsole.log('a=', a);\nconsole.log('b=', b);\nconsole.log('c=', c); // exemplo desomatorios em ES6:\n\nfunction somaAnt(a, b, c) {\n  return a + b + c;\n}\n\nconsole.log(somaAnt(1, 2, 4));\n\nfunction somaNew() {\n  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {\n    params[_key] = arguments[_key];\n  }\n\n  return params.reduce(function (total, next) {\n    return total + next;\n  });\n}\n\nconsole.log(somaNew(1, 3, 4));\n\nfunction somaNew2(a, b, c) {\n  for (var _len2 = arguments.length, resto = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {\n    resto[_key2 - 3] = arguments[_key2];\n  }\n\n  return resto;\n}\n\nconsole.log(somaNew2(1, 3, 4, 5, 5, 5, 5, 5)); //Exemplo Concatenando vetores com spread:\n\nvar array1 = [1, 2, 3];\nvar array2 = [4, 5, 6];\nvar array3 = [].concat(array1, array2);\nconsole.log(array3);\nvar user1 = {\n  nome: 'Mauricio Soto',\n  idade: 26,\n  pais: 'Brasil'\n};\n\nvar user2 = _objectSpread({}, user1, {\n  nome: 'Lionel'\n});\n\nconsole.log(user2); //aula9 - template literals\n\nvar nomeUser = \"Mauricio\";\nvar idadeUser = 26;\nconsole.log('meu nome é ' + nomeUser + ' e tenho ' + idadeUser + ' anos');\nconsole.log(\"Meu nome \\xE9 \".concat(nomeUser, \" e tenho \").concat(idadeUser, \" anos\")); //aula10 = object short syntax\n\nvar nomeX = 'Mauricio';\nvar idadeX = 26;\nvar userX = {\n  nomeX: nomeX,\n  idadeX: idadeX,\n  empresa: 'ultron'\n};\nconsole.log(userX); // //aula 11 configure webpack, instalei as dependencias já via linha de comando.\n\nvar form = document.getElementById('inputs');\nvar n1 = document.getElementById('num1');\nvar n2 = document.getElementById('num2');\nvar operation = [\"soma\", \"multi\", \"div\", \"lixo\", \"derivada\"];\nvar number1, number2;\nform.addEventListener('submit', function (e) {\n  number1 = n1.value;\n  number2 = n2.value;\n  operation.forEach(myFunction); //chama a função das operações do array apos click\n  // impede o envio do form\n\n  e.preventDefault();\n});\n\nfunction myFunction(item) {\n  if (item === \"soma\") {\n    console.log((0, _funcoes.somaExt)(number1, number2));\n  } else if (item === \"multi\") {\n    console.log((0, _funcoes.multiExt)(number1, number2));\n  } else if (item === \"div\") {\n    console.log((0, _funcoes.divExt)(number1, number2));\n  } else {\n    Error.prototype.message = \"\".concat(item, \" \\\"valor de operacao invalido\\\"\");\n    console.log(Error.prototype.message);\n  }\n}\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });