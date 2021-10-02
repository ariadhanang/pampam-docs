/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
var Controller = /** @class */ (function () {
    function Controller() {
    }
    return Controller;
}());



/***/ }),

/***/ "./src/module.ts":
/*!***********************!*\
  !*** ./src/module.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Module": () => (/* binding */ Module)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router.ts");

var Module = /** @class */ (function () {
    function Module(name, routes) {
        this.name = name;
        this.router = new _router__WEBPACK_IMPORTED_MODULE_0__.Router(this, routes);
    }
    return Module;
}());



/***/ }),

/***/ "./src/route.ts":
/*!**********************!*\
  !*** ./src/route.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var Route = /** @class */ (function () {
    function Route(router, id, config) {
        this.router = router;
        this.id = id;
        this.path = config.path;
        this.templateUrl = config.templateUrl;
        this.controller = config.controller ? new config.controller() : new _controller__WEBPACK_IMPORTED_MODULE_0__.Controller();
        this.templateString = config.templateString ? config.templateString : "";
        this.childrenIds = [];
        this.parentId = config.parentId ? config.parentId : undefined;
    }
    Route.getTemplate = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchTemplate, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        fetchTemplate = _a.sent();
                        if (!fetchTemplate.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, fetchTemplate.text()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: throw Error();
                    case 4:
                        error_1 = _a.sent();
                        return [2 /*return*/, "Template file \"" + url + "\" not found."];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Route.build = function (router, id, config) {
        return __awaiter(this, void 0, void 0, function () {
            var templateString, newroute;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Route.getTemplate(config.templateUrl)];
                    case 1:
                        templateString = _a.sent();
                        newroute = new Route(router, id, __assign(__assign({}, config), { templateString: templateString }));
                        router.routes.push(newroute);
                        return [2 /*return*/, newroute];
                }
            });
        });
    };
    Object.defineProperty(Route.prototype, "hasParent", {
        get: function () {
            return this.parentId ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route.prototype, "parent", {
        get: function () {
            return this.router.findRouteById(this.parentId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route.prototype, "stack", {
        get: function () {
            if (this.hasParent)
                return __spreadArray(__spreadArray([], this.parent.stack, true), [this], false);
            return [this];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route.prototype, "template", {
        get: function () {
            if (!this.virtualdom) {
                this.virtualdom = document.createElement("div");
                this.virtualdom.innerHTML = this.templateString;
            }
            return this.virtualdom.innerHTML;
        },
        enumerable: false,
        configurable: true
    });
    return Route;
}());



/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route */ "./src/route.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var Router = /** @class */ (function () {
    function Router(module, routes) {
        var _this = this;
        this.module = module;
        this.routes = [];
        this.buildRoutes(routes, function () {
            _this.init();
        });
    }
    Router.prototype.buildRoutes = function (routes, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, routes_1, route, newroute, _a, _b, child, childroute;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _i = 0, routes_1 = routes;
                        _c.label = 1;
                    case 1:
                        if (!(_i < routes_1.length)) return [3 /*break*/, 7];
                        route = routes_1[_i];
                        return [4 /*yield*/, _route__WEBPACK_IMPORTED_MODULE_0__.Route.build(this, this.routes.length, route)];
                    case 2:
                        newroute = _c.sent();
                        if (!route.children) return [3 /*break*/, 6];
                        _a = 0, _b = route.children;
                        _c.label = 3;
                    case 3:
                        if (!(_a < _b.length)) return [3 /*break*/, 6];
                        child = _b[_a];
                        return [4 /*yield*/, _route__WEBPACK_IMPORTED_MODULE_0__.Route.build(this, this.routes.length, __assign(__assign({}, child), { parentId: newroute.id }))];
                    case 4:
                        childroute = _c.sent();
                        newroute.childrenIds.push(childroute.id);
                        _c.label = 5;
                    case 5:
                        _a++;
                        return [3 /*break*/, 3];
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7:
                        console.log(this.routes);
                        callback();
                        return [2 /*return*/];
                }
            });
        });
    };
    Router.prototype.findRoute = function (path) {
        return this.routes.find(function (route) { return route.path === path; });
    };
    Router.prototype.findRouteById = function (id) {
        return this.routes[id];
    };
    Router.prototype.navigate = function (path) {
        var route = this.findRoute(path);
        if (route) {
            if (window.location.pathname !== path)
                window.history.pushState({}, "", path);
            this.renderView(route);
            this.currentRoute = route;
        }
        else {
            if (this.findRoute("/404")) {
                this.navigate('/404');
            }
            else {
                document.body.innerHTML = "404 not found.";
            }
        }
    };
    Router.prototype.init = function () {
        this.navigate(window.location.pathname);
    };
    Router.prototype.renderView = function (route) {
        if (!route.hasParent) {
            var root = document.getElementById("root");
            root.innerHTML = route.template;
        }
        console.log(route.stack);
    };
    return Router;
}());



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
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./src/module.ts");

