(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/stanislau/angular/calculator/src/main.ts */"zUnb");


/***/ }),

/***/ "668q":
/*!***************************************!*\
  !*** ./src/app/operations.service.ts ***!
  \***************************************/
/*! exports provided: OperationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsService", function() { return OperationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OperationsService {
    constructor() {
        this.actualOperation = null;
        this.operand = '';
        this.actualResult = '';
    }
    getResult() {
        return this.actualResult;
    }
    getOperation() {
        if (this.actualOperation == this.addition) {
            return '+';
        }
        else if (this.actualOperation == this.subtraction) {
            return '-';
        }
        else if (this.actualOperation == this.multiplication) {
            return '*';
        }
        else if (this.actualOperation == this.division) {
            return '/';
        }
    }
    getOperand() {
        return this.operand;
    }
    addition(term1, term2) {
        return Number(term1) + Number(term2);
    }
    subtraction(minuend, subtrahend) {
        return Number(minuend) - Number(subtrahend);
    }
    division(dividend, divisior) {
        return Number(dividend) / Number(divisior);
    }
    multiplication(multiplier1, multiplier2) {
        return Number(multiplier1) * Number(multiplier2);
    }
    getKey(key) {
        if (/^\d+$/.test(key) && !this.actualOperation) {
            this.actualResult += key;
        }
        else if (key == '+') {
            this.actualOperation = this.addition;
        }
        else if (key == '-') {
            this.actualOperation = this.subtraction;
        }
        else if (key == '/') {
            this.actualOperation = this.division;
        }
        else if (key == '*') {
            this.actualOperation = this.multiplication;
        }
        else if (/^\d+$/.test(key)) {
            this.operand += key;
        }
        else if (key == '=') {
            this.actualResult = this.actualOperation(this.actualResult, this.operand);
            this.actualOperation = null;
            this.operand = '';
        }
        else if (key == 'C') {
            this.actualResult = '';
            this.operand = '';
            this.actualOperation = null;
        }
    }
}
OperationsService.ɵfac = function OperationsService_Factory(t) { return new (t || OperationsService)(); };
OperationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OperationsService, factory: OperationsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _screen_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen/screen.component */ "YbDW");
/* harmony import */ var _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard/keyboard.component */ "xQyC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'calculator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "calculator"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-keyboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_screen_screen_component__WEBPACK_IMPORTED_MODULE_1__["ScreenComponent"], _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_2__["KeyboardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".calculator[_ngcontent-%COMP%] {\n  width: 300px;\n  background-color: black;\n  padding: 20px;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxjdWxhdG9yIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "YbDW":
/*!********************************************!*\
  !*** ./src/app/screen/screen.component.ts ***!
  \********************************************/
/*! exports provided: ScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenComponent", function() { return ScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _operations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operations.service */ "668q");


const _c0 = function (a0, a1, a2) { return [a0, a1, a2]; };
class ScreenComponent {
    constructor(service) {
        this.service = service;
        this.actualResult = this.service.getResult();
        this.actualOperation = this.service.getOperation();
        this.operand = this.service.getOperand();
    }
    ngOnInit() {
    }
    ngDoCheck() {
        if (this.service.getResult() != this.actualResult ||
            this.service.getOperation() != this.actualOperation ||
            this.service.getOperand() != this.operand) {
            this.actualResult = this.service.getResult();
            this.actualOperation = this.service.getOperation();
            this.operand = this.service.getOperand();
        }
    }
}
ScreenComponent.ɵfac = function ScreenComponent_Factory(t) { return new (t || ScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_operations_service__WEBPACK_IMPORTED_MODULE_1__["OperationsService"])); };
ScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScreenComponent, selectors: [["app-screen"]], decls: 2, vars: 5, consts: [[1, "screen"]], template: function ScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c0, ctx.actualResult, ctx.actualOperation, ctx.operand).join(" "), "\n");
    } }, styles: [".screen[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: #628f60;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  padding: 10px;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6InNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTgsIDE0MywgOTYpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button/button.component */ "be9G");
/* harmony import */ var _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keyboard/keyboard.component */ "xQyC");
/* harmony import */ var _screen_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screen/screen.component */ "YbDW");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"],
        _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_4__["KeyboardComponent"],
        _screen_screen_component__WEBPACK_IMPORTED_MODULE_5__["ScreenComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"]] }); })();


