(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-tab-profile-tab-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile-tab/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile-tab/login/login.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\n  <div class=\"ion-padding\">\n    <ion-item>\n      <ion-label position=\"floating\">Enter Mobile Number</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n    <div class=\"small-vertical-height\"></div>\n    <ion-item>\n      <ion-label position=\"floating\">Enter Password</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n    <div class=\"small-vertical-height\"></div>\n    <div class=\"reverse-flex\">\n      <ion-label>Forgot password ?</ion-label>\n    </div>\n    <div class=\"vertical-height\"></div>\n    <ion-button expand=\"full\" fill=\"solid\">Login</ion-button>\n  </div>\n</ion-card>\n<ion-grid>\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <ion-label color=\"secondary\">Or Login with social network</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"ion-text-right\">\n      <ion-button color=\"primary\">\n        <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\n        Facebook\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"ion-text-left\">\n\n      <ion-button color=\"danger\">\n        <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\n        Google\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile-tab/my-profile/my-profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile-tab/my-profile/my-profile.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n  <ion-item lines=\"full\">\n    <ion-icon color=\"primary\" name=\"person\"></ion-icon>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label style=\"font-size: 12px; opacity: 0.5;\" class=\"ion-text-uppercase\">Full Name</ion-label>\n          <ion-label>Piyush Jain</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n  <ion-item lines=\"full\">\n    <ion-icon  color=\"primary\"  name=\"mail\"></ion-icon>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label style=\"font-size: 12px; opacity: 0.5;\" class=\"ion-text-uppercase\">Email Address</ion-label>\n          <ion-label>jain.a.piyush@gmail.com</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n  <ion-item lines=\"full\">\n    <ion-icon color=\"primary\"  name=\"call\"></ion-icon>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label style=\"font-size: 12px; opacity: 0.5;\" class=\"ion-text-uppercase\">Mobile Number</ion-label>\n          <ion-label>+91-9039907701</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n  <ion-item lines=\"full\">\n    <ion-icon  color=\"primary\" name=\"man\"></ion-icon>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label style=\"font-size: 12px; opacity: 0.5;\" class=\"ion-text-uppercase\">Gender</ion-label>\n          <ion-label>Male</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-list>\n\n<div class=\"vertical-height\"></div>\n<ion-button expand=\"full\" fill=\"solid\">UPDATE</ion-button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile-tab/orders-history/orders-history.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile-tab/orders-history/orders-history.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>\n      <ion-label>\n        26 Jan, 2019 8:00PM\n      </ion-label>\n    </ion-card-subtitle>\n    <ion-card-title>\n      <ion-row class=\"ion-justify-content-between\">\n        <ion-col size=\"6\">\n          <div class=\"flex-item-center\">\n            <ion-icon name=\"checkmark\" color=\"primary\"></ion-icon>\n            <span class=\"small-gap\"></span>\n            <ion-label color=\"primary\">Pedning</ion-label>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"ion-text-end\">\n            <span style=\"opacity: 0.8;\">{{350 | currency: 'INR'}}</span>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n    <div class=\"flex-item-center\">\n      <div>[1]</div>\n      <span class=\"small-gap\"></span>\n      <div>Veg Schezwan Fried Rice</div>\n    </div>\n    <div class=\"small-vertical-height\"></div>\n    <div class=\"flex-item-center\">\n      <div>[4]</div>\n      <span class=\"small-gap\"></span>\n      <div>Veg Schezwan Fried Rice</div>\n    </div>\n    <div class=\"small-vertical-height\"></div>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <div>\n          <ion-button expand=\"block\" fill=\"outline\" color=\"primary\">View Receipt</ion-button>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <div>\n          <ion-button expand=\"full\" fill=\"solid\" color=\"primary\">Reorder</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>\n      <ion-label>\n        26 Jan, 2019 8:00PM\n      </ion-label>\n    </ion-card-subtitle>\n    <ion-card-title>\n      <ion-row class=\"ion-justify-content-between\">\n        <ion-col size=\"6\">\n          <div class=\"flex-item-center\">\n            <ion-icon name=\"checkmark\" color=\"success\"></ion-icon>\n            <span class=\"small-gap\"></span>\n            <ion-label color=\"success\">Delivered</ion-label>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"ion-text-end\">\n            <span style=\"opacity: 0.8;\">{{350 | currency: 'INR'}}</span>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n    <div class=\"flex-item-center\">\n      <div>[1]</div>\n      <span class=\"small-gap\"></span>\n      <div>Veg Schezwan Fried Rice</div>\n    </div>\n    <div class=\"small-vertical-height\"></div>\n    <div class=\"flex-item-center\">\n      <div>[4]</div>\n      <span class=\"small-gap\"></span>\n      <div>Veg Schezwan Fried Rice</div>\n    </div>\n    <div class=\"small-vertical-height\"></div>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <div>\n          <ion-button expand=\"block\" fill=\"outline\" color=\"primary\">View Receipt</ion-button>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <div>\n          <ion-button expand=\"full\" fill=\"solid\" color=\"primary\">Reorder</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile-tab/profile-tab.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile-tab/profile-tab.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"height: 200px;\">\n  <ion-toolbar color=\"primary\" class=\"full-height flex-middle\">\n\n    <ion-title class=\"ion-text-center\">\n      <h1 class=\"bold\">RED THEMES</h1>\n    </ion-title>\n  </ion-toolbar>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-icon  name=\"color-fill\" color=\"light\" (click)=\"openThemePopover()\"></ion-icon>\n  </ion-fab>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loggedIn\">\n    <ion-segment (ionChange)=\"segmentChanged($event)\" color=\"primary\">\n      <ion-segment-button value=\"login\" [checked]=\"selectedSegment === 'login'\">\n        <ion-label>Login</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"signup\" [checked]=\"selectedSegment === 'signup'\">\n        <ion-label>Signup</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    <app-login *ngIf=\"selectedSegment === 'login'\"></app-login>\n    <app-signup *ngIf=\"selectedSegment === 'signup'\"></app-signup>\n  </div>\n  <div *ngIf=\"loggedIn\">\n    <ion-segment (ionChange)=\"segmentChanged($event)\" color=\"primary\">\n      <ion-segment-button value=\"myprofile\" [checked]=\"selectedSegment === 'myprofile'\">\n        <ion-label>Profile</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"orders\" [checked]=\"selectedSegment === 'orders'\">\n        <ion-label>Orders</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"address\" [checked]=\"selectedSegment === 'address'\">\n        <ion-label>Address</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    <app-my-profile *ngIf=\"selectedSegment === 'myprofile'\"></app-my-profile>\n    <app-orders-history *ngIf=\"selectedSegment === 'orders'\"></app-orders-history>\n    <app-saved-address *ngIf=\"selectedSegment === 'address'\"></app-saved-address>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"selectedSegment === 'address'\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile-tab/saved-address/saved-address.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile-tab/saved-address/saved-address.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>\n      <ion-row class=\"ion-justify-content-between\">\n        <ion-col size=\"11\">\n          <div>\n            Home\n          </div>\n        </ion-col>\n        <ion-col size=\"1\">\n          <div>\n            <ion-icon color=\"primary\" name=\"create\" style=\"padding-top: 4px;\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content>\n    <div class=\"flex\">\n      <ion-icon color=\"primary\" name=\"pin\" style=\"padding-top: 4px;\"></ion-icon>\n      <ion-label style=\"max-width: 250px;\" class=\"ion-margin-start\">1403, B-R3, Life Republic Marunji, Hinjewadi\n      </ion-label>\n    </div>\n    <!-- <div class=\"ion-justify-content-end\">\n      <ion-button>Make Default</ion-button>\n    </div> -->\n    <ion-row class=\"ion-justify-content-end\">\n      <ion-col size=\"5\">\n        <div class=\"ion-text-end\">\n          <ion-button fill=\"outline\" size=\"small\">Make Default</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>\n      <ion-row class=\"ion-justify-content-between\">\n        <ion-col size=\"11\">\n          <div>\n            Home\n          </div>\n        </ion-col>\n        <ion-col size=\"1\">\n          <div>\n            <ion-icon color=\"primary\" name=\"create\" style=\"padding-top: 4px;\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content>\n    <div class=\"flex\">\n      <ion-icon color=\"primary\" name=\"pin\" style=\"padding-top: 4px;\"></ion-icon>\n      <ion-label style=\"max-width: 250px;\" class=\"ion-margin-start\">1403, B-R3, Life Republic Marunji, Hinjewadi\n      </ion-label>\n    </div>\n    <!-- <div class=\"ion-justify-content-end\">\n      <ion-button>Make Default</ion-button>\n    </div> -->\n    <ion-row class=\"ion-justify-content-end\">\n      <ion-col size=\"5\">\n        <div class=\"ion-text-end\">\n          <ion-label color=\"success\">\n            <ion-icon name=\"checkmark\"></ion-icon>\n            Default\n          </ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>\n      <ion-row class=\"ion-justify-content-between\">\n        <ion-col size=\"11\">\n          <div>\n            Home\n          </div>\n        </ion-col>\n        <ion-col size=\"1\">\n          <div>\n            <ion-icon color=\"primary\" name=\"create\" style=\"padding-top: 4px;\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content>\n    <div class=\"flex\">\n      <ion-icon color=\"primary\" name=\"pin\" style=\"padding-top: 4px;\"></ion-icon>\n      <ion-label style=\"max-width: 250px;\" class=\"ion-margin-start\">1403, B-R3, Life Republic Marunji, Hinjewadi\n      </ion-label>\n    </div>\n    <!-- <div class=\"ion-justify-content-end\">\n      <ion-button>Make Default</ion-button>\n    </div> -->\n    <ion-row class=\"ion-justify-content-end\">\n      <ion-col size=\"5\">\n        <div class=\"ion-text-end\">\n          <ion-button fill=\"outline\" size=\"small\">Make Default</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>\n      <ion-row class=\"ion-justify-content-between\">\n        <ion-col size=\"11\">\n          <div>\n            Home\n          </div>\n        </ion-col>\n        <ion-col size=\"1\">\n          <div>\n            <ion-icon color=\"primary\" name=\"create\" style=\"padding-top: 4px;\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content>\n    <div class=\"flex\">\n      <ion-icon color=\"primary\" name=\"pin\" style=\"padding-top: 4px;\"></ion-icon>\n      <ion-label style=\"max-width: 250px;\" class=\"ion-margin-start\">1403, B-R3, Life Republic Marunji, Hinjewadi\n      </ion-label>\n    </div>\n    <!-- <div class=\"ion-justify-content-end\">\n      <ion-button>Make Default</ion-button>\n    </div> -->\n    <ion-row class=\"ion-justify-content-end\">\n      <ion-col size=\"5\">\n        <div class=\"ion-text-end\">\n          <ion-label color=\"success\">\n            <ion-icon name=\"checkmark\"></ion-icon>\n            Default\n          </ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile-tab/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile-tab/signup/signup.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\n  <div class=\"ion-padding\">\n\n    <ion-item>\n      <ion-label position=\"floating\">Enter Mobile Number</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n    <div class=\"small-vertical-height\"></div>\n    <ion-item>\n      <ion-label position=\"floating\">Enter Email Id</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n    <div class=\"small-vertical-height\"></div>\n    <ion-item>\n      <ion-label position=\"floating\">Enter Date of Birth</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n    <div class=\"small-vertical-height\"></div>\n    <div class=\"small-vertical-height\"></div>\n    <ion-item>\n      <ion-label position=\"floating\">Enter Password</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n    <div class=\"vertical-height\"></div>\n    <ion-button expand=\"full\" fill=\"solid\" >Signup</ion-button>\n\n  </div>\n</ion-card>"

/***/ }),