// @ts-ignore
window.Q = _module__WEBPACK_IMPORTED_MODULE_0__.Module;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEdBQUcsZ0JBQWdCLENBQUM7YUFDM0M7U0FDRDtJQUNGLENBQUM7SUFFRCxxQkFBSSxHQUFKO1FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwyQkFBVSxHQUFWLFVBQVcsS0FBWTtRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUNyQixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUNoQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRixhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7VUNuRUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05rQztBQUVsQyxhQUFhO0FBQ2IsTUFBTSxDQUFDLENBQUMsR0FBRywyQ0FBTSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFtcGFtLy4vc3JjL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcGFtcGFtLy4vc3JjL21vZHVsZS50cyIsIndlYnBhY2s6Ly9wYW1wYW0vLi9zcmMvcm91dGUudHMiLCJ3ZWJwYWNrOi8vcGFtcGFtLy4vc3JjL3JvdXRlci50cyIsIndlYnBhY2s6Ly9wYW1wYW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFtcGFtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wYW1wYW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYW1wYW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wYW1wYW0vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIgeyB9IiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4vcm91dGVyXCI7XG5pbXBvcnQgeyBJUm91dGUgfSBmcm9tIFwiLi9yb3V0ZVwiO1xuXG5leHBvcnQgY2xhc3MgTW9kdWxlIHtcblx0bmFtZTogc3RyaW5nO1xuXHRyb3V0ZXI6IFJvdXRlcjtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHJvdXRlczogSVJvdXRlW10pIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucm91dGVyID0gbmV3IFJvdXRlcih0aGlzLCByb3V0ZXMpO1xuXHR9XG59IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuL3JvdXRlclwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGUge1xuXHRpZDogbnVtYmVyO1xuXHRwYXRoOiBzdHJpbmc7XG5cdHRlbXBsYXRlVXJsOiBzdHJpbmc7XG5cdGNvbnRyb2xsZXI6IENvbnRyb2xsZXI7XG5cdHRpdGxlPzogc3RyaW5nO1xuXHRjaGlsZHJlbklkcz86IG51bWJlcltdO1xuXHRwYXJlbnRJZD86IG51bWJlcjtcblx0cmVkaXJlY3RUbz86IHN0cmluZztcblx0YWxsb3c/OiBzdHJpbmdbXTtcblxuXHR0ZW1wbGF0ZVN0cmluZzogc3RyaW5nO1xuXHR2aXJ0dWFsZG9tPzogSFRNTERpdkVsZW1lbnQ7XG5cblx0cm91dGVyOiBSb3V0ZXI7XG5cblx0Y29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIsIGlkOiBudW1iZXIsIGNvbmZpZzogSVJvdXRlKSB7XG5cdFx0dGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG5cblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5wYXRoID0gY29uZmlnLnBhdGg7XG5cdFx0dGhpcy50ZW1wbGF0ZVVybCA9IGNvbmZpZy50ZW1wbGF0ZVVybDtcblx0XHR0aGlzLmNvbnRyb2xsZXIgPSBjb25maWcuY29udHJvbGxlciA/IG5ldyBjb25maWcuY29udHJvbGxlcigpIDogbmV3IENvbnRyb2xsZXIoKTtcblx0XHR0aGlzLnRlbXBsYXRlU3RyaW5nID0gY29uZmlnLnRlbXBsYXRlU3RyaW5nID8gY29uZmlnLnRlbXBsYXRlU3RyaW5nIDogXCJcIjtcblxuXHRcdHRoaXMuY2hpbGRyZW5JZHMgPSBbXTtcblx0XHR0aGlzLnBhcmVudElkID0gY29uZmlnLnBhcmVudElkID8gY29uZmlnLnBhcmVudElkIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0c3RhdGljIGFzeW5jIGdldFRlbXBsYXRlKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZmV0Y2hUZW1wbGF0ZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cdFx0XHRpZiAoZmV0Y2hUZW1wbGF0ZS5vaykgcmV0dXJuIGF3YWl0IGZldGNoVGVtcGxhdGUudGV4dCgpO1xuXHRcdFx0dGhyb3cgRXJyb3IoKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIGBUZW1wbGF0ZSBmaWxlIFwiJHt1cmx9XCIgbm90IGZvdW5kLmA7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGFzeW5jIGJ1aWxkKHJvdXRlcjogUm91dGVyLCBpZDogbnVtYmVyLCBjb25maWc6IElSb3V0ZSkge1xuXHRcdGNvbnN0IHRlbXBsYXRlU3RyaW5nID0gYXdhaXQgUm91dGUuZ2V0VGVtcGxhdGUoY29uZmlnLnRlbXBsYXRlVXJsKTtcblx0XHRjb25zdCBuZXdyb3V0ZSA9IG5ldyBSb3V0ZShyb3V0ZXIsIGlkLCB7IC4uLmNvbmZpZywgdGVtcGxhdGVTdHJpbmcgfSk7XG5cdFx0cm91dGVyLnJvdXRlcy5wdXNoKG5ld3JvdXRlKTtcblx0XHRyZXR1cm4gbmV3cm91dGU7XG5cdH1cblxuXHRnZXQgaGFzUGFyZW50KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhcmVudElkID8gdHJ1ZSA6IGZhbHNlO1xuXHR9XG5cblx0Z2V0IHBhcmVudCgpOiBSb3V0ZSB7XG5cdFx0cmV0dXJuIHRoaXMucm91dGVyLmZpbmRSb3V0ZUJ5SWQodGhpcy5wYXJlbnRJZCk7XG5cdH1cblxuXHRnZXQgc3RhY2soKTogUm91dGVbXSB7XG5cdFx0aWYgKHRoaXMuaGFzUGFyZW50KSByZXR1cm4gWy4uLnRoaXMucGFyZW50LnN0YWNrLCB0aGlzXTtcblx0XHRyZXR1cm4gW3RoaXNdO1xuXHR9XG5cblx0Z2V0IHRlbXBsYXRlKCk6IHN0cmluZyB7XG5cdFx0aWYgKCF0aGlzLnZpcnR1YWxkb20pIHtcblx0XHRcdHRoaXMudmlydHVhbGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHR0aGlzLnZpcnR1YWxkb20uaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZVN0cmluZztcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMudmlydHVhbGRvbS5pbm5lckhUTUw7XG5cdH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSb3V0ZSB7XG5cdHBhdGg6IHN0cmluZztcblx0dGVtcGxhdGVVcmw6IHN0cmluZztcblx0dGl0bGU/OiBzdHJpbmc7XG5cdHJlZGlyZWN0VG8/OiBzdHJpbmc7XG5cdGFsbG93Pzogc3RyaW5nW107XG5cdGNoaWxkcmVuPzogSVJvdXRlW107XG5cdHBhcmVudElkPzogbnVtYmVyO1xuXHRjb250cm9sbGVyPzogdHlwZW9mIENvbnRyb2xsZXI7XG5cdHRlbXBsYXRlU3RyaW5nPzogc3RyaW5nO1xufSIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gXCIuL21vZHVsZVwiO1xuaW1wb3J0IHsgSVJvdXRlLCBSb3V0ZSB9IGZyb20gXCIuL3JvdXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xuXHRtb2R1bGU6IE1vZHVsZTtcblx0cm91dGVzOiBSb3V0ZVtdO1xuXHRjdXJyZW50Um91dGU/OiBSb3V0ZTtcblxuXHRjb25zdHJ1Y3Rvcihtb2R1bGU6IE1vZHVsZSwgcm91dGVzOiBJUm91dGVbXSkge1xuXHRcdHRoaXMubW9kdWxlID0gbW9kdWxlO1xuXHRcdHRoaXMucm91dGVzID0gW107XG5cdFx0dGhpcy5idWlsZFJvdXRlcyhyb3V0ZXMsICgpID0+IHtcblx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdH0pO1xuXHR9XG5cblx0YXN5bmMgYnVpbGRSb3V0ZXMocm91dGVzOiBJUm91dGVbXSwgY2FsbGJhY2s6IGFueSkge1xuXHRcdGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XG5cdFx0XHRsZXQgbmV3cm91dGUgPSBhd2FpdCBSb3V0ZS5idWlsZCh0aGlzLCB0aGlzLnJvdXRlcy5sZW5ndGgsIHJvdXRlKTtcblx0XHRcdGlmIChyb3V0ZS5jaGlsZHJlbikge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIHJvdXRlLmNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0bGV0IGNoaWxkcm91dGUgPSBhd2FpdCBSb3V0ZS5idWlsZCh0aGlzLCB0aGlzLnJvdXRlcy5sZW5ndGgsIHtcblx0XHRcdFx0XHRcdC4uLmNoaWxkLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IG5ld3JvdXRlLmlkXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0bmV3cm91dGUuY2hpbGRyZW5JZHMucHVzaChjaGlsZHJvdXRlLmlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zb2xlLmxvZyh0aGlzLnJvdXRlcyk7XG5cdFx0Y2FsbGJhY2soKTtcblx0fVxuXG5cdGZpbmRSb3V0ZShwYXRoOiBzdHJpbmcpOiBSb3V0ZSB7XG5cdFx0cmV0dXJuIHRoaXMucm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUucGF0aCA9PT0gcGF0aCk7XG5cdH1cblxuXHRmaW5kUm91dGVCeUlkKGlkOiBudW1iZXIpIHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZXNbaWRdO1xuXHR9XG5cblx0bmF2aWdhdGUocGF0aDogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3Qgcm91dGUgPSB0aGlzLmZpbmRSb3V0ZShwYXRoKTtcblx0XHRpZiAocm91dGUpIHtcblx0XHRcdGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgIT09IHBhdGgpIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgcGF0aCk7XG5cdFx0XHR0aGlzLnJlbmRlclZpZXcocm91dGUpO1xuXHRcdFx0dGhpcy5jdXJyZW50Um91dGUgPSByb3V0ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuZmluZFJvdXRlKFwiLzQwNFwiKSkge1xuXHRcdFx0XHR0aGlzLm5hdmlnYXRlKCcvNDA0Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiNDA0IG5vdCBmb3VuZC5cIjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpbml0KCk6IHZvaWQge1xuXHRcdHRoaXMubmF2aWdhdGUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcblx0fVxuXG5cdHJlbmRlclZpZXcocm91dGU6IFJvdXRlKSB7XG5cdFx0aWYgKCFyb3V0ZS5oYXNQYXJlbnQpIHtcblx0XHRcdGxldCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXHRcdFx0cm9vdC5pbm5lckhUTUwgPSByb3V0ZS50ZW1wbGF0ZTtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2cocm91dGUuc3RhY2spO1xuXHR9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tIFwiLi9tb2R1bGVcIjtcblxuLy8gQHRzLWlnbm9yZVxud2luZG93LlEgPSBNb2R1bGU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9