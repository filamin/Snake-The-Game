"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Food = /** @class */ (function () {
    function Food() {
        this.x = null;
        this.y = null;
    }
    Food.prototype.init = function (settings, snake, board) {
        this.settings = settings;
        this.snake = snake;
        this.board = board;
    };
    //Получение координат новой ячейки и отрисовка на поле
    Food.prototype.setNewFood = function () {
        var food = this.randomCoords();
        this.board.renderFood(food);
    };
    //Возвращает случайные координаты
    Food.prototype.randomCoords = function () {
        while (true) {
            this.x = Math.floor(Math.random() * this.settings.colsCount) + 1;
            this.y = Math.floor(Math.random() * this.settings.rowsCount) + 1;
            var cell = this.board.getCell(this.x, this.y);
            if (cell.classList.contains('snake')) {
                continue;
            }
            return this;
        }
    };
    //Размещение еды на игровом поле
    Food.prototype.setFood = function () {
        this.board.renderFood(this);
    };
    return Food;
}());
exports.default = Food;