/***/ "./src/app/profile-tab/login/login.component.scss":
/*!********************************************************!*\
  !*** ./src/app/profile-tab/login/login.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtdGFiL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile-tab/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile-tab/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile-tab/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/profile-tab/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile-tab/my-profile/my-profile.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/profile-tab/my-profile/my-profile.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtdGFiL215LXByb2ZpbGUvbXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile-tab/my-profile/my-profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/profile-tab/my-profile/my-profile.component.ts ***!
  \****************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent() {
    }
    MyProfileComponent.prototype.ngOnInit = function () { };
    MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! raw-loader!./my-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile-tab/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.scss */ "./src/app/profile-tab/my-profile/my-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile-tab/orders-history/orders-history.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/profile-tab/orders-history/orders-history.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtdGFiL29yZGVycy1oaXN0b3J5L29yZGVycy1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile-tab/orders-history/orders-history.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/profile-tab/orders-history/orders-history.component.ts ***!
  \************************************************************************/
/*! exports provided: OrdersHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersHistoryComponent", function() { return OrdersHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrdersHistoryComponent = /** @class */ (function () {
    function OrdersHistoryComponent() {
    }
    OrdersHistoryComponent.prototype.ngOnInit = function () { };
    OrdersHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders-history',
            template: __webpack_require__(/*! raw-loader!./orders-history.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile-tab/orders-history/orders-history.component.html"),
            styles: [__webpack_require__(/*! ./orders-history.component.scss */ "./src/app/profile-tab/orders-history/orders-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrdersHistoryComponent);
    return OrdersHistoryComponent;
}());



/***/ }),

