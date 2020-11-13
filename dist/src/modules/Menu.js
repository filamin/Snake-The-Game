"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu = /** @class */ (function () {
    function Menu() {
        this.startBtn = document.querySelector("#start-btn");
        this.pauseBtn = document.querySelector("#pause-btn");
    }
    Menu.prototype.addButtonsClickListeners = function (startBtn, pauseBtn) {
        this.startBtn.addEventListener("click", startBtn);
        this.pauseBtn.addEventListener("click", pauseBtn);
    };
    return Menu;
}());
exports.default = Menu;
