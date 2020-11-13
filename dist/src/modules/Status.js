"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status = /** @class */ (function () {
    function Status() {
        this.setPaused();
    }
    Status.prototype.setPaused = function () {
        this.condition = "pause";
    };
    Status.prototype.setPlaying = function () {
        this.condition = "play";
    };
    Status.prototype.isPlaying = function () {
        return this.condition === "play";
    };
    Status.prototype.isPaused = function () {
        return this.condition === "pause";
    };
    return Status;
}());
exports.default = Status;