/***/ "./src/app/profile-tab/profile-tab-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/profile-tab/profile-tab-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileTabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTabPageRoutingModule", function() { return ProfileTabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_tab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-tab.page */ "./src/app/profile-tab/profile-tab.page.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/profile-tab/login/login.component.ts");





var routes = [
    {
        path: '',
        component: _profile_tab_page__WEBPACK_IMPORTED_MODULE_3__["ProfileTabPage"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }
];
var ProfileTabPageRoutingModule = /** @class */ (function () {
    function ProfileTabPageRoutingModule() {
    }
    ProfileTabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfileTabPageRoutingModule);
    return ProfileTabPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile-tab/profile-tab.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile-tab/profile-tab.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTabPageModule", function() { return ProfileTabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-tab-routing.module */ "./src/app/profile-tab/profile-tab-routing.module.ts");
/* harmony import */ var _profile_tab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-tab.page */ "./src/app/profile-tab/profile-tab.page.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/profile-tab/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/profile-tab/signup/signup.component.ts");
/* harmony import */ var _orders_history_orders_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orders-history/orders-history.component */ "./src/app/profile-tab/orders-history/orders-history.component.ts");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/profile-tab/my-profile/my-profile.component.ts");
/* harmony import */ var _saved_address_saved_address_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./saved-address/saved-address.component */ "./src/app/profile-tab/saved-address/saved-address.component.ts");












