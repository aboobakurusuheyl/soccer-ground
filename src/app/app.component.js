"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Soccer Ground';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div style=\"text-align: center\">\n    <p class=\"pic\" style><img src=\"/images/logo.png\" /></p>\n    </div>\n    <div id=\"nav\" class=\"topnav\">\n      <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Top Players</a>\n      <a routerLink=\"/players\" routerLinkActive=\"active\">Players</a>\n      <a style=\"text-align: center\"><player-search></player-search></a>\n    </div>\n    <router-outlet></router-outlet>\n  ",
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
// alined all the content center and put the search in nav bar 
//# sourceMappingURL=app.component.js.map