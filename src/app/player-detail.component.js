"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var player_service_1 = require("./player.service");
var playerDetailComponent = (function () {
    function playerDetailComponent(playerService, route, location) {
        this.playerService = playerService;
        this.route = route;
        this.location = location;
    }
    playerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.playerService.getplayer(+params.get('id')); })
            .subscribe(function (player) { return _this.player = player; });
    };
    playerDetailComponent.prototype.save = function () {
        var _this = this;
        this.playerService.update(this.player)
            .then(function () { return _this.goBack(); });
    };
    playerDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return playerDetailComponent;
}());
playerDetailComponent = __decorate([
    core_1.Component({
        selector: 'player-detail',
        templateUrl: './player-detail.component.html',
        styleUrls: ['./player-detail.component.css']
    }),
    __metadata("design:paramtypes", [player_service_1.playerService,
        router_1.ActivatedRoute,
        common_1.Location])
], playerDetailComponent);
exports.playerDetailComponent = playerDetailComponent;
//# sourceMappingURL=player-detail.component.js.map