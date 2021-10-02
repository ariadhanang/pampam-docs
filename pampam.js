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
                        return [4 /*yield*/, _route__WEBPACK_IMPORTED_MODULE_0__.Route.build(this, this.routes.length, __assign(__assign({}, child), { path: newroute.path + child.path, parentId: newroute.id }))];
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
            if (!root) {
                root = document.createElement("div");
                root.id = "root";
                document.body.appendChild(root);
            }
            root.innerHTML = route.template;
            root.setAttribute("p-route", route.id.toString());
        }
        else {
            this.renderView(route.parent);
            var parentElement = document.querySelector("[p-route=\"" + route.parentId + "\"]");
            if (parentElement) {
                var slot = parentElement.querySelector("[slot]");
                if (!slot) {
                    slot = document.createElement("div");
                    slot.setAttribute("slot", "");
                    parentElement.appendChild(slot);
                }
                slot.innerHTML = route.template;
                slot.setAttribute("p-route", route.id.toString());
            }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hDO2dCQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2xEO1NBQ0Q7SUFDRixDQUFDO0lBQ0YsYUFBQztBQUFELENBQUM7Ozs7Ozs7O1VDckZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0M7QUFFbEMsYUFBYTtBQUNiLE1BQU0sQ0FBQyxDQUFDLEdBQUcsMkNBQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhbXBhbS8uL3NyYy9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3BhbXBhbS8uL3NyYy9tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vcGFtcGFtLy4vc3JjL3JvdXRlLnRzIiwid2VicGFjazovL3BhbXBhbS8uL3NyYy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vcGFtcGFtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BhbXBhbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGFtcGFtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFtcGFtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGFtcGFtLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHsgfSIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuL3JvdXRlclwiO1xuaW1wb3J0IHsgSVJvdXRlIH0gZnJvbSBcIi4vcm91dGVcIjtcblxuZXhwb3J0IGNsYXNzIE1vZHVsZSB7XG5cdG5hbWU6IHN0cmluZztcblx0cm91dGVyOiBSb3V0ZXI7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCByb3V0ZXM6IElSb3V0ZVtdKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIodGhpcywgcm91dGVzKTtcblx0fVxufSIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi9yb3V0ZXJcIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlIHtcblx0aWQ6IG51bWJlcjtcblx0cGF0aDogc3RyaW5nO1xuXHR0ZW1wbGF0ZVVybDogc3RyaW5nO1xuXHRjb250cm9sbGVyOiBDb250cm9sbGVyO1xuXHR0aXRsZT86IHN0cmluZztcblx0Y2hpbGRyZW5JZHM/OiBudW1iZXJbXTtcblx0cGFyZW50SWQ/OiBudW1iZXI7XG5cdHJlZGlyZWN0VG8/OiBzdHJpbmc7XG5cdGFsbG93Pzogc3RyaW5nW107XG5cblx0dGVtcGxhdGVTdHJpbmc6IHN0cmluZztcblx0dmlydHVhbGRvbT86IEhUTUxEaXZFbGVtZW50O1xuXG5cdHJvdXRlcjogUm91dGVyO1xuXG5cdGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBpZDogbnVtYmVyLCBjb25maWc6IElSb3V0ZSkge1xuXHRcdHRoaXMucm91dGVyID0gcm91dGVyO1xuXG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoO1xuXHRcdHRoaXMudGVtcGxhdGVVcmwgPSBjb25maWcudGVtcGxhdGVVcmw7XG5cdFx0dGhpcy5jb250cm9sbGVyID0gY29uZmlnLmNvbnRyb2xsZXIgPyBuZXcgY29uZmlnLmNvbnRyb2xsZXIoKSA6IG5ldyBDb250cm9sbGVyKCk7XG5cdFx0dGhpcy50ZW1wbGF0ZVN0cmluZyA9IGNvbmZpZy50ZW1wbGF0ZVN0cmluZyA/IGNvbmZpZy50ZW1wbGF0ZVN0cmluZyA6IFwiXCI7XG5cblx0XHR0aGlzLmNoaWxkcmVuSWRzID0gW107XG5cdFx0dGhpcy5wYXJlbnRJZCA9IGNvbmZpZy5wYXJlbnRJZCA/IGNvbmZpZy5wYXJlbnRJZCA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBnZXRUZW1wbGF0ZSh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGZldGNoVGVtcGxhdGUgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXHRcdFx0aWYgKGZldGNoVGVtcGxhdGUub2spIHJldHVybiBhd2FpdCBmZXRjaFRlbXBsYXRlLnRleHQoKTtcblx0XHRcdHRocm93IEVycm9yKCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJldHVybiBgVGVtcGxhdGUgZmlsZSBcIiR7dXJsfVwiIG5vdCBmb3VuZC5gO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBhc3luYyBidWlsZChyb3V0ZXI6IFJvdXRlciwgaWQ6IG51bWJlciwgY29uZmlnOiBJUm91dGUpIHtcblx0XHRjb25zdCB0ZW1wbGF0ZVN0cmluZyA9IGF3YWl0IFJvdXRlLmdldFRlbXBsYXRlKGNvbmZpZy50ZW1wbGF0ZVVybCk7XG5cdFx0Y29uc3QgbmV3cm91dGUgPSBuZXcgUm91dGUocm91dGVyLCBpZCwgeyAuLi5jb25maWcsIHRlbXBsYXRlU3RyaW5nIH0pO1xuXHRcdHJvdXRlci5yb3V0ZXMucHVzaChuZXdyb3V0ZSk7XG5cdFx0cmV0dXJuIG5ld3JvdXRlO1xuXHR9XG5cblx0Z2V0IGhhc1BhcmVudCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnRJZCA/IHRydWUgOiBmYWxzZTtcblx0fVxuXG5cdGdldCBwYXJlbnQoKTogUm91dGUge1xuXHRcdHJldHVybiB0aGlzLnJvdXRlci5maW5kUm91dGVCeUlkKHRoaXMucGFyZW50SWQpO1xuXHR9XG5cblx0Z2V0IHN0YWNrKCk6IFJvdXRlW10ge1xuXHRcdGlmICh0aGlzLmhhc1BhcmVudCkgcmV0dXJuIFsuLi50aGlzLnBhcmVudC5zdGFjaywgdGhpc107XG5cdFx0cmV0dXJuIFt0aGlzXTtcblx0fVxuXG5cdGdldCB0ZW1wbGF0ZSgpOiBzdHJpbmcge1xuXHRcdGlmICghdGhpcy52aXJ0dWFsZG9tKSB7XG5cdFx0XHR0aGlzLnZpcnR1YWxkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0dGhpcy52aXJ0dWFsZG9tLmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGVTdHJpbmc7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnZpcnR1YWxkb20uaW5uZXJIVE1MO1xuXHR9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUm91dGUge1xuXHRwYXRoOiBzdHJpbmc7XG5cdHRlbXBsYXRlVXJsOiBzdHJpbmc7XG5cdHRpdGxlPzogc3RyaW5nO1xuXHRyZWRpcmVjdFRvPzogc3RyaW5nO1xuXHRhbGxvdz86IHN0cmluZ1tdO1xuXHRjaGlsZHJlbj86IElSb3V0ZVtdO1xuXHRwYXJlbnRJZD86IG51bWJlcjtcblx0Y29udHJvbGxlcj86IHR5cGVvZiBDb250cm9sbGVyO1xuXHR0ZW1wbGF0ZVN0cmluZz86IHN0cmluZztcbn0iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tIFwiLi9tb2R1bGVcIjtcbmltcG9ydCB7IElSb3V0ZSwgUm91dGUgfSBmcm9tIFwiLi9yb3V0ZVwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcblx0bW9kdWxlOiBNb2R1bGU7XG5cdHJvdXRlczogUm91dGVbXTtcblx0Y3VycmVudFJvdXRlPzogUm91dGU7XG5cblx0Y29uc3RydWN0b3IobW9kdWxlOiBNb2R1bGUsIHJvdXRlczogSVJvdXRlW10pIHtcblx0XHR0aGlzLm1vZHVsZSA9IG1vZHVsZTtcblx0XHR0aGlzLnJvdXRlcyA9IFtdO1xuXHRcdHRoaXMuYnVpbGRSb3V0ZXMocm91dGVzLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmluaXQoKTtcblx0XHR9KTtcblx0fVxuXG5cdGFzeW5jIGJ1aWxkUm91dGVzKHJvdXRlczogSVJvdXRlW10sIGNhbGxiYWNrOiBhbnkpIHtcblx0XHRmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xuXHRcdFx0bGV0IG5ld3JvdXRlID0gYXdhaXQgUm91dGUuYnVpbGQodGhpcywgdGhpcy5yb3V0ZXMubGVuZ3RoLCByb3V0ZSk7XG5cdFx0XHRpZiAocm91dGUuY2hpbGRyZW4pIHtcblx0XHRcdFx0Zm9yIChjb25zdCBjaGlsZCBvZiByb3V0ZS5jaGlsZHJlbikge1xuXHRcdFx0XHRcdGxldCBjaGlsZHJvdXRlID0gYXdhaXQgUm91dGUuYnVpbGQodGhpcywgdGhpcy5yb3V0ZXMubGVuZ3RoLCB7XG5cdFx0XHRcdFx0XHQuLi5jaGlsZCxcblx0XHRcdFx0XHRcdHBhdGg6IG5ld3JvdXRlLnBhdGggKyBjaGlsZC5wYXRoLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IG5ld3JvdXRlLmlkXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0bmV3cm91dGUuY2hpbGRyZW5JZHMucHVzaChjaGlsZHJvdXRlLmlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYWxsYmFjaygpO1xuXHR9XG5cblx0ZmluZFJvdXRlKHBhdGg6IHN0cmluZyk6IFJvdXRlIHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZXMuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXRoID09PSBwYXRoKTtcblx0fVxuXG5cdGZpbmRSb3V0ZUJ5SWQoaWQ6IG51bWJlcikge1xuXHRcdHJldHVybiB0aGlzLnJvdXRlc1tpZF07XG5cdH1cblxuXHRuYXZpZ2F0ZShwYXRoOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCByb3V0ZSA9IHRoaXMuZmluZFJvdXRlKHBhdGgpO1xuXHRcdGlmIChyb3V0ZSkge1xuXHRcdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gcGF0aCkgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCBwYXRoKTtcblx0XHRcdHRoaXMucmVuZGVyVmlldyhyb3V0ZSk7XG5cdFx0XHR0aGlzLmN1cnJlbnRSb3V0ZSA9IHJvdXRlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5maW5kUm91dGUoXCIvNDA0XCIpKSB7XG5cdFx0XHRcdHRoaXMubmF2aWdhdGUoJy80MDQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCI0MDQgbm90IGZvdW5kLlwiO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5uYXZpZ2F0ZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuXHR9XG5cblx0cmVuZGVyVmlldyhyb3V0ZTogUm91dGUpIHtcblx0XHRpZiAoIXJvdXRlLmhhc1BhcmVudCkge1xuXHRcdFx0bGV0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cdFx0XHRpZiAoIXJvb3QpIHtcblx0XHRcdFx0cm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHJvb3QuaWQgPSBcInJvb3RcIjtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcblx0XHRcdH1cblx0XHRcdHJvb3QuaW5uZXJIVE1MID0gcm91dGUudGVtcGxhdGU7XG5cdFx0XHRyb290LnNldEF0dHJpYnV0ZShcInAtcm91dGVcIiwgcm91dGUuaWQudG9TdHJpbmcoKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVuZGVyVmlldyhyb3V0ZS5wYXJlbnQpO1xuXHRcdFx0Y29uc3QgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtwLXJvdXRlPVwiJHtyb3V0ZS5wYXJlbnRJZH1cIl1gKTtcblx0XHRcdGlmIChwYXJlbnRFbGVtZW50KSB7XG5cdFx0XHRcdGxldCBzbG90ID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbc2xvdF1gKTtcblx0XHRcdFx0aWYgKCFzbG90KSB7XG5cdFx0XHRcdFx0c2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0c2xvdC5zZXRBdHRyaWJ1dGUoXCJzbG90XCIsIFwiXCIpO1xuXHRcdFx0XHRcdHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2xvdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2xvdC5pbm5lckhUTUwgPSByb3V0ZS50ZW1wbGF0ZTtcblx0XHRcdFx0c2xvdC5zZXRBdHRyaWJ1dGUoXCJwLXJvdXRlXCIsIHJvdXRlLmlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSBcIi4vbW9kdWxlXCI7XG5cbi8vIEB0cy1pZ25vcmVcbndpbmRvdy5RID0gTW9kdWxlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==