"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Snake = /** @class */ (function () {
    function Snake() {
        this.possibleDirection = ['up', 'down', 'left', 'right'];
        this.body = [{
                x: 1,
                y: 1,
            }];
        this.direction = 'down';
    }
    Snake.prototype.changeDirection = function (newDirection) {
        if (!this.possibleDirection.includes(newDirection)) {
            throw new Error("\u041F\u0435\u0440\u0435\u0434\u0430\u043D\u043E \u043D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F: " + newDirection);
        }
        if (this.isOppositeDirection(newDirection)) {
            return;
        }
        this.direction = newDirection;
    };
    Snake.prototype.isOppositeDirection = function (newDirection) {
        if (this.direction === 'down' && newDirection === 'up') {
            return true;
        }
        if (this.direction === 'up' && newDirection === 'down') {
            return true;
        }
        if (this.direction === 'left' && newDirection === 'right') {
            return true;
        }
        if (this.direction === 'right' && newDirection === 'left') {
            return true;
        }
        return false;
    };
    //Следующий шаг змейки
    Snake.prototype.performStep = function () {
        var currentHeadCoords = this.body[0]; //Head
        var newHeadCoords = {
            x: currentHeadCoords.x,
            y: currentHeadCoords.y,
        };
        switch (this.direction) {
            case 'down':
                newHeadCoords.y++;
                break;
            case 'up':
                newHeadCoords.y--;
                break;
            case 'left':
                newHeadCoords.x--;
                break;
            case 'right':
                newHeadCoords.x++;
                break;
        }
        this.body.unshift(newHeadCoords);
        this.body.pop();
    };
    //Увеличение тела змейки
    Snake.prototype.increaseBody = function () {
        var bodyLastCell = this.body[this.body.length - 1];
        var newBodyLastCell = {
            x: bodyLastCell.x,
            y: bodyLastCell.y,
        };
        this.body.push(newBodyLastCell);
    };
    return Snake;
}());
exports.default = Snake;