var ProfileTabPageModule = /** @class */ (function () {
    function ProfileTabPageModule() {
    }
    ProfileTabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileTabPageRoutingModule"]
            ],
            declarations: [
                _profile_tab_page__WEBPACK_IMPORTED_MODULE_6__["ProfileTabPage"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _orders_history_orders_history_component__WEBPACK_IMPORTED_MODULE_9__["OrdersHistoryComponent"],
                _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_10__["MyProfileComponent"],
                _saved_address_saved_address_component__WEBPACK_IMPORTED_MODULE_11__["SavedAddressComponent"]
            ]
        })
    ], ProfileTabPageModule);
    return ProfileTabPageModule;
}());



/***/ }),

/***/ "./src/app/profile-tab/profile-tab.page.scss":
/*!***************************************************!*\
  !*** ./src/app/profile-tab/profile-tab.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtdGFiL3Byb2ZpbGUtdGFiLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile-tab/profile-tab.page.ts":
/*!*************************************************!*\
  !*** ./src/app/profile-tab/profile-tab.page.ts ***!
  \*************************************************/
/*! exports provided: ProfileTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTabPage", function() { return ProfileTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/theme.component */ "./src/app/profile-tab/theme/theme.component.ts");




var ProfileTabPage = /** @class */ (function () {
    function ProfileTabPage(popoverController) {
        this.popoverController = popoverController;
        this.selectedSegment = 'login';
        this.loggedIn = false;
        if (this.loggedIn) {
            this.selectedSegment = 'myprofile';
        }
    }
    ProfileTabPage.prototype.ngOnInit = function () {
    };
    ProfileTabPage.prototype.segmentChanged = function ($event) {
        this.selectedSegment = $event.detail.value;
    };
    ProfileTabPage.prototype.openThemePopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _theme_theme_component__WEBPACK_IMPORTED_MODULE_3__["ThemeComponent"],
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileTabPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    ProfileTabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-tab',
            template: __webpack_require__(/*! raw-loader!./profile-tab.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile-tab/profile-tab.page.html"),
            styles: [__webpack_require__(/*! ./profile-tab.page.scss */ "./src/app/profile-tab/profile-tab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], ProfileTabPage);
    return ProfileTabPage;
}());



/***/ }),

/***/ "./src/app/profile-tab/saved-address/saved-address.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/profile-tab/saved-address/saved-address.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtdGFiL3NhdmVkLWFkZHJlc3Mvc2F2ZWQtYWRkcmVzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile-tab/saved-address/saved-address.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/profile-tab/saved-address/saved-address.component.ts ***!
  \**********************************************************************/
/*! exports provided: SavedAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedAddressComponent", function() { return SavedAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SavedAddressComponent = /** @class */ (function () {
    function SavedAddressComponent() {
    }
    SavedAddressComponent.prototype.ngOnInit = function () { };
    SavedAddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-saved-address',
            template: __webpack_require__(/*! raw-loader!./saved-address.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile-tab/saved-address/saved-address.component.html"),
            styles: [__webpack_require__(/*! ./saved-address.component.scss */ "./src/app/profile-tab/saved-address/saved-address.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SavedAddressComponent);
    return SavedAddressComponent;
}());



/***/ }),

/***/ "./src/app/profile-tab/signup/signup.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/profile-tab/signup/signup.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtdGFiL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile-tab/signup/signup.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile-tab/signup/signup.component.ts ***!
  \********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile-tab/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/profile-tab/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=profile-tab-profile-tab-module-es5.js.map