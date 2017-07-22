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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var player_service_1 = require("./player.service");
var playersComponent = (function () {
    function playersComponent(playerService, router) {
        this.playerService = playerService;
        this.router = router;
    }
    playersComponent.prototype.getplayers = function () {
        var _this = this;
        this.playerService
            .getplayers()
            .then(function (players) { return _this.players = players; });
    };
    playersComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.playerService.create(name)
            .then(function (player) {
            _this.players.push(player);
            _this.selectedplayer = null;
        });
    };
    playersComponent.prototype.delete = function (player) {
        var _this = this;
        this.playerService
            .delete(player.id)
            .then(function () {
            _this.players = _this.players.filter(function (h) { return h !== player; });
            if (_this.selectedplayer === player) {
                _this.selectedplayer = null;
            }
        });
    };
    playersComponent.prototype.ngOnInit = function () {
        this.getplayers();
    };
    playersComponent.prototype.onSelect = function (player) {
        this.selectedplayer = player;
    };
    playersComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedplayer.id]);
    };
    return playersComponent;
}());
playersComponent = __decorate([
    core_1.Component({
        selector: 'my-players',
        templateUrl: './players.component.html',
        styleUrls: ['./players.component.css']
    }),
    __metadata("design:paramtypes", [player_service_1.playerService,
        router_1.Router])
], playersComponent);
exports.playersComponent = playersComponent;
//# sourceMappingURL=players.component.js.map