/***/ }),

/***/ "be9G":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _operations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operations.service */ "668q");


class ButtonComponent {
    constructor(service) {
        this.service = service;
    }
    click() {
        this.service.getKey(this.key);
    }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_operations_service__WEBPACK_IMPORTED_MODULE_1__["OperationsService"])); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { key: "key" }, decls: 3, vars: 4, consts: [[1, "button-container"], [3, "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_1_listener() { return ctx.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.key == "C" ? "cancel" : ctx.key == "=" || ctx.key == "/" || ctx.key == "*" || ctx.key == "-" || ctx.key == "+" ? "operation" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.key, " ");
    } }, styles: [".button-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75px;\n  font-size: 30px;\n  color: white;\n  background-image: -webkit-radial-gradient(gray, black);\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.747);\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0px 0px 30px black;\n  color: rgba(255, 255, 255, 0.692);\n}\n\nbutton.cancel[_ngcontent-%COMP%] {\n  background-image: -webkit-radial-gradient(orange, red);\n}\n\nbutton.operation[_ngcontent-%COMP%] {\n  background-image: -webkit-radial-gradient(#757575, #5a5a5a);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbURBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFQTtFQUNJLHNEQUFBO0FBQ0o7O0FBRUE7RUFDSSwyREFBQTtBQUNKIiwiZmlsZSI6ImJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIGdyYXksIGJsYWNrKTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC43NDcpO1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDMwcHggYmxhY2s7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OTIpO1xufVxuXG5idXR0b24uY2FuY2VsIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggb3JhbmdlLCByZWQpO1xufVxuXG5idXR0b24ub3BlcmF0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChyZ2IoMTE3LCAxMTcsIDExNyksIHJnYig5MCwgOTAsIDkwKSk7XG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xQyC":
/*!************************************************!*\
  !*** ./src/app/keyboard/keyboard.component.ts ***!
  \************************************************/
/*! exports provided: KeyboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardComponent", function() { return KeyboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.component */ "be9G");



function KeyboardComponent_div_1_app_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-button", 4);
} if (rf & 2) {
    const j_r5 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.keys[i_r2][j_r5] == "C" ? "cancel" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r3.keys[i_r2][j_r5]);
} }
function KeyboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KeyboardComponent_div_1_app_button_1_Template, 1, 4, "app-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
} }
class KeyboardComponent {
    constructor() {
        this.keys = [
            ['7', '8', '9', '+'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '*'],
            ['C', '0', '=', '/']
        ];
    }
    ngOnInit() {
    }
}
KeyboardComponent.ɵfac = function KeyboardComponent_Factory(t) { return new (t || KeyboardComponent)(); };
KeyboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeyboardComponent, selectors: [["app-keyboard"]], decls: 2, vars: 1, consts: [[1, "keyboard"], ["class", "keyboard-row", 4, "ngFor", "ngForOf"], [1, "keyboard-row"], [3, "class", "key", 4, "ngFor", "ngForOf"], [3, "key"]], template: function KeyboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KeyboardComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.keys);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], styles: [".keyboard[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: subgrid subgrid subgrid subgrid;\n  width: 100%;\n}\n\n.keyboard-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2tleWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1EQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0FBRUoiLCJmaWxlIjoia2V5Ym9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2V5Ym9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBzdWJncmlkIHN1YmdyaWQgc3ViZ3JpZCBzdWJncmlkO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmtleWJvYXJkLXJvdyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlIDI1JTtcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map