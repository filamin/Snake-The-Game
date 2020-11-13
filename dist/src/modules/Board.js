"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board = /** @class */ (function () {
    function Board() {
        this.boardElement = document.getElementById("game");
    }
    Board.prototype.init = function (settings, snake) {
        this.settings = settings;
        this.snake = snake;
    };
    Board.prototype.renderBoard = function () {
        this.boardElement.innerHTML = "";
        for (var row = 0; row < this.settings.rowsCount; row++) {
            var tr = document.createElement("tr");
            this.boardElement.appendChild(tr);
            for (var col = 0; col < this.settings.colsCount; col++) {
                var td = document.createElement("td");
                tr.appendChild(td);
            }
        }
    };
    Board.prototype.renderSnake = function () {
        var snakeElements = this.getSnakeBodyElements(this.snake.body);
        if (snakeElements) {
            snakeElements.forEach(function (td) {
                td.classList.add("snake");
            });
        }
    };
    //Получение 1 ячейки по координатам
    Board.prototype.getCell = function (x, y) {
        return this.boardElement.querySelector("tr:nth-child(" + y + ") td:nth-child(" + x + ")");
    };
    //Получение всех блоков тела змейки
    Board.prototype.getSnakeBodyElements = function (bodyCoords) {
        if (bodyCoords === void 0) { bodyCoords = []; }
        var bodyElements = [];
        if (bodyCoords.length > 0) {
            for (var _i = 0, bodyCoords_1 = bodyCoords; _i < bodyCoords_1.length; _i++) {
                var value = bodyCoords_1[_i];
                var element = this.getCell(value.x, value.y);
                bodyElements.push(element);
            }
            return bodyElements;
        }
        return null;
    };
    //Упирается ли змейка в стену
    Board.prototype.isNextStepWall = function (nextSnakeCoords) {
        var nextCell = this.getCell(nextSnakeCoords.x, nextSnakeCoords.y);
        return nextCell === null;
    };
    //Еда на игровом поле (добавление)
    Board.prototype.renderFood = function (coords) {
        var foodCell = this.getCell(coords.x, coords.y);
        foodCell.classList.add("food");
    };
    Board.prototype.isHeadOnFoodSnake = function () {
        return this.boardElement.querySelector(".food").classList.contains("snake");
    };
    //Очистка поля
    Board.prototype.clear = function () {
        var tdAll = document.querySelectorAll("td");
        tdAll.forEach(function (td) {
            td.className = "";
        });
    };
    return Board;
}());
exports.default = Board;
