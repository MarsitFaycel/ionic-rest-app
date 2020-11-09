(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-product-view-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu-tab/view-product/view-product.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu-tab/view-product/view-product.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"single-product-container\">\n\n    <div style=\"position: relative;\">\n      <img src=\"https://flipdish.imgix.net/97vyjxztCOKNO8YYB8OkKjE13Zw.jpg?w=1080&h=720\" height=\"300px\">\n      <div class=\"price\">$12.50</div>\n      <div class=\"product-name\">Cheese burst pizza</div>\n    </div>\n    <ion-list *ngFor=\"let variant of variants\">\n      <ion-radio-group allow-empty-selection>\n        <ion-list-header>\n          <ion-label style=\"font-size: 18px;\" color=\"primary\" class=\"bold\">{{variant.name}}</ion-label>\n        </ion-list-header>\n        <ion-item *ngFor=\"let child of variant.childVariants\">\n          <ion-label>{{child.name}}</ion-label>\n          <ion-radio slot=\"start\" color=\"primary\" [value]=\"child.name\"></ion-radio>\n          <ion-chip slot=\"end\" *ngIf=\"child.price\" color=\"primary\">\n            <ion-label>+${{child.price}}</ion-label>\n          </ion-chip>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        <ion-label style=\"font-size: 18px;\" color=\"primary\" class=\"bold\">AdOns</ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let addOn of addOns\">\n        <ion-label>{{addOn.name}}</ion-label>\n        <ion-checkbox slot=\"start\" color=\"primary\"></ion-checkbox>\n        <ion-chip slot=\"end\" *ngIf=\"addOn.price\" color=\"primary\">\n          <ion-label>+${{addOn.price}}</ion-label>\n        </ion-chip>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-button class=\"no-border-radius\" expand=\"full\" no-margin fill=\"solid\" expand=\"block\">Add to cart</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/menu-tab/view-product/view-product-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/menu-tab/view-product/view-product-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ViewProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductPageRoutingModule", function() { return ViewProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-product.page */ "./src/app/menu-tab/view-product/view-product.page.ts");




const routes = [
    {
        path: '',
        component: _view_product_page__WEBPACK_IMPORTED_MODULE_3__["ViewProductPage"]
    }
];
let ViewProductPageRoutingModule = class ViewProductPageRoutingModule {
};
ViewProductPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewProductPageRoutingModule);



/***/ }),

/***/ "./src/app/menu-tab/view-product/view-product.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/menu-tab/view-product/view-product.module.ts ***!
  \**************************************************************/
/*! exports provided: ViewProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductPageModule", function() { return ViewProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-product-routing.module */ "./src/app/menu-tab/view-product/view-product-routing.module.ts");
/* harmony import */ var _view_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-product.page */ "./src/app/menu-tab/view-product/view-product.page.ts");







let ViewProductPageModule = class ViewProductPageModule {
};
ViewProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewProductPageRoutingModule"]
        ],
        declarations: [_view_product_page__WEBPACK_IMPORTED_MODULE_6__["ViewProductPage"]]
    })
], ViewProductPageModule);



/***/ }),

/***/ "./src/app/menu-tab/view-product/view-product.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/menu-tab/view-product/view-product.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".price {\n  color: white;\n  position: absolute;\n  font-weight: 600;\n  top: 40px;\n  padding: 10px;\n  background: darkgoldenrod;\n  border-radius: 20px;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  padding-left: 20px;\n  padding-right: 15px;\n  opacity: 0.85;\n}\n\n.product-name {\n  position: absolute;\n  bottom: 5px;\n  font-weight: 600;\n  font-size: 20px;\n  color: white;\n  padding-left: 20px;\n  box-shadow: inset 0 0px 50px 0px #2e2e2e;\n  width: 100%;\n  min-height: 30px;\n}\n\n.single-product-container {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS10YWIvdmlldy1wcm9kdWN0L0M6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcZmluYWxcXGZvb2Rfb2RlcmluZ19pb25pY19hcHAtbWFzdGVyXFxmb29kX29kZXJpbmdfaW9uaWNfYXBwLW1hc3Rlci9zcmNcXGFwcFxcbWVudS10YWJcXHZpZXctcHJvZHVjdFxcdmlldy1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWVudS10YWIvdmlldy1wcm9kdWN0L3ZpZXctcHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9tZW51LXRhYi92aWV3LXByb2R1Y3Qvdmlldy1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmljZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdG9wOiA0MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogZGFya2dvbGRlbnJvZDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgb3BhY2l0eTogMC44NTtcbn1cbi5wcm9kdWN0LW5hbWV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwcHggNTBweCAwcHggIzJlMmUyZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xufSBcblxuLnNpbmdsZS1wcm9kdWN0LWNvbnRhaW5lcntcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn0iLCIucHJpY2Uge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdG9wOiA0MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBkYXJrZ29sZGVucm9kO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBvcGFjaXR5OiAwLjg1O1xufVxuXG4ucHJvZHVjdC1uYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwcHggNTBweCAwcHggIzJlMmUyZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG59XG5cbi5zaW5nbGUtcHJvZHVjdC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu-tab/view-product/view-product.page.ts":
/*!************************************************************!*\
  !*** ./src/app/menu-tab/view-product/view-product.page.ts ***!
  \************************************************************/
/*! exports provided: ViewProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductPage", function() { return ViewProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewProductPage = class ViewProductPage {
    constructor() {
        this.variants = [
            {
                name: 'Size',
                childVariants: [
                    {
                        name: "Half",
                        pirce: 0
                    },
                    {
                        name: "Medium",
                        price: 10
                    },
                    {
                        name: "Large",
                        price: 15
                    }
                ]
            },
            { name: 'Masala',
                childVariants: [
                    { name: 'Chaat Masala', price: 5 }, { name: 'Paan Masala', price: 7 },
                    { name: 'Paneer Masala', price: 4 }, { name: 'Teekha Masala', price: 3 }
                ]
            },
            { name: 'Chutney',
                childVariants: [
                    { name: 'Tomato chutney', price: 11 }, { name: 'Peanut chutney', price: 5.6 },
                    { name: 'Guava chutney', price: 4.5 }, { name: 'Chilli chutney', price: 5 }
                ]
            }
        ];
        this.addOns = [
            { name: 'Boondi raita', price: 3 }, { name: 'Mango lassi', price: 5 },
            { name: 'Masala papad', price: 2 }, { name: 'French fries', price: 10 }, { name: 'Coriander chutney', price: 5 }
        ];
    }
    ngOnInit() {
    }
};
ViewProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-product',
        template: __webpack_require__(/*! raw-loader!./view-product.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu-tab/view-product/view-product.page.html"),
        styles: [__webpack_require__(/*! ./view-product.page.scss */ "./src/app/menu-tab/view-product/view-product.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ViewProductPage);



/***/ })

}]);
//# sourceMappingURL=view-product-view-product-module-es2015.js.map