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
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
let AlarmComponent = class AlarmComponent {
    constructor(http) {
        this.title = 'Contextual Collaboration';
        this.observable$ = http
            .get('/api/public/simple')
            .map((response) => response.json());
    }
};
AlarmComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }), 
    __metadata('design:paramtypes', [http_1.Http])
], AlarmComponent);
exports.AlarmComponent = AlarmComponent;
//# sourceMappingURL=/Users/jilin/Programming/contextualcollabnodejs/dist/server/alarm/alarm.component.js.map
