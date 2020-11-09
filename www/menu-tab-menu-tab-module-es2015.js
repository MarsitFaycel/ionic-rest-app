(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-tab-menu-tab-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu-tab/menu-tab.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu-tab/menu-tab.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Our Menu</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-segment scrollable [value]=\"selectedCategory\" (ionChange)=\"onCategoryTabChange($event)\">\n    <ion-segment-button *ngFor=\"let category of categories\" [value]=\"category\">\n      {{category}}\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-grid class=\"grid-categories\">\n    <ion-row *ngFor=\"let product of viewProducts;  let i = index\">\n      <ion-col  *ngIf=\"i % 2 == 0\"  >\n\n        <ion-card   >\n   \n          <ion-card-content class=\"no-padding\" (click)=\"onProductClick()\">\n            <img [src]=\"product.imgPath\"  alt=\"image\">\n          </ion-card-content>\n          <ion-card-header>\n            <ion-card-subtitle>{{product.name}}</ion-card-subtitle>\n            <ion-card-title>${{product.price}}</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"grid-categories\">\n    <ion-row *ngFor=\"let product of viewProducts;  let i = index\">\n      <ion-col  *ngIf=\"i % 2 != 0\"  >\n\n        <ion-card   >\n   \n          <ion-card-content class=\"no-padding\" (click)=\"onProductClick()\">\n            <img [src]=\"product.imgPath\"  alt=\"image\">\n          </ion-card-content>\n          <ion-card-header>\n            <ion-card-subtitle>{{product.name}}</ion-card-subtitle>\n            <ion-card-title>${{product.price}}</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/menu-tab/menu-tab-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/menu-tab/menu-tab-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MenuTabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTabPageRoutingModule", function() { return MenuTabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_tab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-tab.page */ "./src/app/menu-tab/menu-tab.page.ts");




const routes = [
    {
        path: '',
        component: _menu_tab_page__WEBPACK_IMPORTED_MODULE_3__["MenuTabPage"]
    },
    {
        path: 'view-product',
        loadChildren: () => __webpack_require__.e(/*! import() | view-product-view-product-module */ "view-product-view-product-module").then(__webpack_require__.bind(null, /*! ./view-product/view-product.module */ "./src/app/menu-tab/view-product/view-product.module.ts")).then(m => m.ViewProductPageModule)
    },
];
let MenuTabPageRoutingModule = class MenuTabPageRoutingModule {
};
MenuTabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuTabPageRoutingModule);



/***/ }),

/***/ "./src/app/menu-tab/menu-tab.module.ts":
/*!*********************************************!*\
  !*** ./src/app/menu-tab/menu-tab.module.ts ***!
  \*********************************************/
/*! exports provided: MenuTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTabPageModule", function() { return MenuTabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-tab-routing.module */ "./src/app/menu-tab/menu-tab-routing.module.ts");
/* harmony import */ var _menu_tab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-tab.page */ "./src/app/menu-tab/menu-tab.page.ts");







let MenuTabPageModule = class MenuTabPageModule {
};
MenuTabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuTabPageRoutingModule"]
        ],
        declarations: [_menu_tab_page__WEBPACK_IMPORTED_MODULE_6__["MenuTabPage"]]
    })
], MenuTabPageModule);



/***/ }),

/***/ "./src/app/menu-tab/menu-tab.page.scss":
/*!*********************************************!*\
  !*** ./src/app/menu-tab/menu-tab.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-categories {\n  width: 50%;\n  float: left;\n}\n\n@media (max-width: 576px) {\n  .grid-categories {\n    width: 100%;\n    float: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS10YWIvQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxmaW5hbFxcZm9vZF9vZGVyaW5nX2lvbmljX2FwcC1tYXN0ZXJcXGZvb2Rfb2RlcmluZ19pb25pY19hcHAtbWFzdGVyL3NyY1xcYXBwXFxtZW51LXRhYlxcbWVudS10YWIucGFnZS5zY3NzIiwic3JjL2FwcC9tZW51LXRhYi9tZW51LXRhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsV0FBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tZW51LXRhYi9tZW51LXRhYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jYXRlZ29yaWVzIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIFxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmdyaWQtY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIuZ3JpZC1jYXRlZ29yaWVzIHtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuZ3JpZC1jYXRlZ29yaWVzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu-tab/menu-tab.page.ts":
/*!*******************************************!*\
  !*** ./src/app/menu-tab/menu-tab.page.ts ***!
  \*******************************************/
/*! exports provided: MenuTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTabPage", function() { return MenuTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuTabPage = class MenuTabPage {
    constructor(router) {
        this.router = router;
        this.selectedCategory = 'PIZZA';
        this.categories = ['PIZZA', 'BURGER', 'DESSERTS', 'SNACKS', 'DRINKS'];
        this.pizzaProducts = [
            { imgPath: 'https://img1.wsimg.com/isteam/stock/2999/:/', price: 12.50, name: 'Cheese burst pizza' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeN9ZmxOgfpz2fNKoay9gqh5sgKCkpSzbjEYbNuby5dhnJV-_C', price: 15, name: 'Tomato corn pizza' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2VIH8gqiZXtM5XbkSKefPMidImjnfSku_imKBCEaOB8Xxhdba', price: 5.90, name: 'Cheesy smoke paper pizza' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7x6T2N0tJvT5QUkVL4ebbU-0CLxlpFGtT9kHwVttKu8odx3x5', price: 2.5, name: 'Mashroom magic pizza' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSH2laiUvjvONmyzXwco_fMEuulEB2vFhX1tCUcjwb02NU5d4gC', price: 16.2, name: 'Corn paper pizza' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG2IO9fCVl7YpNo5wv2CtMOBKUNVBc5W47sh_wUOTwdzkgtwqW', price: 15.5, name: 'Tasty herbs pizza' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIGsLK0SsZ7lG0JcJI5oDEu3yfim78gfTwAqJkGixwo19TIkEi', price: 8.95, name: 'Veggy cheesy smoky pizza' },
            { imgPath: 'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1-500x375.jpg', price: 4.5, name: 'Paneer pyara pizza' }
        ];
        this.burgerProducts = [
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr12w46jsCKxktN9BXHUJIqCevRZAvPIVKNJkDoI4UpEdyEHkK', price: 12.50, name: 'Aloo tikki burger' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_gjQD-qDUIRd23JT36NRkzZyAsoWzfZ6lngWMkDPqv9x_1e3O', price: 5.50, name: 'Fresh paneer burger' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOtgZD6lAG5SzIwAyuSpcm5_BCHlowjYY-92M0XRrjEwP5OAvs', price: 6.50, name: 'Cheese regular' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW-O0XOzIyC3kYGwDDSggxg8fmHQG9PZQ6A47swIi3NOPcKQ_5', price: 9, name: 'Masala magic burger' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSS8UqX9n2WHrP5EKfpxKV_tGY8oHUiCmVbttP65SXiBOQRrl3e', price: 12, name: 'Corn paper paneer' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqfASPBD0EMycAVIeKolF-M9i3XXJ4j77bnlaes7NwqHiVipbs', price: 10, name: 'Peas wopper burger' }
        ];
        this.dessertsProducts = [
            { imgPath: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/rocky-road-cheesecake-pudding.jpg', price: 7.5, name: 'Choclate bisclate' },
            { imgPath: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Desserts.jpg', price: 9, name: 'Choco scuba' },
            { imgPath: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190326-pin-a-colada-bars-259-1555081178.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*', price: 5, name: 'Sweet straberry' },
            { imgPath: 'https://i.pinimg.com/originals/b2/5b/56/b25b560ed6f5b4d8372aa508878ab9b8.jpg', price: 6.5, name: 'Choco pineapple' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKOd9cBYMvLtt_KPPJO4SO1oAzKgHkkGSkODC3hy5sU8vD60UX', price: 4.5, name: 'Orange masti' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLvzPFeEZPC5fZRu1qMVqYEM9ejv-hjbf0Km5IEI9b3jLMjBrC', price: 5, name: 'Choclate white sauce' },
            { imgPath: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Mini-Chocolate-Wafer-Cakes_exps106462_TH2379807A11_02_5bC_RMS.jpg', price: 6, name: 'Sweet slime' },
        ];
        this.snacksProducts = [
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU3c9_IuP9R7KqnuhfmYBDjMW4nuYvgVXxCVHR77FOG7PDw8mh', price: 11, name: 'Basket bunch' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEkjJdQR0kZPyX5D0DALOWWOtWOIDCo9ubElmcwtejG006Lxz3', price: 8, name: 'Paneer masala' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-CNLkyisNzItwAoVq9WOcgcxJfkw2AACsp32Z9K3N1eSbJHid', price: 12, name: 'Corn smosa' },
            { imgPath: 'https://drop.ndtv.com/albums/COOKS/indian-snacks/til-e-paneer.jpg', price: 10, name: 'Crunchy kachori' },
            { imgPath: 'https://www.thestatesman.com/wp-content/uploads/2017/10/food-samosas.jpg', price: 7, name: 'Masala papad' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxeDNkRGZCQoMzQ4y2TTgajMOu5yhtpyEj4ZC7mChXs69lUB8a', price: 6, name: 'Matric bhujia' }
        ];
        this.drinksProducts = [
            { imgPath: 'https://miro.medium.com/max/11520/1*wRSrqe_WdsPsv4XdHDou6Q.jpeg', price: 2, name: 'Thandai mix' },
            { imgPath: 'https://c.ndtvimg.com/2019-06/1m2a2or8_vitamin-c-rich-drinks_625x300_25_June_19.jpg', price: 4, name: 'Lassi lajwab' },
            { imgPath: 'https://snacksandsips.com/wp-content/uploads/2018/08/02-Cherry-Lemonade.jpg', price: 5.5, name: 'Aam panna' },
            { imgPath: 'https://pizzazzerie.com/wp-content/uploads/2015/07/cherry-lemonade-recipe-pizzazzerie.jpg', price: 6, name: 'Sikanji soda' },
            { imgPath: 'https://www.fifteenspatulas.com/wp-content/uploads/2015/07/Refreshing-Summer-Drinks-Fifteen-Spatulas-1.jpg', price: 7, name: 'Shrabati sabab' },
            { imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSD-X5xnvAQXT_T59BU1_acOxlUo3A1TNW23V6Y7KaCPYWWLr5A', price: 3.5, name: 'Kokam shrabat' }
        ];
        this.viewProducts = [];
    }
    ngOnInit() {
        this.viewProducts = this.pizzaProducts;
    }
    onCategoryTabChange(event) {
        console.log("sdfsdfsdf", event.detail.value);
        if (event.detail.value == 'PIZZA') {
            this.viewProducts = this.pizzaProducts;
        }
        else if (event.detail.value == 'BURGER') {
            this.viewProducts = this.burgerProducts;
        }
        else if (event.detail.value == 'DESSERTS') {
            this.viewProducts = this.dessertsProducts;
        }
        else if (event.detail.value == 'SNACKS') {
            this.viewProducts = this.snacksProducts;
        }
        else if (event.detail.value == 'DRINKS') {
            this.viewProducts = this.drinksProducts;
        }
    }
    onProductClick() {
        this.router.navigate(['/menu-tab/view-product']);
    }
};
MenuTabPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuTabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-tab',
        template: __webpack_require__(/*! raw-loader!./menu-tab.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu-tab/menu-tab.page.html"),
        styles: [__webpack_require__(/*! ./menu-tab.page.scss */ "./src/app/menu-tab/menu-tab.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MenuTabPage);



/***/ })

}]);
//# sourceMappingURL=menu-tab-menu-tab-module-es2015.js.map